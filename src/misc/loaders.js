import { defer } from "react-router-dom";

async function loadDashboardData(adminJwt) {
    try {
        // const response = await fetch("http://localhost:5000/admin/dashboard", {
        const response = await fetch(
          "https://adopet-backend.onrender.com/admin/dashboard",
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${adminJwt}`,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data || "Failed to fetch");
        }
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function loadAlladoptPosts(adminJwt) {
    try {
        // const response = await fetch("http://localhost:5000/admin/allAdoptPost", {
        const response = await fetch(
          "https://adopet-backend.onrender.com/admin/allAdoptPost",
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${adminJwt}`,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data || "Failed to fetch");
        }
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function loadAllrescuePosts(adminJwt) {
    try {
        // const response = await fetch("http://localhost:5000/admin/allRescuePost", {
        const response = await fetch(
          "https://adopet-backend.onrender.com/admin/allRescuePost",
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${adminJwt}`,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data || "Failed to fetch");
        }
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function loadAllUsers(adminJwt) {
    try {
        // const response = await fetch("http://localhost:5000/admin/allUser", {
        const response = await fetch(
          "https://adopet-backend.onrender.com/admin/allUser",
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${adminJwt}`,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data || "Failed to fetch");
        }
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export function loader() {
    const adminJwt = localStorage.getItem('admin-jwt')
    return defer({
        dashboardData: loadDashboardData(adminJwt),
        allAdoptPost: loadAlladoptPosts(adminJwt),
        allRescuePost: loadAllrescuePosts(adminJwt),
        allUsers: loadAllUsers(adminJwt),
    });
}