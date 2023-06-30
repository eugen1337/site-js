// {
//     "characters": "https://rickandmortyapi.com/api/character",
//     "locations": "https://rickandmortyapi.com/api/location",
//     "episodes": "https://rickandmortyapi.com/api/episode"
// }

let next = "";
window.onload = () => {
  loadStartForm();
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && checkInput()) {
      changePage();
    }
  });
};

function createElement(elem, parent, params) {
  node = document.createElement(elem);

  if (params) {
    for (const key in params) {
      node.setAttribute(key, params[key]);
    }
  }

  parent.appendChild(node);
  return node;
}

async function showCharacter(result, name, alive) {
  result.innerHTML = "";
  const res = await (
    await import("./model.mjs")
  ).getCharacter(name, alive ? "alive" : undefined);
  renderCharacters(result, res);
}

/**
 *
 * @param {*} result
 * @param {{
 * info : {
 * next: String}, results: [{
 * name: String, image: String}]
 * }} res
 */
function renderCharacters(result, res) {
  next = res.info.next;
  res.results.map((item) => {
    const container = createElement("div", result, { class: "container__img" });

    const name = createElement("span", container, {
      class: "card_name",
    });
    name.innerHTML = "Name: " + item.name;

    const species = createElement("span", container, {
      class: "card_name",
    });
    species.innerHTML = "Species: " + item.species;

    const location = createElement("span", container, {
      class: "card_name",
    });
    location.innerHTML = "Location: " + item.location.name;

    const logo = createElement("img", container, {
      src: item.image,
      alt: name,
      class: "result",
    });
  });
}

function checkInput() {
  const input = document.getElementById("login").value;
  if (!input) return false;

  return input ? input !== "" : false;
}

function changePage() {
  const name = document.getElementById("login").value;
  document.body.innerHTML = "";

  const header = createElement("header", document.body, {
    class: "main-header",
  });

  const logo = createElement("img", header, {
    src: "./resources/logo.png",
    alt: "logo",
    class: "main-header",
  });

  const greet = createElement("p", header);
  greet.innerHTML = `Welcome, ${name}!`;

  const result = createElement("div", document.body, {
    class: "container__imgs",
  });
  const containerSearch = createElement("div", header, {
    class: "container__header",
  });

  const search = createElement("input", containerSearch, {
    type: "text",
    name: "",
    required: "",
    id: "characterName",
    class: "main-header_input",
    placeholder: "Search by name...",
  });

  const dCheck = createElement("div", containerSearch, {
    class: "container_chbox",
  });

  const checkBox = createElement("input", dCheck, {
    type: "checkbox",
    class: "alive_check",
    name: "Alive",
    id: "alive",
  });

  const label = createElement("label", dCheck, {
    for: "alive",
  });
  label.innerHTML = "Alive";

  const searchBtn = createElement("div", containerSearch, {
    class: "search_btn",
  });

  const sp = createElement("span", searchBtn);
  sp.innerHTML = "Search";
  showCharacter(result);
  searchBtn.onclick = () => {
    characterName = document.getElementById("characterName").value;
    showCharacter(result, characterName, checkBox.checked);
  };
  
  //Pagination
  document.onscroll = async function () {
    if (
      document.documentElement.scrollTop + window.innerHeight ==
      document.documentElement.scrollHeight
    ) {
      const res = await (
        await import("./model.mjs")
      ).loadCharactersPagination(next);
      renderCharacters(result, res);
    }
  };
}

async function loadStartForm() {
  const mainDiv = createElement("div", document.body, { class: "login-box" });

  const h2 = createElement("h2", mainDiv);
  h2.innerHTML = "Enter your name";

  const form = createElement("form", mainDiv);

  const userBox = createElement("div", form, { class: "user-box" });

  const submit = createElement("button", form, { class: "submit__form" });
  submit.innerHTML = "Submit";

  submit.onclick = () => {
    checkInput() ? changePage() : {};
  };

  createElement("input", userBox, {
    type: "text",
    name: "",
    required: "",
    id: "login",
  });

  const label = createElement("label", userBox);
  label.innerHTML = "Name";
}
