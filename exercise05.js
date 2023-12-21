/*
Função Validador de Cadastro

Elaborar um programa que leia o nome completo de um aluno. O
programa deve validar o preenchimento de um nome completo e exibir a
senha inicial do aluno, a qual será o sobrenome seguido pelo número de
vogais do nome completo dele. O programa deve conter as funções:

    • validarNome() – que receba um nome como parâmetro e retorne true (nome
    completo) ou false (nome incompleto).
    • obterSobrenome() – que receba um nome como parâmetro e retorne o último
    nome do aluno em letras minúsculas.
    • contarVogais() – que receba um nome e retorne o número de vogais (as não acentuadas)
    deste, com dois dígitos.

exemplo:
    Aluno: Pedro Tenório
    Senha: Tenório09
*/

const validarNome = (fullName) => fullName.split(' ').length > 1;

const obterSobrenome = (fullName) =>
    fullName.split(' ').pop().toLocaleLowerCase();

const contarVogais = (fullName) => {
    let sumVogals = 0;
    for (const letter of fullName) {
        if ('aeiou'.includes(letter.toLocaleLowerCase())) {
            sumVogals += 1;
        }
    }
    return sumVogals;
};

const showStudend = (fullName) => {
    if (!validarNome(fullName)) {
        console.log('ERRO: informe o nome completo!');
    } else {
        const lastName = obterSobrenome(fullName);
        const numVogals = contarVogais(fullName);
        console.log(`Aluno: ${fullName}`);
        console.log(
            `Senha: ${lastName}${numVogals.toString().padStart(2, '0')}`
        );
    }
};

showStudend('Pedro Tenório');
