# Methane_emissions_analysis
Final Project Data Analysis and Visualization Bootcamp

![images/Project_Cover.png](images/Project_Cover.png)

### Communication protocols

- Group #3 meets up on Tuesdays, Thursdays, Fridays and Saturdays at 7pm. 
- All the communication is held via Slack
- In case of an urgent question text to personal phone numbers of  team members.



## Overview of the project

This project is created to analyze greenhouse gas emissions of different countries and sectors (agriculture, industrial processes, fugitive emissions, waste etc.).

### Lucidchart

![images/Lucidchart.PNG](images/Lucidchart.PNG)

### Data source

[Kaggle data link](https://www.kaggle.com/datasets/kkhandekar/methane-emissions-across-the-world-19902018)

[The World Bank](https://data.worldbank.org/indicator/NY.GDP.MKTP.CD)



### Key questions to be answered:

- Is there a relationship between methane emissions and GDP of the countries?
- What countries methane emissions have steadily declined over the last five years?
- Is there a relationship between methane emissions and energy consumption?

## Data Cleaning Process for ML with Python
## Identify & Drop Unused Columns 
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

## Data Correlation Between Values
![DataCorrelation.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/DataCorrelation.png)

## Merge DatFrames
![MergedDF.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/MergedDF.png)

## Target Variable
Apply the Variance threshold to the raw dataset.
* set up our target variable and features
* Initiate linear model
* Prediction
![TargetVariable.png](https://github.com/OxanaDrotieva/Methane_emissions_analysis/blob/cleaning_data/images/TargetVariable.png)


