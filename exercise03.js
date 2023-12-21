/*
Função Average

Criar uma função average que recebe como parâmetro um array de
números inteiros e calcula a média aritmética destes números.
*/

let myArray = [2, 4, 5, 8, 7, 3];
let myArray2 = [1, 7, 8];
let myArray3 = [10, 14, 8, 5];

function average(array) {
    let sum = 0;

    for (let value of array) {
        sum += value;
    }

    let average = sum / array.length;

    return average;
}
