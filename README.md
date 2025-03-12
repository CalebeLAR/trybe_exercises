Exercícios - agora, a prática
 🚀 Exercício 1
Qual é a função do código de status 400 e 422?
    O status 400 Bad Request é enviada quando um erro que ocorre quando o servidor não consegue processar uma solicitação. 
    O status 422 geralmente é enviado quando o servidor consegue processar, mas não enviar, pois vem com erros semânticos

🚀 Exercício 2
Qual é a função do código de status 401?
    O status 401 unauthorized é enviado quando a solicitação de acesso a um recurso foi negada  


Crie o diretório src e dentro dele um arquivo movies.json com o os filmes da nossa locadora:
```json
[
    {
        "id": 1,
        "movie": "Avatar",
        "price": 5
    },
    {
        "id": 2,
        "movie": "Gente Grande",
        "price": 2
    },
    {
        "id": 3,
        "movie": "O Jogo",
        "price": 3
    },
    {
        "id": 4,
        "movie": "Quebrando a Banca",
        "price": 5
    },
    {
        "id": 5,
        "movie": "Lilo & Stitch",
        "price": 2
    },
    {
        "id": 6,
        "movie": "Os Fantasmas se Divertem",
        "price": 2
    },
    {
        "id": 7,
        "movie": "Meninas Malvadas",
        "price": 3
    }
]
```

Agora, faça os exercícios a seguir:
🚀 Exercício 3
    * Criar um servidor Node.js utilizando o framework Express.

🚀 Exercício 4
    * Criar uma função de leitura do JSON com o modulo fs.

🚀 Exercício 5
    * Criar um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.

🚀 Exercício 6
    * Criar um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.

🚀 Exercício 7
    * Criar um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.

O corpo da requisição deve receber o seguinte formato:
```json
    {
        "movie": "Vingadores",
        "price": 5
    }
```

🚀 Exercício 8
    * Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

O corpo da requisição deve receber o seguinte formato:
```json
    {
        "movie": "Vingadores: Ultimato",
        "price": 5
    }
```


🚀 Exercício 9
    * Criar um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.

 🚀 Exercício 10
    * Criar um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.

    A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio.

