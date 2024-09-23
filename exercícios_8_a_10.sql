--  Exercício 8: Altere a classificação da tabela box_office para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
SET sql_safe_updates = 0;
UPDATE `pixar`.`box_office`
SET `rating` = 9.0
WHERE `domestic_sales` > 400000000;

-- Exercício 9: Altere a classificação da tabela box_office para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
SET sql_safe_updates = 0;
UPDATE `pixar`.`box_office`
SET `rating` = 6.0
WHERE `domestic_sales` BETWEEN 200000001 AND 299999999;

-- Exercício 10: Exclua da tabela movies todos os filmes com menos de 100 minutos de duração.
SET sql_safe_updates = 0;
SELECT * FROM `pixar`.`movies` WHERE `length_minutes`< 100; -- ids de filmes com menos de 100 minutos de duração: 1, 6, 7, 8
DELETE FROM `pixar`.`box_office` WHERE `movie_id` IN (1, 6, 7, 8);
DELETE FROM `pixar`.`movies` WHERE `id` IN (1, 6, 7, 8);