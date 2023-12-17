//  🚀 Array e loop for
// Considere esse array para realizar os próximos exercícios.
const numbers = [1, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const requirement01 = () => {
    // Percorra o array imprimindo todos os valores contidos nele com a função console.log().
    for (let index = 0; index < numbers.length; index += 1) {
        console.log(numbers[index]);
    }
};

const requirement02 = () => {
    // Some todos os valores contidos no array e imprima o resultado.
    let sum = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        sum += numbers[index];

        console.log(sum);
    }
};

const requirement03 = () => {
    // Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
    let sum = 0;
    let avarage = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        sum += numbers[index];
    }
    avarage = (sum / numbers.length).toFixed(2);

    console.log(avarage);

    return avarage;
};

const requirement04 = () => {
    // Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
    avarage = requirement03();

    if (avarage > 20) {
        console.log('O valor da média aritmética é maior que 20');
    } else {
        console.log('O valor da média aritmética é menor ou igual a 20');
    }
};

const requirement05 = () => {
    // Utilizando for, descubra o maior valor contido no array e imprima-o.
    let bigger = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > bigger) {
            bigger = numbers[index];
        }
    }

    console.log(bigger);
};

const requirement06 = () => {
    // Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

    let totalOdd = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] % 2 !== 0 || numbers[index] === 2) {
            totalOdd += 1;
        }
    }

    if (totalOdd) {
        console.log(`total de ímpares: ${totalOdd}`);
    } else {
        console.log('Nenhum valor ímpar encontrado');
    }
};
