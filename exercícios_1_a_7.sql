-- Exercício 1: Insira as produções da Pixar na tabela movies:
--     Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
--     Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
--     Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
--     WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

INSERT INTO `pixar`.`movies` (
										-- `id` int NOT NULL AUTO_INCREMENT,
  `title`,								--  varchar(30) NOT NULL,
  `director`,							--  varchar(30) DEFAULT NULL,
  `year`,								--  int NOT NULL,
  `length_minutes` 						-- int NOT NULL
) VALUES
	('Monstros SA','Pete Docter', 2001, 92),
	('Procurando Nemo','John Lasseter', 2003, 107),
	('Os Incríveis','Brad Bird', 2004, 116),
	('WALL-E','Pete Docter', 2008, 104);


-- Exercício 2: O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela box_office.
INSERT INTO `pixar`.`box_office` (
  `movie_id`,									--  int DEFAULT NULL KEY `movie_id` (`movie_id`),,
  `rating`,										--  decimal(2,1) NOT NULL,
  `domestic_sales`,								--  int NOT NULL,
  `international_sales`							--  int NOT NULL,
												--  CONSTRAINT `box_office_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
) VALUE	(9, 6.8, 450000000, 370000000); 		-- '9', 'Procurando Nemo', 'John Lasseter', '2003', '107'

-- Exercício 3: O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Stanton. Corrija esse dado utilizando o comando UPDATE.
UPDATE `pixar`.`movies`
SET `director` = 'Andrew Stanton'
WHERE `id` = 9;

-- Exercício 4: O título do filme “Ratatouille” está incorreto na tabela movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.
SET sql_safe_updates = 0;

UPDATE `pixar`.`movies`
SET `title` = 'Ratatouille', `year` = 2007
WHERE `title` = 'ratatui';

-- Exercício 5: Insira as novas classificações abaixo na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:
--     Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
--     Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
--     WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

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

-- Exercício 6: Exclua da tabela movies o filme “WALL-E”.
SET sql_safe_updates = 0;
DELETE FROM `pixar`.`movies` WHERE id = 11;

-- Exercício 7: Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.
SET sql_safe_updates = 0;
SELECT `id` FROM `pixar`.`movies` WHERE `director` = 'Andrew Stanton'; -- 2 e 9
DELETE FROM `pixar`.`box_office` WHERE `movie_id` IN (2, 9);
DELETE FROM `pixar`.`movies` WHERE `director` = 'Andrew Stanton'; 
