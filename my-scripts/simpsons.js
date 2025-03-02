const fs = require('fs');
const simpsons = JSON.parse(fs.readFileSync('my-scripts/simpsons.json'), "utf-8");

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
const showSimpsons = () =>
  simpsons.forEach((simpson) => console.log(simpson.id, ' - ', simpson.name));

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.
const findSimposon = (id) => {
  return new Promise((resolve, reject) => {
    const simpson = simpsons[id];

    if (simpson) {
      resolve(simpson);
    } else {
      reject(new Error('id não encontrado'));
    }
  });
};

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
var newData = simpsons.filter((simpson) => !["10", "6"].includes(simpson.id));
fs.writeFileSync('my-scripts/simpsons.json', JSON.stringify(newData))
console.log(newData)

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, 
// chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
var newData = simpsons.filter((simpson) => simpson.id <= 4);
fs.writeFileSync('my-scripts/simpsonFamily.json', JSON.stringify(newData))
console.log(newData)

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
var newId = simpsons.reduce((acc, simpson) => (acc < simpson.id) ? acc = +simpson.id + 1 : acc, 0);
var newData = [...simpsons, { 'id': `${newId}`, 'simpson': 'Nelson Muntz' }]
fs.writeFileSync('my-scripts/simpsonFamily.json', JSON.stringify(newData))

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem
// Maggie Simpson no arquivo simpsonFamily.json.
const condition = (simpson) => "Nelson Muntz" == simpson.name ? { ...simpson, name: "Maggie Simpson" } : simpson
var newData = simpsons.map((simpson) => condition(simpson));
fs.writeFileSync('my-scripts/simpsons.json', JSON.stringify(newData))
console.log(newData)
