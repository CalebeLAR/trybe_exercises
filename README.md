# <i><img width="32" src="JavaScript-logo.png" /><i> Exercícios – Objetos

### exercise01.js >> `🚀 Manipulação de objetos: Parte 1`
```javascript
    // 🚀 Manipulação de objetos: Parte 1
    // Com base neste objeto, faça os exercícios a seguir.

    const reader = {
        name: 'Julia',
        lastName: 'Pessoa',
        age: 21,
        favoriteBooks: [
            {
                title: 'O Senhor dos Anéis - a Sociedade do Anel',
                author: 'J. R. R. Tolkien',
                publisher: 'Martins Fontes',
            },
        ],
    };

    // 1 - Acesse as chaves name, lastName e title e exiba informações em um
    // console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama
    // ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

    console.log(
        `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`
    );

    // 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de
    // objetos. Atribua a essa chave um objeto que contenha as seguintes informações:
    // {
    //     title: 'Harry Potter e o Prisioneiro de Azkaban',
    //     author: 'JK Rowling',
    //     publisher: 'Rocco',
    // }

    const newBook = {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
    };

    const addProperty = (obj, key, value) => {
        if (typeof obj[key] === 'object') {
            obj[key].push(value);
        }
    };

    addProperty(reader, 'favoriteBooks', newBook);
    console.log(reader);

    // 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:
    // “Julia tem {quantidade} livros favoritos.” {quantidade} corresponde à quantidade
    // de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a
    // quantidade seja igual a 1, a frase deve ser: “Julia tem 1 livro favorito.”

    const quantidade = reader.favoriteBooks.length;

    if (quantidade === 1) {
        console.log(`Julia tem 1 livro favorito.`);
    } else {
        console.log(`Julia tem {quantidade} livros favoritos.`);
    }

```
### exercise02.js >> `🚀 Manipulação de objetos: Parte 2`
```javascript
    //  🚀 Manipulação de objetos: Parte 2

    // Imagine que você seja responsável por cuidar do sistema de entrega de um
    // restaurante e que precise enviar mensagens com as informações da compra.
    // Para isso, use o seguinte código:

    const order = {
        name: 'Rafael Andrade',
        phoneNumber: '11-98763-1416',
        address: {
            street: 'Rua das Flores',
            number: '389',
            apartment: '701',
        },
        order: {
            pizza: {
                marguerita: {
                    amount: 1,
                    price: 25,
                },
                pepperoni: {
                    amount: 1,
                    price: 20,
                },
            },
            drinks: {
                coke: {
                    type: 'Coca-Cola Zero',
                    price: 10,
                    amount: 1,
                },
            },
            delivery: {
                deliveryPerson: 'Ana Silveira',
                price: 5,
            },
        },
        payment: {
            total: 60,
        },
    };

    //1. Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira,
    //entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
    const customerInfo = (fullOrder) => {
        const name = fullOrder.name;
        const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
        const phoneNumber = fullOrder.phoneNumber;
        const street = fullOrder.address.street;
        const number = fullOrder.address.number;
        const apartment = fullOrder.address.apartment;

        return `Olá, ${name}, entrega para: ${deliveryPerson}, Telefone: ${phoneNumber}, ${street}, Número: ${number}, AP: ${apartment}.`;
    };
    console.log(customerInfo(order));

    //2. Complete a função orderModifier() para que seu retorno seja:
    //   'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
    // * Modifique o nome da pessoa compradora para Luiz Silva;
    // * Modifique o valor total da compra para R$ 50,00.
    const orderModifier = (fullOrder) => {
        const name = fullOrder.name;
        const priceMarguerita = fullOrder.order.pizza.marguerita.price;
        const pricePepperoni = fullOrder.order.pizza.pepperoni.price;
        const priceCocaColaZero = fullOrder.order.drinks.coke.price;
        const totalPrice = priceCocaColaZero + priceMarguerita + pricePepperoni;
        return `Olá, ${name}, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${totalPrice}.`;
    };
    console.log(orderModifier(order));

    order.name = 'Luiz Silva';
    order.order.pizza.marguerita.price -= 5;
    console.log(orderModifier(order));
```
### exercise03.js >> `🚀 Manipulação de objetos: Parte 3`
```javascript
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
```
### exercise04.js >> `🚀 Manipulação de objetos: Parte 4`
```javascript
    //  🚀 Manipulação de objetos: Parte 4
    //  Por meio do array de frutas chamado basket, crie um objeto que contenha o
    //  nome da fruta como chave e a quantidade de vezes que ela aparece no array
    //  como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']
    //  deverá retornar:
    //      {
    //           Melancia: 3,
    //           Abacate: 1,
    //           Uva: 1
    //      }
    //  Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato:
    //  Sua cesta possui: x Melancias, x Abacates....
    //  O array basket a ser utilizado:

    const basket = [
        'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
        'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
        'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
        'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
        'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
        'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
        'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
        'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
        'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
        'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
        'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
        'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
        'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
        'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
        'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
        'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
        'Banana', 'Pera', 'Abacate', 'Uva',
        ];

    const reportFruit = {};
    for (const fruit of basket) {
        if (typeof reportFruit[fruit] === 'undefined') {
            reportFruit[fruit] = 1;
        } else {
            reportFruit[fruit] += 1;
        }
    }

    const entries = Object.entries(reportFruit);

    let newArray = [];

    for (let index = 0; index < entries.length; index += 1) {
        if (entries[index][1] > 1) {
            newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
        } else {
            newArray.push(`${entries[index][1]} ${entries[index][0]}`);
        }
    }
    console.log(`Sua cesta possui: ${newArray.join(', ')}.`);
```
