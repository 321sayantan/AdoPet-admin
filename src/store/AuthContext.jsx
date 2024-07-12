/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminJwt, setAdminJwt] = useState(null);

  useEffect(() => {
    const storedJwt = localStorage.getItem("admin-jwt");
    if (storedJwt === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
    setAdminJwt(storedJwt);
  }, []);

  useEffect(() => {
    isTokenVerified().then((data) => {
      console.log(data);
      if (!data) {
        logout();
      }
    });
  }, []);

  function login(token) {
    if (token) {
      setIsAuthenticated(true);
      setAdminJwt(token);
    }
    localStorage.setItem("admin-jwt", token);
  }

  function logout() {
    setIsAuthenticated(false);
    setAdminJwt(null);
    localStorage.removeItem("admin-jwt");
  }

  async function isTokenVerified() {
    try {
      const jwt = localStorage.getItem("admin-jwt");
      // console.log(jwt)
      // const response = await fetch("http://localhost:5000/user/validateUser", {
      const response = await fetch(
        "https://adopet-backend.onrender.com/user/validateUser",
        {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        }
      );
      const result = await response.json();
      console.log(result.msg);

      return result.verified;
    } catch (error) {
      console.log(error);
    }
  }

  const authValue = {
    isAuthenticated,
    adminJwt,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
