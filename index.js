const BASE_URL = 'https://pokeapi.co/api/v2';

// Метода GET - прочитать -------------------------
function fetchPokemon() {
  return fetch(`${BASE_URL}/pokemon`)
    .then(res => res.json())
    .then(console.log);
}

fetchPokemon();

function fetchPokemonById(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`)
//   res - это промис
    .then(res => res.json())
    // тут возвращаем промис
    .then(console.log);
}

fetchPokemonById(2);

// Мутод POST - создать
function addPokemon(pokemon) {
  const options = {
    // метод который используем
    method: 'POST',
    // тип контента
    headers: {
      'Content-type': 'application/json',
    },
    // парсим в строку
    body: JSON.stringify(pokemon),
  };
// c.lf rtnc lj,fdkznm yt ye;yj
  return fetch(`${BASE_URL}/pokemon`, options).then(res => res.json());
}

addPokemon({
  title: 'Тестовая книга по JS',
  author: 'Я',
  genres: ['JS'],
  rating: 5,
})
  .then(renderPokemon)
  .catch(error => console.log(error));

// Метод PATCH - обновить ----------------------------
function updatePokemonRyId(update, options) {
  const options = {
    // метод который используем
    method: 'PATCH',
    // тип контента
    headers: {
      'Content-type': 'application/json',
    },
    // парсим в строку
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/pokemon/${pokemonId}`, options).then(res =>
    res.json()
  );
}

// добавояем свойство которое хотим обновить с айдишником покемона к которому это применить
updatePokemonRyId({ title: 'Большая новая внига по CSS' }, 12);

// Метод DELETE - удалиение ----------------------------
function removePokemon(pokemonId) {
  const url = `${BASE_URL}/pokemon/${pokemonId}`;
  const options = {
    method: DELETE,
  };

  return fetch(url, options).then(res => res.json());
}
// пишем какой индификатор обьекта нужно удалить
removePokemon(14);
removePokemon(15);
