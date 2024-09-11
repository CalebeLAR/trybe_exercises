# Exercícios - agora, a prática

### Restaure o seguinte do banco de dados Scientists:
<div align="center">
    <img src="Screenshot from 2024-09-11 15-11-04.png" alt="Resposta do Exercício 1">
</div>

### 1 - Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.
SELECT "This is SQL Exercise, Practice and Solution";
<div align="center">
    <img src="Screenshot from 2024-09-11 15-11-14.png" alt="Resposta do Exercício 1">
</div>

### 2 - Escreva uma query para exibir três números em três colunas.
SELECT 1,2,3;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-11-30.png" alt="Resposta do Exercício 2">
</div>

### 3 - Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS soma;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-11-43.png" alt="Resposta do Exercício 3">
</div>

### 4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 15 / 15;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-11-50.png" alt="Resposta do Exercício 4">
</div>

### 5 - Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists.Scientists;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-11-57.png" alt="Resposta do Exercício 5">
</div>

### 6 - Escreva uma query para exibir o nome como “Nome do Projeto” e as horas como “Tempo de Trabalho” de cada projeto.
SELECT 'Name' as "Nome do Projeto", 'Hours' as "Tempo de Trabalho" FROM Scientists.Projects;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-12-07.png" alt="Resposta do Exercício 6">
</div>

### 7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT 'Name' FROM Scientists.Scientists ORDER BY 'Name';
<div align="center">
    <img src="Screenshot from 2024-09-11 15-12-15.png" alt="Resposta do Exercício 7">
</div>

### 8 - Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
SELECT 'Name' FROM Scientists.Projects ORDER BY 'Name' DESC;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-12-31.png" alt="Resposta do Exercício 8">
</div>

### 9 - Escreva uma query que exiba a string “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto.
SELECT concat("O projeto ", 'Name', " precisou de ", 'Hours',  " horas para ser concluído.") AS relatório FROM Scientists.Projects;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-12-38.png" alt="Resposta do Exercício 9">
</div>

### 10 - Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT 'Name', 'Hours' FROM Scientists.Projects ORDER BY 'Hours' DESC LIMIT 3;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-12-46.png" alt="Resposta do Exercício 10">
</div>

### 11 - Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Scientist FROM Scientists.AssignedTo;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-12-58.png" alt="Resposta do Exercício 11">
</div>

### 12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT 'Name' FROM Scientists.Projects ORDER BY 'Hours' DESC LIMIT 1;
<div align="center">
    <img src="Screenshot from 2024-09-11 15-13-07.png" alt="Resposta do Exercício 12">
</div>

### 13 - Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT 'Name' FROM Scientists.Projects ORDER BY 'Hours' LIMIT 1 OFFSET 1;
<div align="center">
    <img src="./Screenshot from 2024-09-11 15-13-16.png" alt="Resposta do 13 2">
</div>

### 14 - Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Scientists.Projects ORDER BY 'Hours' LIMIT 5;
<div align="center">
    <img src="./Screenshot from 2024-09-11 15-13-26.png" alt="Resposta do 14 2">
</div>

### 15 - Escreva uma query que exiba a string “Existem Number cientistas na tabela Scientists.”, em que Number se refira a quantidade de cientistas.
SELECT "Existem ", count(*) AS total, " cientistas na tabela Scientists." FROM Scientists.Scientists;
<div align="center">
    <img src="./Screenshot from 2024-09-11 15-13-35.png" alt="Resposta do 15 2">
</div>

# Exercícios - bônus