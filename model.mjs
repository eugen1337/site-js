export async function getCharacter(name, status) {
    let res = await (
        await import("./fetches.mjs")
    ).fetchCharacter(name, status);
    console.log(res);

    return res;
}
