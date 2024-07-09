import RescueList from "../components/RescueList";
import Footer from "../components/Footer";
import { RescuePostsSkeleton } from "../components/skeletons/PostsSkeleton";
import { toast } from "react-toastify";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const RescuePostsPage = () => {
  const { allRescuePost } = useLoaderData();
  const { adminJwt } = useContext(AuthContext);
  const navigate = useNavigate();
  const fallback = <RescuePostsSkeleton />;

  const deletePostHandler = async (id) => {
    try {
      const response = await toast.promise(
        fetch(`http://localhost:5000/admin/deleteRescuePost/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${adminJwt}`,
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
        navigate("../rescue-posts");
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

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">
                  Rescue Posts
                </h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
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
                  <Suspense fallback={fallback}>
                    <Await resolve={allRescuePost}>
                      {(data) => (
                        <RescueList
                          rescues={data.allRescuePost}
                          onDelete={deletePostHandler}
                        />
                      )}
                    </Await>
                  </Suspense>
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
