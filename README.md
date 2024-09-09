# Exercícios - agora, a prática

Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila, que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench, sua missão agora é tentar finalizar os exercícios a seguir!  

#### Exercício 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.  
<div align="center">
    <img src="./Screenshot from 2024-09-09 15-05-45.png" alt="Resposta do Exercício 1" width="600">  
</div>

#### Exercício 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.  
<div align="center">
    <img src="./Screenshot from 2024-09-09 15-06-02.png" alt="Resposta do Exercício 2" width="600">
</div>

#### Exercício 3: Feito isso, crie uma tabela com as seguintes restrições:  

Nome da tabela: filme

Colunas:
* **filme_id** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
* **descricao** - não permite nulos, tipo texto (varchar(100));
* **ano_lancamento** - não permite nulos, tipo int;
* **nota** - permite nulos, tipo int;

<div align="center">
    <img src="./Screenshot from 2024-09-09 15-12-03.png" alt="Resposta do Exercício 1" width="900">
</div>

#### Exercício 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.  
> Faz referência a tabela `coutry`

<div align="center">
    <img src="./Screenshot from 2024-09-09 15-16-19.png" alt="Resposta do Exercício 4" width="900">
</div>

#### Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?  
> Uma cidade(`city`) TEM que pertencer a no MÁXIMO UM país(`country`). (1,1)  
> Relacionamento (1,N)

#### Exercício 6: Qual tipo de relacionamento a tabela country faz com a tabela city?  
> Um pais(`country`) TEM que possuir no MÍNIMO UMA cidade(`city`). (1,N)  
> Relacionamento (1,N)

#### Exercício 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.  
> UM filme(`film`) TEM que se relacionar com no MÍNIMO UM ator(`film_actor`). (1,N) 
> UM ator(`film_actor`) TEM que se relacionar com no MÁXIMO UM filme(`film`). (1,1)
> Relacionamento (1:N)

> UM filme(`film`) TEM que se relacionar com no MÍNIMO UMA categoria(`film_category`). (1,N) 
> UMA categoria(`film_category`) TEM que se relacionar com no MÁXIMO UM filme(`film`). (1,1)
> Relacionamento (1:N)

<div align="center">
    <img src="./Screenshot from 2024-09-09 16-20-48.png" alt="Resposta do Exercício 7" width="900">
</div>

> UM inventário(`invetory`) TEM que se relacionar com no MÍNIMO UM aluguel(`rental`). (1,N)
> UM aluguel(`rental`) TEM que se relacionar com no MÁXIMO UM inventário(`invetory`). (1,1)
> Relacionamento (1:N)

<div align="center">
    <img src="./Screenshot from 2024-09-09 16-31-43.png" alt="Resposta do Exercício 7" width="900">
</div>