// Desafio de inverter palavra

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

// De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();

let word = 'tryber';

const requirement01 = () => {
    // primeira forma de inverter uma palavra

    let reverse = '';
    for (let index = word.length - 1; index >= 0; index -= 1) {
        reverse += word[index];
    }

    console.log(reverse);
};

const requirement02 = () => {
    // segunda forma de inverter uma palavra

    let lettersArray = word.split('');
    let reverseArray = lettersArray.reverse();
    let reverse = reverseArray.join('');

    console.log(reverse);
};
