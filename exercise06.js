/*
Função Relatório de Atletas

Elaborar um programa que leia o nome e a idade de um atleta de um
clube de natação. O programa deve exibir o nome com “-” abaixo das
letras do nome e a categoria do atleta, que pode ser “Infantil” (até 12
anos), “Juvenil” (entre 13 e 18 anos) ou “Adulto” (acima de 18 anos). O
programa deve conter as funções:

    • retornarTracos() – que receba um nome como parâmetro e retorne uma linha
    com “-” para as letras do nome (nos espaços, manter os espaços).

    • categorizarAluno() – que receba um número como parâmetro e retorne a
    categoria do aluno, conforme indicação no enunciado do exercício.

exemplo:
    Maria Cristina Santos
    ----- -------- ------
    Categoria: Juvenil
*/

const retornarTracos = (name) => {
    // que receba um nome como parâmetro e retorne uma linha
    // com “-” para as letras do nome (nos espaços, manter os espaços)

    let lines = '';
    for (const letter of name) {
        lines += letter === ' ' ? ' ' : '-';
    }
    return lines;
};

const categorizarAluno = (age) => {
    if (age < 12) {
        return 'Categoria: Infantil';
    }
    if (age >= 13 && age < 18) {
        return 'Categoria: Juvenil';
    }
    if (age >= 18) {
        return 'Categoria: Adulto';
    }
}


const showCategorie = (name, age) => {
    console.log(name);
    console.log(retornarTracos(name))
    console.log(categorizarAluno(age))
}


showCategorie('Maria Cristina Santos', 17);
