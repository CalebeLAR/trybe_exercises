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
