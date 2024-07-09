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

  // useEffect(() => {
  //   if (!isTokenVerified()) {
  //     logout();
  //   }
  // });

  function login(token) {
    if (token) {
      setIsAuthenticated(true);
      setAdminJwt(token);
    }
    localStorage.setItem("jwt", token);
  }

  function logout() {
    setIsAuthenticated(false);
    setAdminJwt(null);
    localStorage.removeItem("jwt");
  }

  // async function isTokenVerified() {
  //   try {
  //     const response = await fetch("http://localhost:5000/user/validateUser", {
  //       headers: {
  //         authorization: `Bearer ${jwt}`,
  //       },
  //     });
  //     const result = await response.json();
  //     console.log(result.msg);

  //     return result.verified;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
