import Swal from "sweetalert2";

// Elemento de imagem da API de super-heróis
const hero_imgEL = document.querySelector("#hero-img");

/**
 * Atualiza o atributo 'src' da imagem do super-herói com a URL da nova imagem.
 * @param {string} image - URL da imagem do super-herói.
 */
export const choseImage = (image) => {
    hero_imgEL.src = image;
};
/**
 * Faz uma solicitação à API de super-heróis e retorna uma Promise que resolve com a URL
 * da imagem do super-herói.
 * @param {number} id - O ID do super-herói na API.
 * @returns {Promise<string>} - Promise que resolve com a URL da imagem do super-herói.
 * @throws {Error} - Lança um erro se a solicitação à API falhar.
 */
export const fetch_superHero = (id) =>
    new Promise((res) =>
        fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
            .then((request) => request.json())
            .then((data) => res(data.images.sm))
            .catch(() => {
                Swal.fire({
                    text: "Opa, Ficamos sem heróis XD",
                    icon: "question",
                    confirmButtonText: "tudo bem eu gero outro..",
                });
            })
    );
