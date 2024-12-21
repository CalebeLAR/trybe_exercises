especial_characters = {
    ' ': '_',
    ':': '',
    '-+': '',
    '_-': '',
    '--': '',
    '&': 'e',
    ç: 'c',
    á: 'a',
    ã: 'a',
    í: 'i',
};

const gerExercisesFiles = (numExercises, e) => {
    touch = 'touch ';

    for (let i = 1; i <= numExercises; i++) {
        if (i < 10) {
            touch += `exercise0${i}.${e} `;
        } else {
            touch += `exercise${i}.${e} `;
        }
    }

    return touch
};

const commitExercises = (pageI = 1, pageF, e, commit) => {
    gitAdd = '';
    gitCommit = '';
    command = [];

    for (let i = pageI; i <= pageF; i++) {
        if (i < 10) {
            gitAdd = `git add exercise0${i}.${e}`;
            gitCommit = `git commit -m '${commit}.exercise0${i}.${e}'`;
        } else {
            gitAdd = `git add exercise${i}.${e}`;
            gitCommit = `git commit -m '${commit}.exercise${i}.${e}'`;
        }

        command.push(`${gitAdd} && ${gitCommit}`);
    }
    return command.join(' && ');
};

//

commit = 'trybe.fundamentos.seção03.dia04';

// var comand = gerExercisesFiles(4, 'js');
// console.log(comand);

var comand = commitExercises(1, 4, 'js', commit);
console.log(comand);

// - mercado - 1615h-1640h
// - banho - 1630h - 1640h
// - fim cont try - 18:25.


// const requirements = [requirement01, requirement02, requirement03];
// const line = '\\'.repeat(40);

// for (let requirement of requirements) {
//     console.log(line, `${requirement.name}:`, line);
//     requirement();
//     console.log('\n');
// }
