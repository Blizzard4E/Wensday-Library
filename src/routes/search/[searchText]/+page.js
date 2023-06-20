/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        searchText: params.searchText
    };
}