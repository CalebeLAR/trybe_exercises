# Exercícios - agora, a prática

Restaure o banco de dados abaixo antes de continuar: `hr.sql`

### 1. Escreva uma query que exiba o maior salário da tabela.
```sql
SELECT MAX(salary) AS 'maior_salario' FROM hr.employees;
```

### 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
```sql
SELECT MAX(salary) - MIN(salary) AS diferença_de_maior_e_menor_salario FROM hr.employees;
```

### 3. Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
```sql
SELECT job_id, ROUND(AVG(salary), 0) AS media FROM hr.employees
GROUP BY job_id ORDER BY media DESC;
```

### 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
```sql
SELECT CONCAT('terás de pagar: ', SUM(salary)) AS total FROM hr.employees;
```

### 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
```sql
SELECT 
	ROUND(MAX(salary),2) AS 'maximo', 
    ROUND(MIN(salary),2) AS 'minimo',
    ROUND(SUM(salary),2) AS 'soma', 
    ROUND(AVG(salary),2) AS 'media' 
FROM hr.employees;
```

### 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).
```sql
SELECT COUNT(*) FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';
```

### 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
```sql
SELECT job_id, SUM(salary) AS 'total'
FROM hr.employees
GROUP BY job_id;
```

### 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).
```sql
SELECT job_id, SUM(salary) AS 'total'
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';
```

### 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).
```sql
SELECT job_id, AVG(salary) AS 'total'
FROM hr.employees
WHERE job_id != 'IT_PROG'
GROUP BY job_id
ORDER BY total DESC;
```

### 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.
```sql
SELECT 
	department_id,
    AVG(salary),
    COUNT(manager_id) AS funcionarios,
    COUNT(department_id) AS departamentos 
FROM hr.employees
GROUP BY department_id
HAVING departamentos > 10;
```

### 11. Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
```sql
SET SQL_SAFE_UPDATES = 0;
UPDATE employees 
SET ph
one_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%'; 
-- 21 row(s) affected Rows matched: 21  Changed: 21  Warnings: 0
```

### 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
```sql
SELECT * FROM hr.employees
WHERE LENGTH(first_name) > 8;
```

### 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
```sql
SELECT employee_id, first_name, YEAR(hire_date) AS ano FROM hr.employees;
```

### 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
```sql
SELECT employee_id, first_name, DAY(hire_date) AS ano FROM hr.employees;
```

### 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
```sql
SELECT employee_id, first_name, MONTH(hire_date) AS ano FROM hr.employees;
```

### 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
```sql
SELECT UPPER(first_name) AS first_name, UPPER(last_name) AS last_name FROM hr.employees;
```

### 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
```sql
SELECT last_name, hire_date FROM hr.employees
WHERE hire_date BETWEEN '1987-07-00' AND '1987-07-31';
```

### 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
```sql
SELECT first_name, DATEDIFF(CURRENT_DATE(), hire_date) AS dias FROM hr.employees;
```
