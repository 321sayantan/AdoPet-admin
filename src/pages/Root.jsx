import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";

// import NotificationMenu from "../components/NotificationMenu";

export const Root = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    // <!-- AOS initialisation -->
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-out",
      delay: 400,
      once: true,
    });
    // <!-- //AOS init -->
  });

  // When the user clicks on the button, scroll to the top of the document
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const openConfirmDialog = () => {
    setOpen((prev) => !prev);
    setShow((prev) => !prev);
  };

  const logoutHandler = () => {
    logout();
    setOpen(null);
    navigate("../admin");
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <Modal
            title="Fatal !"
            className="deletePost-confirm-modal"
            onClose={() => setOpen(null)}
          >
            <div className="modal-body py-3">
              <h5
                className="d-flex align-items-center"
                style={{ fontWeight: "400" }}
              >
                <i
                  className="material-icons opacity-10"
                  style={{ fontSize: "2.2rem", color: "#e17900" }}
                >
                  error
                </i>
                <span style={{ marginLeft: "0.5rem" }}>
                  Are you sure to logout?
                </span>
              </h5>

              <div className="modal-footer px-0" style={{ marginBottom: "-1rem" }}>
                <button
                  type="button"
                  className="btn text-secondary"
                  onClick={() => setOpen(null)}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn text-danger"
                  onClick={logoutHandler}
                >
                  Yes
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <div
        className={`g-sidenav-show  bg-gray-100 ${
          show ? "g-sidenav-pinned" : ""
        }`}
      >
        <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
          id="sidenav-main"
        >
          <div className="sidenav-header">
            <i
              className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
              onClick={() => setShow(false)}
            />
            <Link className="navbar-brand m-0" to="">
              <img
                src="https://res.cloudinary.com/dkf5lwjqr/image/upload/v1718507922/adopet/ztzbsifnvyimgetwadxt.png"
                height="80"
                alt="AdoPet"
              />
            </Link>
          </div>
          <hr className="horizontal light mt-0 mb-2" />
          <div
            className="collapse navbar-collapse  w-auto "
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white ${({ isActive }) =>
                    isActive ? "active bg-gradient-primary" : ""}`}
                  to=""
                  onClick={() => setShow(false)}
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white ${({ isActive }) =>
                    isActive ? "active bg-gradient-primary" : ""}`}
                  to="tables"
                  onClick={() => setShow(false)}
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">group</i>
                  </div>
                  <span className="nav-link-text ms-1">Users</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white ${({ isActive }) =>
                    isActive ? "active bg-gradient-primary" : ""}`}
                  to="adopt-posts"
                  onClick={() => setShow(false)}
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">pets</i>
                  </div>
                  <span className="nav-link-text ms-1">Adopt Posts</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white ${({ isActive }) =>
                    isActive ? "active bg-gradient-primary" : ""}`}
                  to="rescue-posts"
                  onClick={() => setShow(false)}
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">pets</i>
                  </div>
                  <span className="nav-link-text ms-1">Rescue Posts</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="sidenav-footer position-absolute w-100 bottom-0 ">
            <div className="mx-3">
              {isAuthenticated && (
                <button
                  className="btn bg-gradient-primary mt-4 w-100 d-flex align-items-center justify-content-center"
                  type="button"
                  onClick={openConfirmDialog}
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">logout</i>
                  </div>
                  <span className="nav-link-text ms-1">Sign Out</span>
                </button>
              )}
            </div>
          </div>
        </aside>
        <main className="main-content border-radius-lg ">
          {/* Navbar */}
          <nav
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            data-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              <div
                className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                id="navbar"
              >
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group input-group-outline">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Type here..."
                    />
                  </div>
                </div>
                <ul className="navbar-nav  justify-content-end">
                  <li className="nav-item d-xl-none px-3 d-flex align-items-center">
                    <div
                      className="nav-link text-body p-0 cursor-pointer"
                      id="iconNavbarSidenav"
                      onClick={() => setShow((prev) => !prev)}
                    >
                      <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                      </div>
                    </div>
                  </li>
                  {/* <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <strong
                    className="nav-link text-body p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell cursor-pointer" />
                  </strong>
                  <NotificationMenu />
                </li> */}
                  <li className="nav-item d-flex align-items-center">
                    {isAuthenticated ? (
                      <div className="auth-user authenticated">
                        <button
                          type="button"
                          className="profile-icon d-flex justify-content-center align-items-center"
                        >
                          <i className="material-icons opacity-10">person</i>
                        </button>
                      </div>
                    ) : (
                      <div className="auth-user">
                        <button
                          type="button"
                          className="profile-icon d-flex justify-content-center align-items-center"
                        >
                          <i className="material-icons opacity-10">person</i>
                        </button>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}

          {/* component pages render here */}
          <Outlet />
          {/* //component pages render here */}
        </main>

        {/* Go to top button */}
        {/* <GotoTopBtn /> */}
        <div className="fixed-plugin">
          <button
            onClick={goToTop}
            className="fixed-plugin-button text-dark position-fixed px-3 py-2"
          >
            <i className="material-icons py-2">navigation</i>
          </button>
        </div>
        {/* //Go to top button */}
      </div>
    </>
  );
};

// export default Root;
