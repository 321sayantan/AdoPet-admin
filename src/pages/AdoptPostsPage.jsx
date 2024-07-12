import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext,useState } from "react";
import { toast } from "react-toastify";
import { Alert } from "@mui/material";
import AdoptionsList from "../components/AdoptionsList";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import { AdoptPostsSkeleton } from "../components/skeletons/PostsSkeleton";
import { AuthContext } from "../store/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredAdoptposts } from "../misc/httpRequests";

const AdoptPostsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { allAdoptPost } = useLoaderData();
  const { adminJwt } = useContext(AuthContext);
  const navigate = useNavigate();
  const fallback = <AdoptPostsSkeleton />;
  let content, alertContent;

  const {data,isLoading, isError,error} = useQuery({
    queryKey: ['filteredAdoptPosts',{searchTerm}],
    queryFn: ({ signal, queryKey }) =>
      fetchFilteredAdoptposts({ signal, ...queryKey[1] }),
    enabled: searchTerm !== undefined,
  })

  const deletePostHandler = async (id) => {
    try {
      const response = await toast.promise(
        // fetch(`http://localhost:5000/admin/deleteAdoptPost/${id}`, {
        fetch(
          `https://adopet-backend.onrender.com/admin/deleteAdoptPost/${id}`,
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
        navigate("../adopt-posts");
        console.log('post of id: '+id+' deleted');
        toast.success(result.msg);
      } else {
        toast.error(result);
        console.error(result);
      }
    } catch (err) {
      console.error(err || "Something went wrong");
    }
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
    content = <AdoptionsList onDelete={deletePostHandler} adopts={data.posts} />;
    alertContent = (
      <div className="px-3 d-flex">
        <Alert
          className="fs-4 d-flex align-items-center"
          severity="info"
          sx={{ width: "100%" }}
        >
          <em className="fw-bold">{data.postsCount}</em>{" "}
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
                  Adoption Posts
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
                        Vet
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Category
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
                  {allAdoptPost && !searchTerm && <Suspense fallback={fallback}>
                    <Await resolve={allAdoptPost}>
                      {(data) => (
                        <AdoptionsList
                          onDelete={deletePostHandler}
                          adopts={data.allAdoptPost}
                        />
                      )}
                    </Await>
                  </Suspense>}
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

export default AdoptPostsPage;
