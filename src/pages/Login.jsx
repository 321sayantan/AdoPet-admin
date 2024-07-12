// import { v4 as generateToken } from "uuid";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { useState, useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginDataHandler = async (loginData) => {
    try {
      const response = await toast.promise(
        // fetch("http://localhost:5000/admin/login", {
        fetch("https://adopet-backend.onrender.com/admin/login", {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        }),
        {
          pending: "Logging in...",
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success(result.Message);
        login(result.token);
        navigate("..");
        setError(null);
      } else {
        toast.error(result.msg);
        setError(result.msg);
      }
    } catch (err) {
      console.error("Error submitting form! ", err);
    }
  };

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
                <LoginForm error={error} onSubmit={loginDataHandler} />
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
