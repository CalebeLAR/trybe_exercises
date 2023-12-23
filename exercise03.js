//  🚀 Manipulação de objetos: Parte 3
//  Suponha que você esteja trabalhando para uma escola e precise fazer algumas
//  atualizações no sistema. Para isso, considere a seguinte base de dados:

const school = {
    lessons: [
        {
            course: 'Python',
            students: 20,
            professor: 'Carlos Patrício',
            shift: 'Manhã',
        },
        {
            course: 'Kotlin',
            students: 10,
            professor: 'Gabriel Oliva',
            shift: 'Noite',
        },
        {
            course: 'JavaScript',
            students: 738,
            professor: 'Gustavo Caetano',
            shift: 'Tarde',
        },
        {
            course: 'MongoDB',
            students: 50,
            shift: 'Noite',
        },
    ],
};
//  1. Crie uma função que obtenha o valor da chave de acordo com sua posição no array.
//  Essa função deve possuir dois parâmetros: o objeto e a posição no array.
function getByPosition(object, position) {
    return Object.values(object).at(0).at(position);
}
console.log(getByPosition(school, 3));

//  2. Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
function getSumStudents(object) {
    const { lessons } = object;
    let sum = 0;
    for (let lesson of lessons) {
        sum += lesson.students;
    }

    return sum;
}
console.log(getSumStudents(school));

//  3. Crie uma função que verifica se uma determinada chave existe em todos os elementos do
//  array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir
//  dois parâmetros: o objeto e o nome da chave.
function getIfKeyExist(school, key) {
    const { lessons } = school;
    for (const lesson of lessons) {
        if (typeof lesson[key] === 'undefined') {
            return false;
        }

        return true;
    }
}

console.log(getIfKeyExist(school, 'course'));

//  4. Crie uma função para alterar o turno para noite no curso de Python. Essa função deve
//  ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
function switchDataSchool(courseName, key, value) {
    const { lessons } = school;
    for (const lesson of lessons) {
        if (lesson.course === courseName) {
            lesson[key] = value;
        }
    }

    console.log(school.lessons);
}
