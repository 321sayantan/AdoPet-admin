import { Suspense, useEffect, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import MiniCountCard from "../components/MiniCountCard";
import RecentAdoptionsList from "../components/RecentAdoptionsList";
import RecentRescuesList from "../components/RecentRescuesList";
import MiniCntCardSkeleton from "../components/skeletons/MiniCntCardSkeleton";
import {
  RecentAdoptionsSkeleton,
  RecentRescuesSkeleton,
} from "../components/skeletons/RecentPostsSkeleton";

export const Dashboard = () => {
  const { dashboardData } = useLoaderData();

  const fallback1 = (
    <>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <MiniCntCardSkeleton />
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <MiniCntCardSkeleton />
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <MiniCntCardSkeleton />
      </div>
      <div className="col-xl-3 col-sm-6">
        <MiniCntCardSkeleton />
      </div>
    </>
  );
  const fallback2 = <RecentAdoptionsSkeleton />;
  const fallback3 = <RecentRescuesSkeleton />;


  return (
    <>
      <div className="container-fluid py-4">
        <div className="row mb-4">
          <Suspense fallback={fallback1}>
            <Await resolve={dashboardData}>
              {(data) => (
                <>
                  <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <MiniCountCard
                      icon="person"
                      title="Total Users"
                      countVal={+data.total_user}
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
                      countVal={+data.total_volunteers}
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
                      countVal={+data.total_Adopt_Post}
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
                      countVal={+data.total_Rescue_Post}
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
                </>
              )}
            </Await>
          </Suspense>
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
                    <Suspense fallback={fallback2}>
                      <Await resolve={dashboardData}>
                        {(data) => (
                          <RecentAdoptionsList posts={data.adopt_list} />
                        )}
                      </Await>
                    </Suspense>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <div className="card-header pb-0">
                <h6>Rescue Requests</h6>
                <Suspense>
                  <Await resolve={dashboardData}>
                    {(data) => (
                      <p className="text-sm">
                        <i
                          className="fa fa-arrow-up text-success"
                          aria-hidden="true"
                        />
                        <span className="font-weight-bold">
                          {Math.round((10 / +data.total_Rescue_Post) * 100)}%
                        </span>{" "}
                        in recent
                      </p>
                    )}
                  </Await>
                </Suspense>
              </div>
              <div className="card-body p-3">
                <div className="table-responsive">
                  <table className="table align-items-center mb-0">
                    <Suspense fallback={fallback3}>
                      <Await resolve={dashboardData}>
                        {(data) => (
                          <RecentRescuesList posts={data.rescue_list} />
                        )}
                      </Await>
                    </Suspense>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer className="footer py-4  " />
      </div>
    </>
  );
};

// <p>
// {dashboardData.total_user}

// </p>
