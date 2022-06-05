The 'Reports' page of APIsec covers the trends, summary, and coverage. This section of the Project Dashboard contains brief stats of the current Project. Also, it has graphical representations of Project Stats. 

### **6.1. Trends**
The 'Email Report' button at the very top right corner of the 'Trends' page allows a user to receive PDF of Pentest, Developer, and compliance Report in the mail box. The reports are sent on the registered email address. 

The "API Composition" Pie chart's each slice represents the API methods along with total number of requests. 

The "Endpoints Trend" graph shows the trend of API Endpoints. The trend changes on the basis of increase/decrease in the number of Endpoints. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322487-6b390603-2522-4383-8bc4-2afd0a05530b.png" />

The "Coverage Breakdown" and "Playbooks Trend" are already explained in the Chapter 4.2.4.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322496-2e79aabb-8dca-4b4c-8c40-72e1e02e8c48.png" />

The "Open Vulnerabilities" Pie chart shows the detected vulnerabilities which are not fixed yet. It divides them on the basis of 'Security Categories'.

The "Vulnerability Trend" graph shows the increase/decrease in the detected vulnerabilities in all the Scans performed. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322506-5afc79db-32a0-4348-a160-a80b729293ab.png" />

This section of the 'Trends' page contains a list of 'Security Categories' along with their OWASP ranking. It shows the 'Security Categories' assessed in the API Scan and the vulnerabilities found. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322517-799b2861-2558-4b61-a409-d709cb7db53b.png" />

At the end of list, it shows the total number of Playbooks and total open vulnerabilities. The important option here is the 'Download as Excel' button. 

Below is the view of Excel file. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322530-802bbf73-8014-4b6c-a3ac-aa89e483a016.png" />

## **6.2. Summary**
The 'Summary' Page contains the briefs of Project API Scan. The user can download the PDF of the summary. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322538-4d8e395a-fabc-48d7-8e63-11fa1e7cd1c3.png" />

## **6.3. Coverage**
The 'Coverage' has a list view of coverage breakdown. The 'Security Categories' mapped against the API resources and Endpoints are presented. 

The 'Y' green box shows that the particular category was mapped against the API. The 'N' red box is the opposite. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322542-159c350b-b8a8-4650-bb9a-584e4ac64830.png" />

If a user intends to re-test the category for a particular resource then `click` on the green box. 
Select the environment -> Select Scanner -> `click` Scan 

Please note that the categories with 'N' status cannot be re-assessed. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322552-b41cf272-f961-4386-9288-ad15aa20fa67.png" />

The important feature on this page is the 'Download as Excel' button at the bottom right corner of the page. 

Below is the view of Excel. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322557-1ba15faa-4fe4-449b-a5d7-9b5531c07546.png" />
