const list = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
];

const output = document.querySelector(".output");
const search = document.querySelector(".filter-input");

window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("input", filter);

function loadList() {
  let temp = `<ul class="list-items">`;
  list.forEach((item) => {
    temp += `<li class="list-item"> ${item} </li>`;
  });
  temp += `</ul>`;
}

function filter(e) {
  let temp = "";
  const result = list.filter((item) =>
    item.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(result);

  if (result.length > 0) {
    temp = `<ul class="list-items">`;
    result.forEach((item) => {
      temp += `<li class="list-item"> ${item} </li>`;
    });
    temp += `</ul>`;
  } else {
    temp = `<div class="no-item"> No Pokémon Found </div>`;
  }

  output.innerHTML = temp;
}
