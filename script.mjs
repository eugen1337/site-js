// {
//     "characters": "https://rickandmortyapi.com/api/character",
//     "locations": "https://rickandmortyapi.com/api/location",
//     "episodes": "https://rickandmortyapi.com/api/episode"
// }

window.onload = () => {
    loadStartForm();
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && checkInput()) {
            console.log(event.key);

            changePage();
        }
    });
};

function createElement(elem, parent, params) {
    node = document.createElement(elem);

    if (params) {
        for (let key in params) {
            node.setAttribute(key, params[key]);
        }
    }

    parent.appendChild(node);
    return node;
}

async function showCharacter(result, name) {
    result.innerHTML = '';
    let res = await (await import("./model.mjs")).getCharacter(name);
    console.log(res);
    for (i = 0; i < 20; i++) {
        imgSource = res.results[i].image;
        console.log(imgSource);
        let logo = createElement("img", result, {
            src: imgSource,
            alt: name,
            class: "result",
        });
    }
}

function checkInput() {
    let input = document.getElementById("login").value;
    if (!input) return false;

    return input != "";
}

function changePage() {
    let name = document.getElementById("login").value;
    document.body.innerHTML = "";
    document.body.setAttribute("background", "000");

    let header = createElement("header", document.body, {
        class: "main-header",
    });

    let logo = createElement("img", header, {
        src: "./resources/logo.png",
        alt: "logo",
        class: "main-header",
    });

    let greet = createElement("p", header);
    greet.innerHTML = `Welcome, ${name}!`;

    let result = createElement("section", document.body, { class: "result" });

    let search = createElement("input", header, {
        type: "text",
        name: "",
        required: "",
        id: "characterName",
        class: "main-header",
    });

    let searchBut = createElement("button", header);

    searchBut.onclick = () => {
        characterName = document.getElementById("characterName").value;
        console.log(characterName);
        showCharacter(result, characterName);
    };

    
}

async function loadStartForm() {
    let mainDiv = createElement("div", document.body, { class: "login-box" });

    let h2 = createElement("h2", mainDiv);
    h2.innerHTML = "Enter your name";

    let form = createElement("form", mainDiv);

    let userBox = createElement("div", form, { class: "user-box" });

    createElement("input", userBox, {
        type: "text",
        name: "",
        required: "",
        id: "login",
    });

    let label = createElement("label", userBox);
    label.innerHTML = "Name";
}
