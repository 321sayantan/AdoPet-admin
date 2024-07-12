import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

// for users
export async function fetchFilteredUsers({ signal, searchTerm }) {
    const adminJwt = localStorage.getItem('admin-jwt')
    let url = `http://localhost:5000/admin/filterUsers?search=${searchTerm}`;
    // let url = `https://adopet-backend.onrender.com/admin/filterUsers?search=${searchTerm}`;

    const response = await fetch(url, {
        headers: {
            'authorization': `Bearer ${adminJwt}`
        },
        signal: signal
    });

    if (!response.ok) {
        const error = new Error('failed fetching the users!');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const result = await response.json();
    // console.log(result)
    return result;
}

// for adopt posts
export async function fetchFilteredAdoptposts({ signal, searchTerm }) {
    const adminJwt = localStorage.getItem('admin-jwt')
    let url = `http://localhost:5000/admin/filterAdoptPosts?search=${searchTerm}`;
    // let url = `https://adopet-backend.onrender.com/admin/filterAdoptPosts?search=${searchTerm}`;

    const response = await fetch(url, {
        headers: {
            'authorization': `Bearer ${adminJwt}`
        },
        signal: signal
    });

    if (!response.ok) {
        const error = new Error('failed fetching the users!');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const result = await response.json();
    // console.log(result)
    return result;
}

// for adopt posts
export async function fetchFilteredRescueposts({ signal, searchTerm }) {
    const adminJwt = localStorage.getItem('admin-jwt')
    let url = `http://localhost:5000/admin/filterRescuePosts?search=${searchTerm}`;
    // let url = `https://adopet-backend.onrender.com/admin/filterRescuePosts?search=${searchTerm}`;

    const response = await fetch(url, {
        headers: {
            'authorization': `Bearer ${adminJwt}`
        },
        signal: signal
    });

    if (!response.ok) {
        const error = new Error('failed fetching the users!');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const result = await response.json();
    // console.log(result)
    return result;
}
