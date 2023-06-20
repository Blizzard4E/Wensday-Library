import { writable } from 'svelte/store';

export const admin = writable(
    // {
    //     admin_id: 1,
    //     username: "Thanos",
    //     password: "library",
    //     profile_pic: "https://i.pinimg.com/280x280_RS/ec/09/6b/ec096b70b70811fa882422ac610b5fba.jpg",
    // }
);
export const user = writable(
    {
        user_id: 1,
        username: "Barry Allen",
        password: "Speed",
        email: "theflasah@gmail.com",
        profile_pic: "https://pbs.twimg.com/profile_images/557797323569250304/zpGjrYwi_400x400.png",
        title: "Senior",
        balance: 300
    }
)