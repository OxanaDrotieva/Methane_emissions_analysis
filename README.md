# Database

An AWS RDS database was created and connected to Postgres.

## ERD 
[ERD Link](https://app.quickdatabasediagrams.com/#/d/H3orn0)

![resources/images/ERD_diagram.png](resources/images/ERD_diagram.png)

## Two tables were created in PgAdmin and the data was imported into the tables

### Query

![resources/images/query.png](resources/images/query.png)

### Methane_data table

![resources/images/methane_snap.png](resources/images/methane_snap.png)

### GDP_data table

![resources/images/GDP_snap.png](resources/images/GDP_snap.png)

## The tables were then joined using an inner join and two new tables were created

### Query

![resources/images/query2.png](resources/images/query2.png)

- The tables were joined using an inner join
- The merged_data table was created to hold the joined query data
- The two tables were joined and then filtered for a specific sector
- A new table was created to store the filtered data

### Merged Data table

![resources/images/inner_join.png](resources/images/inner_join.png)

- This table will be used to identify the relationship between emissions and gdp for every sector.

### Sector Specific Data table

![resources/images/sector_table.png](resources/images/sector_table.png)

- This table can be used to view the total emissions of each country and their GDP

## S3 Bucket

An S3 Bucket was created to store our Geojson data.

![resources/images/geojson.png](resources/images/geojson.png)

- Snippet of the Geojson file used for mapping of the data

## Connecting the Database to the python

![resources/images/sqlalchemy.png](resources/images/sqlalchemy.png)

- SQLAlchemy was used to connect to the database in python to use the tables in the machine learning model
