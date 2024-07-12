import { Suspense, useRef } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import { VectorMap } from "@react-jvectormap/core";
import { inMill } from "@react-jvectormap/india";
// import { worldMill } from "@react-jvectormap/world";
import VectorMapPreloader from "../components/skeletons/VectorMapPreloader";

const VectorMapPage = () => {
  const { usersMap } = useLoaderData();
  const mapRef = useRef();
  const fallback = <VectorMapPreloader msg="Getting the users..." />;

  return (
    <div className="container-fluid py-4">
      <div className="row min-vh-80">
        <div className="col-12">
          <div className="card h-100">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h5 className="text-white text-capitalize ps-3">
                  Users Worldwide
                </h5>
              </div>
            </div>
            <div className="card-body">
              <div className="mt-2 min-height-600">
                <Suspense fallback={fallback}>
                  <Await resolve={usersMap}>
                    {(data) => (
                      <div
                        ref={mapRef}
                        className="vector-map__wrapper position-relative"
                      >
                        <VectorMap
                          map={inMill}
                          zoomOnScroll={true}
                          zoomButtons={true}
                          containerStyle={{
                            width: "100%",
                            height: "100%",
                          }}
                          markersSelectable={true}
                          markers={data}
                          onMarkerTipShow={(event, div, code) => {
                            div.html(
                              `<div class="d-flex flex-column label-wrapper">
                              <strong>${data[code].name}</strong>
                              <em>${
                                data[code].is_volunteer ? "Volunteer" : "User"
                              }</em>
                              <p>
                                <span class="material-icons-round">place</span>
                                ${data[code].user_region}
                              </p>
                              </div>`
                            );
                          }}
                          markerStyle={{
                            initial: {
                              fill: "#e91e63",
                            },
                            hover: {
                              fill: "#e9ce1e",
                            },
                            selected: {
                              fill: "#e9ce1e",
                            },
                          }}
                        />
                      </div>
                    )}
                  </Await>
                </Suspense>
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

export default VectorMapPage;
