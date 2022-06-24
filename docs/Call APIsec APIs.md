<h1 align="center" style="color: #F5F5F5;"> <b> How to Call APIsec APIs </b> </h1>

<p style="text-align: left;color: 	#A9A9A9;font-size:16px;"> By <b><a href="https://github.com/fersy02">Feroz Syed</a></b> on <b>March 23,2021</b> </p> 

### **Step 1: Register A New User Account**

Note: Don’t use personal credentials when accessing APIsec APIs. Instead, register a new user with the role “USER” 
in Apisec™ UI and entitled this account to required projects.

### **Step 2: Authenticating and Generating A JWT Token**

curl -s -X POST https://cloud.fxlabs.io/auth/login -H 'Accept: application/json' -H 'Content-Type: application/json'
-d '{"username": "", "password": ""}'

You should receive a token back.

{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXRCYW5raW5nLy9pbnRlc2FyQGZ4bGFicy5pbyIs
InNjb3BlcyI6IlJPTEVfVVNFUixST0xFX1BST0pFQ1RfTUFOQUdFUixST0xFX0FETUlOLFJPTEVfRU
5URVJQUklTRV9BRE1JTiIsImlhdCI6MTYwOTg4NzQ5NywiZXhwIjoxNjA5OTA1NDk3fQ.8kkPdba
cGy6BDfzqnTM6EiUi6aHS_mWDHCfWirvma_s"}

Note: The token is valid for 5 hours.

### **Step 3: Get Entitled Projects**

Note: Use the token from the previous call as part of the header value in “Authorization: Bearer ”

curl -s -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXRCYW5raW5nLy9pbnRlc2FyQGZ4bGFicy5pbyIsInNjb3Bl
cyI6IlJPTEVfVVNFUixST0xFX1BST0pFQ1RfTUFOQUdFUixST0xFX0FETUlOLFJPTEVfRU5URVJQ
UklTRV9BRE1JTiIsImlhdCI6MTYwOTg4NzQ5NywiZXhwIjoxNjA5OTA1NDk3fQ.8kkPdbacGy6BD
fzqnTM6EiUi6aHS_mWDHCfWirvma_s" -H "Content-Type: application/json" -H 
"Accept: application/json" -X GET https://cloud.fxlabs.io/api/v1/projects

Response structure

### **Step 4: Get Project Vulnerabilities**

Using the response from Step 3, make individual calls to retrieve project-specific vulnerabilities.

Note: This call returns Critical and High vulnerabilities only from the master environment.

curl -s -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXRCYW5raW5nLy9pbnRlc2FyQGZ4bGFicy5pbyIsInNjb3Bl
cyI6IlJPTEVfVVNFUixST0xFX1BST0pFQ1RfTUFOQUdFUixST0xFX0FETUlOLFJPTEVfRU5URVJQ
UklTRV9BRE1JTiIsImlhdCI6MTYwOTg4NzQ5NywiZXhwIjoxNjA5OTA1NDk3fQ.8kkPdbacGy6BD
fzqnTM6EiUi6aHS_mWDHCfWirvma_s" -H "Content-Type: application/json" -H 
"Accept: application/json" -X GET https://cloud.fxlabs.io/api/v1/projects/{projectId}/vulnerabilities

Here are a few important attributes of the vulnerability entity:

  - id
  - status
  - environment.baseURL
  - issueDesc
  - label
  - description
  - category
  - cvss
  - severity
  - rank
  - suggestion
  - createdDate
  - method
  - path


       
