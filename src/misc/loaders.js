import { defer } from "react-router-dom";

async function loadDashboardData() {
    try {
        const adminJwt = localStorage.getItem("admin-jwt");
        console.log(adminJwt)
        const response = await fetch("http://localhost:5000/admin/dashboard", {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${adminJwt}`,
            },
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data || "Failed to fetch");
        }
        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
    }
}

export function loader() {
    setTimeout(() => {
        return defer({
            dashboardData: loadDashboardData(),
        });
    }, 1000)
}