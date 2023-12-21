/*
Função de array de números

Criar uma função generateArrayOfNumbers que recebe como parâmetro
um número inteiro e retorna um array contendo valores que vão de 1
até o número recebido como parâmetro.
*/

function generateArrayOfNumbers(number) {
    let array = [];

    for (let index = 1; index <= number; index += 1) {
        array.push(index);
    }
    return array;
}

console.log(generateArrayOfNumbers(10));
console.log(generateArrayOfNumbers(50));
