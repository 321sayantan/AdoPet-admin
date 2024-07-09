import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div
      className="page-header align-items-start min-vh-100"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <span className="mask bg-gradient-dark opacity-6" />
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white fs-3 font-weight-bolder text-center mt-2 mb-2">
                    Welcome
                  </h4>
                  <div className="text-center mt-2">
                    <p className="text-sm" style={{ color: "#aaa" }}>
                      to &nbsp;
                      <span className="fw-bold text-uppercase">Admin</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form role="form" className="text-start">
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="d-flex align-items-center justify-content-end mb-3">
                    <Link
                      className="text-sm fw-semibold cursor-pointer"
                      to="../forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn bg-gradient-primary w-100 my-4 mb-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer className="footer position-absolute bottom-2 py-2 w-100 " />
    </div>
  );
};

export default Login;
