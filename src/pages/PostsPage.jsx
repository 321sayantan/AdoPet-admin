import AdoptionsList from "../components/AdoptionsList";
import Footer from "../components/Footer";
import RescueList from "../components/RescueList";
// import {
//   AdoptPostsSkeleton,
//   RescuePostsSkeleton,
// } from "../components/skeletons/PostsSkeleton";

const PostsPage = () => {
  // const fallback1 = <AdoptPostsSkeleton />;
  // const fallback2 = <RescuePostsSkeleton />;

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">
                  Adoption Posts
                </h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
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
                  <AdoptionsList />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <RescueList />
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

export default PostsPage;
