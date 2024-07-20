import RescueList from "../components/RescueList";
import Footer from "../components/Footer";
import { RescuePostsSkeleton } from "../components/skeletons/PostsSkeleton";
import SearchBox from "../components/SearchBox";
import { Alert } from "@mui/material";
import { toast } from "react-toastify";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredRescueposts } from "../misc/httpRequests";

const RescuePostsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { allRescuePost } = useLoaderData();
  const { adminJwt } = useContext(AuthContext);
  const navigate = useNavigate();
  const fallback = <RescuePostsSkeleton />;
  let content, alertContent;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["filteredRescuePosts", { searchTerm }],
    queryFn: ({ signal, queryKey }) =>
      fetchFilteredRescueposts({ signal, ...queryKey[1] }),
    enabled: searchTerm !== undefined,
  });

  const deletePostHandler = async (id) => {
    try {
      const response = await toast.promise(
        // fetch(`http://localhost:5000/admin/deleteRescuePost/${id}`, {
        fetch(
          `https://adopet-backend.onrender.com/admin/deleteRescuePost/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${adminJwt}`,
            },
          }
        ),
        {
          pending: "Deleting post...",
        }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        // window.location.reload();
        navigate("../rescue-posts");
        console.log("post of id: " + id + " deleted");
        toast.success(result.msg);
      } else {
        toast.error(result);
        console.error(result);
      }
    } catch (err) {
      console.error(err || "Something went wrong");
    }
  };

  const restrictPostHandler = async (id) => {
    console.log("Restricted post with id: " + id);
    //ekhane api ta lagiye dibi
  };

  const getSearchedNameHandler = (searchedVal) => {
    setSearchTerm(searchedVal);
  };

  if (isLoading) content = fallback;

  if (isError) {
    content = (
      <Alert severity="error" variant="filled">
        {error}
      </Alert>
    );
  }

  if (data) {
    content = <RescueList onDelete={deletePostHandler} rescues={data.posts} />;
    alertContent = (
      <div className="px-3 d-flex">
        <Alert
          className="fs-4 d-flex align-items-center"
          severity="info"
          sx={{ width: "100%" }}
        >
          <em className="fw-bold">{data.postsCount}</em>&nbsp;
          <span>match(es) found...</span>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 d-flex align-items-center justify-content-between">
                <h6 className="text-white text-capitalize ps-3">
                  Rescue Posts
                </h6>
                <div className="pe-3 d-flex align-items-center flex-column">
                  <SearchBox
                    placeholder="Find by location..."
                    onSubmit={getSearchedNameHandler}
                  />
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                {searchTerm && alertContent}
                <table className="table align-items-center justify-content-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Vet (category)
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Conditions
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Status
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                        Owner
                      </th>
                      <th />
                    </tr>
                  </thead>
                  {allRescuePost && !searchTerm && (
                    <Suspense fallback={fallback}>
                      <Await resolve={allRescuePost}>
                        {(data) => (
                          <RescueList
                            rescues={data.allRescuePost}
                            onDelete={deletePostHandler}
                            onRestrict={restrictPostHandler}
                          />
                        )}
                      </Await>
                    </Suspense>
                  )}
                  {searchTerm && content}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer className="footer py-4  " />
      {/* //footer */}
    </div>
  );
};

export default RescuePostsPage;
