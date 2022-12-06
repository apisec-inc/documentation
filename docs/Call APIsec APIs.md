<h1 align="center" style="color: #F5F5F5;"> <b> How to Call APIsec APIs </b> </h1>

<p style="text-align: left;color: 	#A9A9A9;font-size:16px;"> By <b><a href="https://github.com/fersy02">Feroz Syed</a></b> on <b>March 23,2021</b> </p> 

### **Step 1: Register A New User Account**

**Note**: Avoid using personal credentials when accessing APIsec APIs. Instead, register a new user and grant an appropriate role in Apisec™ UI and entitle this account to required projects by adding them as collaborators under the Configurations, Details tab.

### **Step 2: Authenticating and Generating A JWT Token**

curl -s -X POST https://cloud.apisec.ai/auth/login -H 'Accept: application/json' -H 'Content-Type: application/json'
-d '{"username": "", "password": ""}'

You will receive a token in the response body.

{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXRCYW5raW5nLy9mZXJvekBmeGxhYnMuaW8iLCJzY29wZXMiOiJST0xFX1VTRVIsUk9MRV9QUk9KRUNUX01BTkFHRVIsUk9MRV9BRE1JTiIsImlhdCI6MTY3MDMzNjEzNSwiZXhwIjoxNjcwMzQyNTM1fQ.93ZjB4SlpnOVrJmXRLxqFUN00nNHkU"}

**Note**: The TTL for this token is 24 hours.

### **Step 3: Get Entitled Projects**

**Prerequisite**: Use the token from the previous call as part of the header value in “Authorization: Bearer ”

**example**: curl -s -X GET https://cloud.apisec.ai/api/v1/projects -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXRCYW5raW5nLy9mZXJvekBmeGxhYnMuaW8iLCJzY29wZXMiOiJST0xFX1VTRVIsUk9MRV9QUk9KRUNUX01BTkFHRVIsUk9MRV9BRE1JTiIsImlhdCI6MTY3MDMzNjEzNSwiZXhwIjoxNjcwMzQyNTM1fQ.93ZjB4SlpnOVrJmXRLxqFUN00nNHkU" -H "Content-Type: application/json" -H "Accept: application/json" 

Response structure

### **Step 4: Update Environment Base URL or Authentication in the desired Project**
Use the following endpoint to update the environment base URL or Authentication credentials in the desired project: 
  PUT:/api/v1/projects/{projectId}/env/{envId}

**Prerequisite**: 
Using the GET:/api/v1/projects/{projectId}/env endpoint, grab the response body to use it as a payload in the consecutive step

**example**: 
curl -s -X GET https://cloud.apisec.ai/api/v1/projects/{projectId}/env -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXRCYW5raW5nLy9mZXJvekBmeGxhYnMuaW8iLCJzY29wZXMiOiJST0xFX1VTRVIsUk9MRV9QUk9KRUNUX01BTkFHRVIsUk9MRV9BRE1JTiIsImlhdCI6MTY3MDMzNjEzNSwiZXhwIjoxNjcwMzQyNTM1fQ.93ZjB4SlpnOVrJmXRLxqFUN00nNHkU" -H "Content-Type: application/json" -H "Accept: application/json" 

Use will receive the environment base URL and authentication credentials in the response body. Capture the response and update the values you would like to replace in the consecutive call

**example**:
curl -s -X PUT https://cloud.apisec.ai/api/v1/projects/{projectId}/env/{envId} -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXRCYW5raW5nLy9mZXJvekBmeGxhYnMuaW8iLCJzY29wZXMiOiJST0xFX1VTRVIsUk9MRV9QUk9KRUNUX01BTkFHRVIsUk9MRV9BRE1JTiIsImlhdCI6MTY3MDMzNjEzNSwiZXhwIjoxNjcwMzQyNTM1fQ.93ZjB4SlpnOVrJmXRLxqFUN00nNHkU" -H "Content-Type: application/json" -H "Accept: application/json" -d '{ "id": "8adc81a88434193f01844166fc3e253b", "createdBy": "8a80812d69055412016905ea9d592bf7", "createdDate": "2022-11-04T06:49:39.134+0000", "modifiedBy": "8a80812d69055412016905ea9d592bf7", "modifiedDate": "2022-11-04T06:55:21.607+0000", "version": null, "inactive": false, "projectId": "8adc81a88434193f01844166fc362539", "name": "Master", "refId": "Master", "description": null, "baseUrl": "http://netbanking.apisec.ai:8080", "auths": [ { "accessTokenUri": null, "authType": "Basic", "authorizationScheme": null, "clientAuthenticationScheme": null, "clientId": null, "clientSecret": null, "grantType": null, "header_1": null, "header_2": null, "header_3": null, "id": null, "name": "Default", "inactive": false, "invalid": true, "password": "PASSWORD-MASKED", "preEstablishedRedirectUri": null, "scope": null, "tokenName": null, "useCurrentUri": null, "userAuthorizationUri": null, "username": "user1@netbanking.io", "tmpAutoCompleteOffVar": "user1@netbanking.io", "newForm": false }], "issueTracker": { "id": "8adc81a88434193f01844166fc3f253c", "name": null, "url": null, "projectKey": null, "issueType": null, "account": null, "accountType": null }, "projectCreation": false, "localOffSet": null, "endpoint": null, "region": null, "url": null, "reachable": true }'

### **Step 5: Get Project Vulnerabilities**

**Note**: Using the response from Step 3, make individual calls to retrieve project-specific vulnerabilities.

 This call returns Critical and High vulnerabilities only from the master environment.

**example**: curl -s -X GET https://cloud.apisec.ai/api/v1/projects/{projectId}/vulnerabilities -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXRCYW5raW5nLy9mZXJvekBmeGxhYnMuaW8iLCJzY29wZXMiOiJST0xFX1VTRVIsUk9MRV9QUk9KRUNUX01BTkFHRVIsUk9MRV9BRE1JTiIsImlhdCI6MTY3MDMzNjEzNSwiZXhwIjoxNjcwMzQyNTM1fQ.93ZjB4SlpnOVrJmXRLxqFUN00nNHkU" -H "Content-Type: application/json" -H 
"Accept: application/json" 

Here are a few significant attributes of the vulnerability entity:

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
