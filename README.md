# Exercícios - agora, a prática

### Para realizar as tarefas do 1 ao 7, restaure o seguinte banco de dados no arquivo `script_db.sql`

### 1. Vamos lá! Faça uma consulta na tabela itens que retorne todos os dados em que a coluna name comece com as letras GR.
SELECT * FROM 'store'.'itens' WHERE 'name' LIKE 'GR%';
<div align="center">
    <img src="Screenshot from 2024-09-13 14-34-36.png" alt="Resposta do Exercício 1">
</div>

### 2. Agora, escreva uma query para retornar da tabela supplies os dados em que a coluna item_id possua o valor 2. Organize o resultado por ordem alfabética de supplier_id.
SELECT * FROM 'store'.'supplies' WHERE 'item_id' = 2 ORDER BY 'supplier_id';
<div align="center">
    <img src="Screenshot from 2024-09-13 14-34-41.png" alt="Resposta do Exercício 1">
</div>

### 3. Em seguida, faça uma consulta para exibir item_id, price e supplier_id de supplies em que o valor de supplier_id tenha a letra N.
SELECT 'item_id','price','supplier_id' FROM 'store'.'supplies' WHERE 'supplier_id' LIKE '%N%';
<div align="center">
    <img src="Screenshot from 2024-09-13 14-34-49.png" alt="Resposta do Exercício 1">
</div>

### 4. Avante, falta pouco! Escreva uma query para exibir todas as informações de suppliers que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
SELECT * FROM 'store'.'suppliers' WHERE 'name' LIKE '%LTDA%' ORDER BY 'name' DESC;
<div align="center">
    <img src="Screenshot from 2024-09-13 14-35-13.png" alt="Resposta do Exercício 1">
</div>

### 5. Agora, faça uma consulta para exibir o número de empresas (suppliers) que contém a letra F no código.
SELECT count(*) AS 'numero_de_empresas_com_F_no_nome' FROM 'store'.'suppliers' WHERE 'id' LIKE '%F%';
<div align="center">
    <img src="Screenshot from 2024-09-13 14-35-21.png" alt="Resposta do Exercício 1">
</div>

### 6. Quase lá! Agora escreva uma query para exibir de supplies, itens que custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
SELECT * FROM 'store'.'supplies' WHERE 'price' BETWEEN 16 AND 39 ORDER BY 'price';
<div align="center">
    <img src="Screenshot from 2024-09-13 14-35-27.png" alt="Resposta do Exercício 1">
</div>

### 7. Ufa! Por fim, faça uma query para exibir o número de vendas (sales) feitas entre os dias 15/04/2018 e 30/07/2019.
SELECT COUNT(*) FROM 'store'.'sales' WHERE DATE('order_date') BETWEEN '2018-04-15' AND '2019-07-30';
<div align="center">
    <img src="Screenshot from 2024-09-13 14-35-38.png" alt="Resposta do Exercício 1">
</div>
