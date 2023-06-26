import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export const apiUrl = "http://localhost:3000";

let user_data = null
let admin_data = null

if (browser) {
    user_data = localStorage.getItem("user_data") ? JSON.parse(localStorage.getItem("user_data")) : null
    admin_data = localStorage.getItem("admin_data") ? JSON.parse(localStorage.getItem("admin_data")) : null

     const refreshData = async () => {
        if (user_data) {
            const res = await fetch(`${apiUrl}/user/${user_data.user_id}`)
            const data = await res.json()
    
            if (res.status === 200) {
                user_data = data?.user_data
                localStorage.setItem("user_data", JSON.stringify(data?.user_data))
                localStorage.removeItem("admin_data")
    
                user.set(user_data)
            }
        } else if (admin_data) {
            const res = await fetch(`${apiUrl}/admin/${admin_data.admin_id}`)
            const data = await res.json()
    
            if (res.status === 200) {
                admin_data = data?.admin_data
                localStorage.setItem("admin_data", JSON.stringify(data?.admin_data))
                localStorage.removeItem("user_data")
    
                admin.set(admin_data)
            }
        }
    }

    refreshData()
}


export const admin = writable(
    admin_data
);

export const user = writable(
    user_data
)
