import { PUBLIC_IMGUR_CLIENT_ID } from '$env/static/public';

async function uploadImageToImgur(event) {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    try {
        const res = await fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                Authorization: `Client-ID ${PUBLIC_IMGUR_CLIENT_ID}`,
            },
            body: formData,
        });

        const data = await res.json();
        console.log(data)
        if (res.status == 200) {
            return data.data.link;
        }
    } catch (error) {
        console.log(error);
        alert('Upload image failed');
    }
}

export default uploadImageToImgur