# supply-chain-app

This app contains two modules:
1) Management App
2) AI Algorithm to predict vaccine distribution

# Management App

This was built using React and Ionic and integrates the Map API to show supply and demand for vaccine in each region.
It also consists of a statistics tab.

# AI Algorithm

This algorithm considers each node as a center for vaccine distribution. Each node has a demand which is the amount of vaccine it needs and a supply which is the number of vaccines
currently present. At any given point of time the demand for the vaccine is going to be higher than the supply. We must hence control the daily demand by appointing the 
appropriate number of people vaccines each day for each region. A region is appointed vaccines daily on the basis of importance which is determined by the number of regular,
medical professionals, and senior citizens in the region.

The concept of overbooking of slots ensures all the vaccines are consumed. The algorithm decides overbooking based on previous demand supply data that it gathered for each region.
This ensures that we overbook vaccines (vary daily demand) in such a way that the daily supply matches the actual demand for that day. In a way it is predicting human
behaviour in a way to ensure vaccines are used optimally. 

The model currently uses linear regression as our intention is not to deal with complex behaviour.
