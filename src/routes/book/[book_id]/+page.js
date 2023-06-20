/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        book_id: params.book_id
    };
}