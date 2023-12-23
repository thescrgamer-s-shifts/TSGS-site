export const load = async() => {

    const getposts = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        const filteredData = data.slice(0, 3);
        return filteredData;
    };

    return {
        posts: getposts()
    };
}