/**
 * Gera um número inteiro aleatório no intervalo de 1 a 499.
 * @returns {number} Número aleatório no intervalo de 1 a 499.
 */
export const randomInt = () => {
    // Gera um número aleatório entre 1 e 500
    return Math.floor(Math.random() * 500) + 1;
};

