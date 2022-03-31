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
