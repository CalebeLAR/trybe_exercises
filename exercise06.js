/*
Desafio dos asteriscos, parte 2
Agora, inverta o lado do triângulo. Por exemplo:

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
    for (let line = 1; line <= n; line += 1) {
        let spaces = '';
        for (let index = 1; index <= n - line; index += 1) {
            spaces += ' ';
        }

        let symbols = '';
        for (let index = 1; index <= line; index += 1) {
            symbols += '*';
        }

        console.log(spaces + symbols);
    }
};
const requirement02 = () => {
    // segunda forma de resolver
    let n = 5;
    let symbol = '*';
    let inputLine = '';
    let inputPosition = n - 1;

    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
        for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
            if (columnIndex < inputPosition) {
                inputLine = inputLine + ' ';
            } else {
                inputLine = inputLine + symbol;
            }
        }
        console.log(inputLine);
        inputLine = '';
        inputPosition -= 1;
    }
};


const requirement03 = () => {
    // terceira forma de resolver
    let n = 5;
    for (let index = n; index >= 0; index -= 1) {
        console.log(' '.repeat(n - index) + '*'.repeat(index));
    }
};

requirement03();
