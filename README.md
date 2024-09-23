#  Manipulando tabelas

## Para realizar os exercícios 1 a 7, restaure o banco de dados pixar no arquivo `pixar_db.sql`

## Exercício 1: Insira as produções da Pixar na tabela movies:

    --     Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
    --     Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
    --     Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
    --     WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

```sql
INSERT INTO `pixar`.`movies` (
										-- `id` int NOT NULL AUTO_INCREMENT,
  `title`,								--  varchar(30) NOT NULL,
  `director`,							--  varchar(30) DEFAULT NULL,
  `year`,								--  int NOT NULL,
  `length_minutes` 						--  int NOT NULL
) VALUES
	('Monstros SA','Pete Docter', 2001, 92),
	('Procurando Nemo','John Lasseter', 2003, 107),
	('Os Incríveis','Brad Bird', 2004, 116),
	('WALL-E','Pete Docter', 2008, 104);
```

## Exercício 2: O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela box_office.

```sql
INSERT INTO `pixar`.`box_office` (
  `movie_id`,									--  int DEFAULT NULL KEY `movie_id` (`movie_id`),,
  `rating`,										--  decimal(2,1) NOT NULL,
  `domestic_sales`,								--  int NOT NULL,
  `international_sales`							--  int NOT NULL,
												--  CONSTRAINT `box_office_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
) VALUE	(9, 6.8, 450000000, 370000000); 		-- '9', 'Procurando Nemo', 'John Lasseter', '2003', '107'
```

## Exercício 3: O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Stanton. Corrija esse dado utilizando o comando UPDATE.
```sql
UPDATE `pixar`.`movies`
SET `director` = 'Andrew Stanton'
WHERE `id` = 9;
```

## Exercício 4: O título do filme “Ratatouille” está incorreto na tabela movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.
```sql
SET sql_safe_updates = 0;

UPDATE `pixar`.`movies`
SET `title` = 'Ratatouille', `year` = 2007
WHERE `title` = 'ratatui';
```
## Exercício 5: Insira as novas classificações abaixo na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:

    --     Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
    --     Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
    --     WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

```sql
SELECT * FROM `pixar`.`movies` WHERE `title` IN ('Monstros SA', 'Os Incríveis', 'WALL-E'); -- busca IDs: 8, 10, 11
INSERT INTO `pixar`.`box_office` (
  `movie_id`,														--  int DEFAULT NULL KEY `movie_id` (`movie_id`),,
  `rating`,															--  decimal(2,1) NOT NULL,
  `domestic_sales`,													--  int NOT NULL,
  `international_sales`												--  int NOT NULL,
																	--  CONSTRAINT `box_office_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
) VALUES
	(8, 8.5, 300000000, 250000000),
	(9, 7.4, 460000000, 510000000),
	(10, 9.9, 290000000, 280000000);
```

## Exercício 6: Exclua da tabela movies o filme “WALL-E”.
```sql
SET sql_safe_updates = 0;
DELETE FROM `pixar`.`movies` WHERE id = 11;
```

## Exercício 7: Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.
```sql
SET sql_safe_updates = 0;
SELECT `id` FROM `pixar`.`movies` WHERE `director` = 'Andrew Stanton'; -- 2 e 9
DELETE FROM `pixar`.`box_office` WHERE `movie_id` IN (2, 9);
DELETE FROM `pixar`.`movies` WHERE `director` = 'Andrew Stanton'; 
```

# Exercícios - bônus

## Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados pixar `pixar_db.sql`.


## Exercício 8: Altere a classificação da tabela box_office para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
```sql
SET sql_safe_updates = 0;
UPDATE `pixar`.`box_office`
SET `rating` = 9.0
WHERE `domestic_sales` > 400000000;
```

## Exercício 9: Altere a classificação da tabela box_office para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
```sql
SET sql_safe_updates = 0;
UPDATE `pixar`.`box_office`
SET `rating` = 6.0
WHERE `domestic_sales` BETWEEN 200000001 AND 299999999;
```

## Exercício 10: Exclua da tabela movies todos os filmes com menos de 100 minutos de duração.
```sql
SET sql_safe_updates = 0;
SELECT * FROM `pixar`.`movies` WHERE `length_minutes`< 100; -- ids de filmes com menos de 100 minutos de duração: 1, 6, 7, 8
DELETE FROM `pixar`.`box_office` WHERE `movie_id` IN (1, 6, 7, 8);
DELETE FROM `pixar`.`movies` WHERE `id` IN (1, 6, 7, 8);
```