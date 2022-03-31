# Database

An AWS RDS database was created and connected to Postgres.

## ERD 
[ERD Link](https://app.quickdatabasediagrams.com/#/d/H3orn0)

![resources/images/ERD_diagram.png](resources/images/ERD_diagram.png)

## Two tables were created in PgAdmin and the data was imported into the tables

### Query

![resources/images/query.png](resources/images/query.png)

### Methane Emmissions table

![resources/images/methane_snap.png](resources/images/methane_snap.png)

### GDP table

![resources/images/GDP_snap.png](resources/images/GDP_snap.png)

## The tables were then joined using an inner join and two new tables were created

### Query

### Merged Data table

![resources/images/inner_join.png](resources/images/inner_join.png)

- This table will be used to identify the relationship between emissions and gdp for every sector.

### Sector Specific Data table

![resources/images/sector_table.png](resources/images/sector_table.png)

- This table can be used to view the total emissions of each country and their GDP
