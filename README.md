 Exercícios - agora, a prática

Clientes da nossa API Cacau Trybe querem mais informações sobre os chocolates e cabe à você como pessoa desenvolvedora de back-end, criar mais três endpoints, para isso, utilize a técnica de TDD!

GET /chocolates/total : Quantidade total de chocolates

    Esse endpoint deve retornar a quantidade de tipos de chocolates que existem na base de dados, usando o seguinte contrato:

👉 GET /chocolates/total

    Objetivo: Retornar a quantidade de tipos de chocolates que existem.
    Código HTTP: 200 - OK;
    Body (exemplo):

{

  "totalChocolates": 4 // quantidade de chocolates na base de dados

}

Exercício 1

Crie os testes de integração para o endpoint GET /chocolates/total

    Crie um caso para o código retornado
    Crie outro caso para o retorno esperado

Atenção: Observe que os testes devem falhar por enquanto, como estamos desenvolvendo usando o conceito de TDD, mas não se preocupe que na sequência vamos fazer a implementação e os testes deverão passar. 👍
