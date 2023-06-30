const baseUrl = "https://rickandmortyapi.com/api/";

/**
 *
 * @param {String} name
 * @param {String} status
 * @returns {{
 * info : {
 * next: String}, results: [{
 * name: String}]
 * }}
 */

export async function fetchCharacter(name, status) {
  let buildUrl = name ? `name=${name}` : ``;
  buildUrl += status
    ? buildUrl === ""
      ? `status=${status}`
      : `&status=${status}`
    : "";
  return fetchData(`${baseUrl}character?${buildUrl}`);
}

export const fecthPaginationCharacter = async (link) => fetchData(link);

async function fetchData(url) {
  try {
    const response = await fetch(url, { method: "GET" });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
