import { choseImage, fetch_superHero } from "./utils/hero_functions";
import { randomInt } from "./utils/random_number";

// Botão para obter um novo super-herói
const btn_hero = document.querySelector("#hero-btn");

// Adiciona um ouvinte de evento para o clique no botão de super-herói.
btn_hero.addEventListener("click", () => {
    // gera um numero aleatório entre 1 e 500 e o atribui ao id
    const id = randomInt();
    // Quando o botão é clicado, obtém um novo super-herói e atualiza a imagem.
    fetch_superHero(id).then((heroImage) => choseImage(heroImage));
});
