const readlineSync = require('readline-sync');

const weight = readlineSync.questionFloat('What’s your weight (kg)? ');
const height = readlineSync.questionFloat('What’s your height (m)? ');

const calcImc = (weight, height) => {
  return (weight / height ** 2).toFixed(1);
};

const imc = calcImc(weight, height);

if (imc < 18.5) {
  console.log('Abaixo do peso (magreza)');
} else if ((imc <= 24.9)) {
  console.log('Peso normal');
} else if ((imc <= 29.9)) {
  console.log('Acima do peso (sobrepeso)');
} else if ((imc <= 34.9)) {
  console.log('Obesidade grau I');
} else if ((imc <= 39.9)) {
  console.log('Obesidade grau II');
} else {
  console.log('Obesidade graus III e IV ');
}

