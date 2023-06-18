import { writable } from 'svelte/store';

export const admin = writable(
    // {
    //     admin_id: 1,
    //     username: "Thanos",
    //     password: "library"
    // }
);
export const user = writable(
    {
        user_id: 1,
        username: "Barry Allen",
        password: "Speed",
        email: "theflasah@gmail.com",
        profile_url: "https://pbs.twimg.com/profile_images/557797323569250304/zpGjrYwi_400x400.png",
        title: "Senior",
        balance: 300
    }
)