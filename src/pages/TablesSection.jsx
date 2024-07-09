import { Await, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import UsersList from "../components/UsersList";
import { Suspense } from "react";
import UsersListSkeleton from "../components/skeletons/UsersListSkeleton";

const TablesSection = () => {
  const { allUsers } = useLoaderData();
  const fallback = <UsersListSkeleton />;

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Users table</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
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
                  <Suspense fallback={fallback}>
                    <Await resolve={allUsers}>
                      {(data) => <UsersList users={data.allUser} />}
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

export default TablesSection;
