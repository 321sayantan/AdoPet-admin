import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="container-fluid px-2 px-md-4">
        <div
          className="page-header min-height-300 border-radius-xl mt-4"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <span className="mask  bg-gradient-primary  opacity-6" />
        </div>
        <Tabs defaultIndex={0} className="card card-body mx-3 mx-md-4 mt-n6">
          <div className="row gx-4 mb-2">
            <div className="col-auto">
              <div className="avatar avatar-xxl position-relative">
                <img
                  src=" /img/bruce-mars.jpg"
                  alt="profile_image"
                  className="w-100 border-radius-lg shadow-sm"
                />
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">Richard Davis</h5>
                <p className="mb-0 font-weight-normal text-sm">
                  CEO / Co-Founder
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
              <div className="nav-wrapper position-relative end-0">
                <TabList className="nav nav-pills nav-fill p-1 cursor-pointer">
                  <Tab
                    className="nav-item"
                    selectedClassName="active text-bold"
                  >
                    <div className="nav-link mb-0 px-0 py-1">
                      <i className="material-icons text-lg position-relative">
                        home
                      </i>
                      <span className="ms-1">App</span>
                    </div>
                  </Tab>
                  <Tab
                    className="nav-item"
                    selectedClassName="active text-bold"
                  >
                    <div className="nav-link mb-0 px-0 py-1">
                      <i className="material-icons text-lg position-relative">
                        email
                      </i>
                      <span className="ms-1">Messages</span>
                    </div>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row">
              <TabPanel className="col-12 mb-3">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3 mt-2 mb-1">
                    <div className="row">
                      <div className="col-md-8 d-flex align-items-center">
                        <h6 className="mb-0">Profile Information</h6>
                      </div>
                      <div className="col-md-4 text-end">
                        <Link to="edit">
                          <i
                            className="fas fa-user-edit text-secondary text-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Edit Profile"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body row p-3">
                    <div className="col-md-6 px-3">
                      <p className="text-sm">
                        Hi, I&apos;m Alec Thompson, Decisions: If you can&apos;t
                        decide, the answer is no. If two equally difficult
                        paths, choose the one more painful in the short term
                        (pain avoidance is creating an illusion of equality).
                      </p>
                      <hr className="horizontal gray-light my-4" />
                    </div>
                    <div className="col-md-6 px-3">
                      <ul className="list-group">
                        <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                          <strong className="text-dark">Full Name:</strong>{" "}
                          &nbsp; Alec M. Thompson
                        </li>
                        <li className="list-group-item border-0 ps-0 text-sm">
                          <strong className="text-dark">Mobile:</strong> &nbsp;
                          (44) 123 1234 123
                        </li>
                        <li className="list-group-item border-0 ps-0 text-sm">
                          <strong className="text-dark">Email:</strong> &nbsp;
                          alecthompson@mail.com
                        </li>
                        <li className="list-group-item border-0 ps-0 text-sm">
                          <strong className="text-dark">Location:</strong>{" "}
                          &nbsp; USA
                        </li>
                        <li className="list-group-item border-0 ps-0 pb-0">
                          <strong className="text-dark text-sm">Social:</strong>{" "}
                          &nbsp;
                          <a
                            className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
                            href="javascript:;"
                          >
                            <i className="fab fa-facebook fa-lg" />
                          </a>
                          <a
                            className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
                            href="javascript:;"
                          >
                            <i className="fab fa-twitter fa-lg" />
                          </a>
                          <a
                            className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
                            href="javascript:;"
                          >
                            <i className="fab fa-instagram fa-lg" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="col-12 mt-3 mb-3">
                <div className="card card-plain h-100">
                  {/* <div className="text-center">
                    <h4 className="text-bold text-warning">
                      No previous conversations found!
                    </h4>
                  </div> */}
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Conversations</h6>
                  </div>
                  <div className="card-body p-3">
                    <ul className="list-group">
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                        <div className="avatar me-3">
                          <img
                            src=" /img/kal-visuals-square.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Sophie B.</h6>
                          <p className="mb-0 text-xs">
                            Hi! I need more information..
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div className="avatar me-3">
                          <img
                            src=" /img/marie.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Anne Marie</h6>
                          <p className="mb-0 text-xs">
                            Awesome work, can you..
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div className="avatar me-3">
                          <img
                            src=" /img/ivana-square.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Ivanna</h6>
                          <p className="mb-0 text-xs">About files I can..</p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div className="avatar me-3">
                          <img
                            src=" /img/team-4.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Peterson</h6>
                          <p className="mb-0 text-xs">
                            Have a great afternoon..
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0">
                        <div className="avatar me-3">
                          <img
                            src=" /img/team-3.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Nick Daniel</h6>
                          <p className="mb-0 text-xs">
                            Hi! I need more information..
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>

      {/* footer */}
      <Footer className="footer py-4  " />
      {/* //footer */}
    </>
  );
};

export default Profile;
