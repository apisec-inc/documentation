# Security Center Dashboard

`Reading time 4 min`

APIsec provides all customers with a Security Center Dashboard that summarizes information accross all API applications into one view.  
You can access the security center from the dashboard on the far right menu item.
![SecurityCenter](https://github.com/apisec-inc/documentation/assets/115025465/cb291949-3f67-4139-9d6e-1824d8e2a1e2)

## **High Level Statistics**
At the top, the dashboard shows the following high level statistics:

<img width="1222" alt="High Level Statistics" src="https://github.com/apisec-inc/documentation/assets/77065777/777b7ac4-83fc-4f5e-b211-8519a2bf9d3e">

#### Count of APIs Registered
Aggregate sum of all registered applications.
#### Count of Endpoints
Aggregate sum of all endpoints.
#### Count of Unique Endpoints
Aggregate sum of all unique endpoints based on combination of methods and endpoints.
#### Count of Playbooks Generated
Aggregate sum of all playbooks generated across all registred APIs.
#### Count of Playbooks Scanned
Cumulative count of executed playbooks across all registered APIs.
#### Count of Open Vulnerabilities
Current count of open vulnerabilties across all registered APIs.

### Open Vulnerabilities Trend
This dashboard enables customers to see a trend of open vulnerabilities over time, compared to the number of endpoints.

<img width="586" alt="Open Vulnerabilities Trend" src="https://github.com/apisec-inc/documentation/assets/77065777/4905ad02-ae1a-45ea-8d9b-916be31befc8">

### Open Vulnerabilities Severity Trend
This dashboard breaks down vulnerabilities over time by severity. In the example below, Critical vulnerabilities increased in July of 2023, corresponding to ongoing onboarding efforts during that same period of time.

<img width="585" alt="Open Vulnerabilities Severity Trend" src="https://github.com/apisec-inc/documentation/assets/77065777/4f2a0eae-9166-4782-ae3e-58b602b183f4">

### Active Projects Open Vulnerabilities
This dashboard breaks down vulnerabilites by severity as in the following example:

<img width="584" alt="Active Projects Open Vulnerabilities" src="https://github.com/apisec-inc/documentation/assets/77065777/c8b69c64-ea2d-4240-9130-fec33c7f33a1">

### Vulnerabilities Age Matrix
This dashboard shows the vulnerabilities by duration. By default, all open vulnerabilities are shown, regardless of how long they remained open. 

<img width="581" alt="Vulnerabilities Age Matrix" src="https://github.com/apisec-inc/documentation/assets/77065777/bee3e7eb-4e99-4087-96dc-b08335df4ff9">

Adjusting the slider at the bottom of the dashboard allows customers to limit the age of vulnerabilities. In the following example, the age of vulnerabilities shown is greater than 60 days.

<img width="586" alt="Vulnerabilitys Age Matrix Slider" src="https://github.com/apisec-inc/documentation/assets/77065777/311d92ff-09f1-4cc6-a2d6-bfc2506ed222">

### OWASP Top 10 Vulnerabilities
This dashboard shows vulnerabilities that are identified focused solely on the OWASP API Top 10 Categories. Example below:

<img width="379" alt="OWASP Top 10 Vulnerabilities" src="https://github.com/apisec-inc/documentation/assets/77065777/8884d457-5f7f-4fed-91b7-f69db3329abd">

### List of Unscanned APIs
This dashboard allows customers to identify API projects and associated profiels that have not been scanned within the past 6 months. Scans can be initiated via a veriety of mechanisms, but this list is populated with applications that have not been scanned by any mechanism, indicating a problem that needs further investigation. Hovering over the "(i)" provides additional information in the tooltip. A full report of impacted APIs is downloadable in CSV format. Example below:

<img width="379" alt="List of Unscanned APIs" src="https://github.com/apisec-inc/documentation/assets/77065777/5bb2e140-998e-4fbd-a99f-98209112136a">

### Monthly Activities Summary
This dashboard highlights recent activities covering a two month period. Example below:

<img width="380" alt="Monthly Activities Summary" src="https://github.com/apisec-inc/documentation/assets/77065777/0bad2d7d-96b6-451b-af70-857694a0874e">
