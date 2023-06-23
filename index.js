function renderList (list) {
  let galery = document.getElementById('galery');
  let pokemons = [];
  let count = 1;

  list.forEach(pokemon => {
    let id = count.toString().length == 1 ? `00${count}` : `0${count}`;

    let article = `<article>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png" alt="${pokemon.name}">
                <aside>
                  <h2>${pokemon.name}</h2>
                </aside>
              </article>`;
    pokemons.push(article);
    count++;
  });

  count = 0;
  galery.innerHTML = pokemons.join(' ');
}

const pokeApi = 'https://pokeapi.co/api/v2/pokemon';

fetch(pokeApi)
  .then(response => response.json())  
  .then(allpokemon => renderList(allpokemon.results))