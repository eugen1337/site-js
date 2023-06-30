import { fetchCharacter, fecthPaginationCharacter } from "./api.mjs";

export async function getCharacter(name, status) {
  return fetchCharacter(name, status);
}

export const loadCharactersPagination = async (link) =>
  fecthPaginationCharacter(link);
