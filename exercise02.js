// 🚀 Desafio fatorial

// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24

const requirement01 = () => {
    // Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
    let number = -8;

    let fatorial = 1;

    if (number >= 0) {
        for (let index = 1; index <= number; index += 1) {
            fatorial *= index;
        }
    } else {
        for (let index = -1; index >= number; index -= 1) {
            fatorial *= index;
        }
    }

    console.log(fatorial);
};
