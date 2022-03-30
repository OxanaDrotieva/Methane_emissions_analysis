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

select * from gdp_data;
select * from methane_data;
