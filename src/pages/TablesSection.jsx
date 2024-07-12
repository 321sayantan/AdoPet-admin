import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import UsersList from "../components/UsersList";
import { Suspense, useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { toast } from "react-toastify";
import UsersListSkeleton from "../components/skeletons/UsersListSkeleton";
import SearchBox from "../components/SearchBox";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredUsers } from "../misc/httpRequests";
import { Alert } from "@mui/material";

const TablesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { allUsers } = useLoaderData();
  const { adminJwt } = useContext(AuthContext);
  const navigate = useNavigate();
  const fallback = <UsersListSkeleton />;
  let content, alertContent;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["filteredUsers", { searchTerm }],
    queryFn: ({ signal, queryKey }) =>
      fetchFilteredUsers({ signal, ...queryKey[1] }),
    enabled: searchTerm !== undefined,
  });

  const deletePostHandler = async (id) => {
    try {
      const response = await toast.promise(
        fetch(`http://localhost:5000/admin/deleteUser/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${adminJwt}`,
          },
        }),
        {
          pending: "Deleting post...",
        }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        // window.location.reload();
        navigate("../tables");
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

  const getSearchedNameHandler = (searchedVal) => {
    setSearchTerm(searchedVal);
  };

  if (isLoading) {
    content = fallback;
  }

  if (isError) {
    content = (
      <Alert severity="error" variant="filled">
        {error}
      </Alert>
    );
  }

  if (data) {
    content = <UsersList onDelete={deletePostHandler} users={data.users} />;
    alertContent = (
      <div className="px-3 d-flex">
        <Alert
          className="fs-4 d-flex align-items-center"
          severity="info"
          sx={{ width: "100%" }}
        >
          <em className="fw-bold">{data.usersCount}</em>{" "}
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
                <h6 className="text-white text-capitalize ps-3">Users table</h6>
                <div className="pe-3 d-flex align-items-center flex-column">
                  <SearchBox
                    placeholder="Find by name..."
                    onSubmit={getSearchedNameHandler}
                  />
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                {searchTerm && alertContent}
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        User
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Function
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Enrolled-On
                      </th>
                      <th className="text-secondary opacity-7" />
                    </tr>
                  </thead>
                  {allUsers && !searchTerm && (
                    <Suspense fallback={fallback}>
                      <Await resolve={allUsers}>
                        {(data) => (
                          <UsersList
                            onDelete={deletePostHandler}
                            users={data.allUser}
                          />
                        )}
                      </Await>
                    </Suspense>
                  )}
                  {searchTerm && content}
                </table>
              </div>
              <div className="d-flex justify-content-end align-items-center mt-3 mx-2 map-link">
                <Link className="fw-bold px-3 py-2" to="users-locations">
                  See Users on Map
                </Link>
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

export default TablesSection;
