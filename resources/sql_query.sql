-- create tables
CREATE TABLE methane_data(
	year int,
	country varchar,
	sector varchar,
	emissions float
);

CREATE TABLE gdp_data(
	year int,
	country varchar,
	gdp float,
	PRIMARY KEY (year, country)
);

-- csv files were uploaded into the tables manually

-- view tables
select * from gdp_data;
select * from methane_data;

-- merge tables
SELECT m.year, m.country, m.sector, m.emissions, g.gdp
FROM methane_data as m
INNER JOIN gdp_data as g ON m.year=g.year AND m.country=g.country;

-- filter sector
SELECT m.year, m.country, m.sector, m.emissions, g.gdp
FROM methane_data as m
INNER JOIN gdp_data as g ON m.year=g.year AND m.country=g.country
WHERE m.sector = 'Total including LUCF'
;

-- create table from merge query
SELECT m.year, m.country, m.sector, m.emissions, g.gdp
INTO merged_data
FROM methane_data as m
INNER JOIN gdp_data as g ON m.year=g.year AND m.country=g.country
;

-- create table for a specific sector
SELECT m.year, m.country, m.sector, m.emissions, g.gdp
INTO sector_total
FROM methane_data as m
INNER JOIN gdp_data as g ON m.year=g.year AND m.country=g.country
WHERE m.sector = 'Total including LUCF'
;

-- view the created tables
select * from sector_total;
select * from merged_data;