import Footer from "../components/Footer";
import MiniCountCard from "../components/MiniCountCard";
import RecentAdoptionsList from "../components/RecentAdoptionsList";
import RecentRescuesList from "../components/RecentRescuesList";
// import MiniCntCardSkeleton from "../components/skeletons/MiniCntCardSkeleton";
// import {
//   RecentAdoptionsSkeleton,
//   RecentRescuesSkeleton,
// } from "../components/skeletons/RecentPostsSkeleton";

const Dashboard = () => {
  // const fallback1 = (
  //   <>
  //     <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
  //       <MiniCntCardSkeleton />
  //     </div>
  //     <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
  //       <MiniCntCardSkeleton />
  //     </div>
  //     <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
  //       <MiniCntCardSkeleton />
  //     </div>
  //     <div className="col-xl-3 col-sm-6">
  //       <MiniCntCardSkeleton />
  //     </div>
  //   </>
  // );
  // const fallback2 = <RecentAdoptionsSkeleton />
  // const fallback3 = <RecentRescuesSkeleton />;

  return (
    <>
      <div className="container-fluid py-4">
        <div className="row mb-4">
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <MiniCountCard
              icon="person"
              title="Total Users"
              countVal={2300}
              classes="bg-gradient-primary shadow-primary"
            >
              <div className="card-footer p-3">
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">
                    +3%{" "}
                  </span>
                  than last month
                </p>
              </div>
            </MiniCountCard>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <MiniCountCard
              icon="person"
              title="Total Volunteers"
              countVal={3462}
              classes="bg-gradient-success shadow-success"
            >
              <div className="card-footer p-3">
                <p className="mb-0">
                  <span className="text-danger text-sm font-weight-bolder">
                    -2%
                  </span>{" "}
                  than yesterday
                </p>
              </div>
            </MiniCountCard>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <MiniCountCard
              icon="pets"
              title="Adopts"
              countVal={530}
              classes="bg-gradient-dark shadow-dark"
            >
              <div className="card-footer p-3">
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">
                    +55%{" "}
                  </span>
                  than last week
                </p>
              </div>
            </MiniCountCard>
          </div>
          <div className="col-xl-3 col-sm-6">
            <MiniCountCard
              icon="pets"
              title="Rescues"
              countVal={56}
              classes="bg-gradient-info shadow-info"
            >
              <div className="card-footer p-3">
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">
                    +5%{" "}
                  </span>
                  than yesterday
                </p>
              </div>
            </MiniCountCard>
          </div>
        </div>

        <div className="row mb-4 mt-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
            <div className="card">
              <div className="card-header pb-0">
                <div className="row">
                  <div className="col-lg-6 col-7">
                    <h6>Adoption Requests</h6>
                    <p className="text-sm mb-0">
                      <i className="fa fa-check text-info" aria-hidden="true" />
                      <span className="font-weight-bold ms-1">
                        10 recently
                      </span>{" "}
                      created
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Vets
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Category
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Owner
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <RecentAdoptionsList />
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <div className="card-header pb-0">
                <h6>Rescue Requests</h6>
                <p className="text-sm">
                  <i
                    className="fa fa-arrow-up text-success"
                    aria-hidden="true"
                  />
                  <span className="font-weight-bold">
                    {Math.round((10 / 56) * 100)}%
                  </span>{" "}
                  in recent
                </p>
              </div>
              <div className="card-body p-3">
                <div className="table-responsive">
                  <table className="table align-items-center mb-0">
                    <RecentRescuesList />
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
    </>
  );
};

export default Dashboard;
