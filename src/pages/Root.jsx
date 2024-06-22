import { Outlet, Link, NavLink } from "react-router-dom";
import UIsettingsPanel from "../components/UIsettingsPanel";
import NotificationMenu from "../components/NotificationMenu";
import { useState } from "react";

const Root = () => {
  const [show, setShow] = useState(false);

  return (
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
          <Link className="navbar-brand m-0" href="" target="_blank">
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
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link text-white ${({ isActive }) =>
                  isActive ? "active bg-gradient-primary" : ""}`}
                to="billing"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Billing</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link text-white ${({ isActive }) =>
                  isActive ? "active bg-gradient-primary" : ""}`}
                to="notifications"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text ms-1">Notifications</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <button
              className="btn bg-gradient-primary mt-4 w-100 d-flex align-items-center justify-content-center"
              to=""
              type="button"
            >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">logout</i>
              </div>
              <span className="nav-link-text ms-1">Sign Out</span>
            </button>
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
                  <label className="form-label">Type here...</label>
                  <input type="text" className="form-control" />
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
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <strong
                    className="nav-link text-body p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell cursor-pointer" />
                  </strong>
                  <NotificationMenu />
                </li>
                <li className="nav-item d-flex align-items-center">
                  <div className="auth-user">
                    <button
                      type="button"
                      className="profile-icon d-flex justify-content-center align-items-center"
                      // onClick={() => setShowProfile(true)}
                    >
                      <i className="material-icons opacity-10">person</i>
                    </button>
                  </div>
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

      {/* settings panel for UI */}
      <UIsettingsPanel />
      {/* //settings panel for UI */}
    </div>
  );
};

export default Root;
