/* 
Desafio dos asteriscos

Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

n = 5

*****
*****
*****
*****
*****
*/

const requirement01 = () => {
    // primeira forma de resolver
    let n = 10;
    let row = '';

    for (let index = 1; index <= n; index += 1) {
        row += '*';
    }
    for (let index = 1; index <= n; index += 1) {
        console.log(row);
    }
};

const requirement02 = () => {
    // segunda forma de resolver
    let n = 10;

    for (let index = 1; index <= n; index += 1) {
        console.log('*'.repeat(n));
    }
};
