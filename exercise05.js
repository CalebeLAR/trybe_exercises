/*  Desafio da pirâmide de asteriscos

Faça o mesmo algoritmo do exercício04 que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
*****
*/

const requirement01 = () => {
    // primeira forma de resolver
    let n = 5;
    let symbol = '*';
    let row = '';

    for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
        row = row + symbol;
        console.log(row);
    }
};

const requirement02 = () => {
    // segunda forma de resolver
    let n = 5;
    let row = '';

    for (let index = n; index >= 0; index -= 1) {
        console.log('*'.repeat(n - index));
    }
};

requirement01();
