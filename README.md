# ETL



The World GDP Data.xls was changed manually:

- First three rows have been deleted since they had no valuable information for the analysis and didn't let pandas read in the table as a readable dataframe
- European Union was changed to European Union (27) to match its name in methane_hist_emissions.csv
- data from 1990-1999 was dropped because of a lot of missing values in this period of time. We still have data for nineteen years which is enough for our analysis.
- Missing GDP Data for some countries for 2000-2018  years was added manually instead of using .fillna() to keep the results of the analysis accurate.
- South Sudan was excluded from analysis because it gained independence from Sudan in 2011, therefore there is no GDP data available before this time.
- - References:
  - - statista (2022). Venezuela: Growth rate of the real gross domestic product (GDP) from 2012 to 2022. Retrieved from [https://countryeconomy.com/gdp/venezuela](https://countryeconomy.com/gdp/venezuela#:~:text=The%20GDP%20figure%20in%202018,2017%2C%20when%20it%20was%20%244%2C892.)
    - Country Economy(2022). Nauru GDP.  Retrieved from [https://countryeconomy.com/gdp/nauru?year=2010](https://countryeconomy.com/gdp/nauru?year=2010) 
    - Country Economy(2022). Eritrea GDP.  Retrieved from [https://countryeconomy.com/gdp/eritrea](https://countryeconomy.com/gdp/eritrea)
    - Country Economy(2022). Somalia GDP.  Retrieved from [https://countryeconomy.com/gdp/Somalia?year=2010](https://countryeconomy.com/gdp/Somalia?year=2010)
    - Country Economy(2022). Afghanistan GDP.  Retrieved from [https://countryeconomy.com/gdp/afghanistan](https://countryeconomy.com/gdp/afghanistan?year=2001#:~:text=The%20GDP%20figure%20in%202001,2000%2C%20when%20it%20was%20%24170.)
    - Country Economy(2022). Sao Tome GDP.  Retrieved from [https://countryeconomy.com/gdp/sao-tome-principe?year=2005](https://countryeconomy.com/gdp/sao-tome-principe?year=2005)
- Group #3 meets up on Tuesdays and Thursdays  at 7pm via zoom. 
- All the communication is held via Slack
- In case of an urgent question text to personal phone numbers of  team members.

### Roles
* Front End/ Dashboard: Oxana
* Dashboard: Samira
* Database, ML model: Rachel
* Readme, Tableau: Grace

## Overview of the project

This project is created to analyze greenhouse gas emissions of different countries and sectors (agriculture, industrial processes, fugitive emissions, waste etc.) and finding if there is a correlation between GDP of the country and its methane emission.

### Lucidchart

![images/Lucid.png](images/Lucid.png)

### Data source

[Kaggle data link](https://www.kaggle.com/datasets/kkhandekar/methane-emissions-across-the-world-19902018)

[The World Bank](https://data.worldbank.org/indicator/NY.GDP.MKTP.CD)

[Countryeconomy.com/gdp]( https://countryeconomy.com/gdp)



### Key question to be answered:

- Is there a correlation between methane emissions and GDP of the countries?

## Technical Description
The dataset that we collected are in the .csv files. Both the methane emissions and GDP datasets will have to cleaned/reformat/reshape to be used for analysis of the project. Some steps that have been taken include:
* Dropping missing data
* Filling some missing data
* Transposing of data 
* Normalization of data
* merging datasets 

Some of the libraries and tools that will include: Pandas, PostgresSQL, AWS, ML, JavaScript, html, plotly, Scikit.learn. hvPlot, Excel, Tableau, Lucid-chart, etc. We can look into some statistical models to see the relationship between them, i.e. they may have the same increasing or decreasing factor variable.

Anticipated major challenges 

* Original GDP dataset was represented in scientific notation with large numbers. Now the numbers are repreesented in billions. We had to convert in excel. 
* Pivoting and finding a new dataset on a short notice.
* Be cautious during the data transformation not change the raw dataset.
* Having patience with each other as a team can be hard. Thus, we will need to be intentional on distributing responsibilities so that there are no duplication of efforts and meeting times that work for the team. 

## Data Cleaning Process 
### Why years were dropped from GDP data sources
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

