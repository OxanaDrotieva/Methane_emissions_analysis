# ETL



The World GDP Data.xls was changed manually:

- First three rows have been deleted since they had no valuable information for the analysis and didn't let pandas read in the table as a readable dataframe
- European Union was changed to European Union (27) to match its name in methane_hist_emissions.csv
- data from 1990-1999 was dropped because of a lot of missing values in this period of time. We still have data for nineteen years which is enough for our analysis.
- Missing GDP Data for some countries for 2000-2018  years was added manually instead of using .fillna() to keep the results of the analysis accurate.
- - References:
  - - statista (2022). Venezuela: Growth rate of the real gross domestic product (GDP) from 2012 to 2022. Retrieved from [https://www.statista.com/statistics/370918/gross-domestic-product-gdp-growth-rate-in-venezuela/](https://www.statista.com/statistics/370918/gross-domestic-product-gdp-growth-rate-in-venezuela/)
    - Country Economy(2022). South Sudan GDP.  Retrieved from [https://countryeconomy.com/gdp/south-sudan](https://countryeconomy.com/gdp/south-sudan) 
    - Intenational Monetary Fund (IMF). (2022). Sudan. Retrieved from [https://www.imf.org/en/Countries/SDN](https://www.imf.org/en/Countries/SDN) 
    - Country Economy(2022). Nauru GDP.  Retrieved from [https://countryeconomy.com/gdp/nauru?year=2010](https://countryeconomy.com/gdp/nauru?year=2010) 
    - Country Economy(2022). Eritrea GDP.  Retrieved from [https://countryeconomy.com/gdp/eritrea](https://countryeconomy.com/gdp/eritrea)
    - Country Economy(2022). Somalia GDP.  Retrieved from [https://countryeconomy.com/gdp/Somalia?year=2010](https://countryeconomy.com/gdp/Somalia?year=2010)
    - Country Economy(2022). Afghanistan GDP.  Retrieved from [https://countryeconomy.com/gdp/afghanistan](https://countryeconomy.com/gdp/afghanistan)
    - Country Economy(2022). Sao Tome GDP.  Retrieved from [https://countryeconomy.com/gdp/sao-tome-principe?year=2005](https://countryeconomy.com/gdp/sao-tome-principe?year=2005)
