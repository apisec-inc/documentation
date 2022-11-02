# Add Endpoints via cURL

## Overview
This document outlines the steps that are needed to add an endpoint using the command line. For adding endpoints using the UI, refer to the 'Add Endpoints - UI' section from the left hand navigation.


### Using command line to add endpoints

Prerequisite - Register an API

Before using the CLI, the user must have registered an API from the UI.

Register a new API project in APIsec using the JSON API documentation located in the APIsec/On-Prem at /Netbanking/NBEnhancement2Test.json

**Generate an access token**

curl --location --request POST 'https://`<APIsec On-Prem URL>`/auth/login' --header 'Content-Type: application/json' --data-raw '{"username":"`<username>`","password":"`<password>`"}'


**Get Project ID**

Get the Project ID of the API Project registered in Step 1. The easiest way is to find it in the UI by navigating to the project and extracting it from the URL:

**Format:**

```
https://cloud.apisec.ai/#/app/projects/<project-id>/dashboard
```
**Note:**  Replace the <project-id> from the UI by following the details below after an API is registered:


https://cloud.apisec.ai/#/app/projects/8adc83a083ca93f30183d73048333ab8/dashboard

From the URL the Project ID is: **8adc83a083ca93f30183d73048333ab8**

**Add Endpoint using cURL**
       
The User will call the APIsec API endpoint via this example cURL or similar programming script.  The format of the request will be:


curl --location --request POST 'https://`<APISecOn-PremURL>`/api/v1/endpoint/project/`<ADD-Project-ID>`' \
--header 'Authorization: Bearer `<token>` \
--header 'Content-Type: application/json' \
--data-raw '[{
       "endpoint":"get:/api/v1/orgs/{id}/users?page=0&pageSize=20"
    }
    ]'


**After you execute the command**

Confirm that API returns a successful completion message.

Login to the APIsec portal, access the corresponding project, and confirm the addition of the new endpoints.

Execute the Unsecured Endpoints security category and confirm successful completion of the tests.
