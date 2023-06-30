let baseUrl = "https://rickandmortyapi.com/api/";

export async function fetchCharacter(name, status) {
    if (!status) status = 'alive';
    let url = baseUrl + "character/";
    url = url + `?name=${name}&status=${status}`
    let data = await fetchData(url);
    return data;
}

async function fetchData(url) {
    try {
        const response = await fetch(url, { method: "GET"});
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}
