# Methane_emissions_analysis
Final Project Data Analysis and Visualization Bootcamp

![images/Project_Cover.png](images/Project_Cover.png)

### Communication protocols

- Group #3 meets up on Tuesdays, Thursdays, Fridays and Saturdays at 7pm. 
- All the communication is held via Slack
- In case of an urgent question text to personal phone numbers of  team members.

### Roles
* Square: Oxana
* Triangle: Samira
* Circle: Rachel
* X: Grace

## Overview of the project

This project is created to analyze greenhouse gas emissions of different countries and sectors (agriculture, industrial processes, fugitive emissions, waste etc.). The team will be working on information related to greenhouse emissions and GDP looking at countries around the world.

### Lucidchart

![images/Lucidchart.PNG](images/Lucidchart.PNG)

### Data source

[Kaggle data link](https://www.kaggle.com/datasets/kkhandekar/methane-emissions-across-the-world-19902018)

[The World Bank](https://data.worldbank.org/indicator/NY.GDP.MKTP.CD)



### Key questions to be answered:

- Is there a relationship between methane emissions and GDP of the countries?
- What countries methane emissions have steadily declined over the last five years?
- Is there a relationship between methane emissions and energy consumption?

## Technical Description
The dataset that we collected are in the .csv files. Both the methane emissions and GDP datasets will have to cleaned/reformat/reshape to be used for analysis of the project. Some steps that have been taken include:
* Dropping missing data
* Dropping missing rows
* Transpose of data 
* Normalization of data
* merging datasets 

Some of the libraries and tools that will include: Pandas, PostgresSQL, AWS, JavaScript, html, Excel, Tableau, Lucid-chart, etc. We can look into some statistical models to see the relationship between them, i.e. they may have the same increasing or decreasing factor variable.

Anticipated major challenges 

* Pivoting and finding a new dataset on a short notice.
* Be cautious during the data transformation not change the raw dataset.
* Having patience with each other as a team can be hard. Thus, we will need to be intentional on distributing responsibilities so that there are no duplication of efforts and meeting times that work for the team. 

## Data Cleaning Process 
### Why years were dropped from data sources
* Years had missing values that could not be filled because it will be time consuming to fill in manually. 

### Navigation
Drop down menu, filters, scroll bar

![UsingFilters.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/UsingFilters.png)

### Identify & Drop Unused Columns 
* Methane data: two columns (gas & unit) were identified and dropped from the data-set.
* GDP data: two columns (indicator name & indicator code) were identified and dropped from the data-set.

![MethaneData_image.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/MethaneData_image.png)

![MethaneData_AfterCl_image.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/MethaneData_AfterCl_image.png)

![GDPData.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/GDPData.png)

![GDPData_AfterCl.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/GDPData_AfterCl.png)

## Drop Missing Data
* Drop missing data for both Methane and GDP data-set.
![DropMissingData_Methane.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/DropMissingData_Methane.png)

![DropMissingData_GDP.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/DropMissingData_GDP.png)

![DropMissingRows.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/DropRows%20_missingdata.png)

## Remove Countries That Have No Emission Values 
Drop rows with countries that don't have emission data or both Methane and GDP data (with corrected country names.
![Countries_noEmissions.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/Countries_noEmissions.png)

![Countries_noEmissions_CorrectedName.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/Countries_noEmissions_CorrectedName.png)

## Remove Countries That Have Different Spelling in Both Methane and GDP data
Create a list of countries with corrected spelling for all countries.
![Countries_DiffSpelling.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/Countries_DiffSpelling.png)

## Transpose Data
![TransposeData.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/TransposeData.png)

![DF_TransposedPlot.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/DF_TransposedPlot.png)

![Binary_encoding.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/Binary_encoding.png)

## Data Correlation Between Values
![DataCorrelation.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/DataCorrelation.png)

## Merge DatFrames
![MergedDF.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/MergedDF.png)

## Target Variable
Apply the Variance threshold to the raw data-set.
* set up our target variable and features
* Initiate linear model
* Prediction

![TargetVariable.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/TargetVariable.png)

Exported data as csv. Data was read csv back after manually filling in the blanks. Below are the reference sources for the missing data.

## Database
Team members present a provisional database that stands in for the final database and accomplishes the following:
1. Sample data that mimics the expected final database structure or schema
2. Draft machine learning module is connected to the provisional database

## References

Country Economy(2022). South Sudan GDP. Retrieved from https://countryeconomy.com/gdp/south-sudan 							
											
Country Economy(2022). Nauru GDP.  Retrieved from https://countryeconomy.com/gdp/nauru?year=2010																			
Country Economy(2022). Eritrea GDP.  Retrieved from https://countryeconomy.com/gdp/eritrea																			
Country Economy(2022). Somalia GDP.  Retrieved from https://countryeconomy.com/gdp/Somalia?year=2010																			
Country Economy(2022). Afghanistan GDP.  Retrieved from https://countryeconomy.com/gdp/afghanistan																			
Country Economy(2022). Sao Tome GDP.  Retrieved from https://countryeconomy.com/gdp/sao-tome-principe?year=2005																			
International Monetary Fund (IMF). (2022). Sudan. Retrieved from https://www.imf.org/en/Countries/SDN
Statista (2022). Venezuela: Growth rate of the real gross domestic product (GDP) from 2012 to 2022. Retrieved from https://www.statista.com/statistics/370918/gross-domestic-product-gdp-growth-rate-in-venezuela/	
