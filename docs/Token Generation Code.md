<h1 align="center" style="color: #F5F5F5;"> <b> How to Add Token Generation Code </b> </h1>

<p style="text-align: left;color: 	#A9A9A9;"> By <b><a href="https://github.com/fersy02">Feroz</a></b> on <b>March 23,2021</b> </p>

### **Step 1: Provide a curl for generating token**

Sample command:

curl -s -d ‘{“username”:”admin”, “password”:”secret”}’ -H “Content-Type: application/json” -H “Accept: application/json” 
-X POST https://ip/user/login

### **Step 2: Provide Token extraction logic using grep/jq**

If the Step 1 response look like this

{“time”: “1594073751605”, “info”: {“token”: “val”}}.

and your token path is “info.token” you can use json parser (jq) to extract the token. Alternatively, you can also use 
“grep” to extract the value. For example:

curl -s -d ‘{“username”:”admin”, “password”:”secret”}’ -H “Content-Type: application/json” -H “Accept: application/json”
-X POST https://ip/user/login | jq –raw-output “.info.token”

### **Step 3: Provide a token usage example.**

curl –location –request GET ‘https://ip/api/users’ -H ‘X-API-KEY: <>’

### **Step 4: Wrapping your logic in @Cmd**

You can wrap your entire Step 2 content using the @Cmd syntax. And it will be evaluated at runtime before running the Playbooks.

Usage:

X-API-KEY: {{@Cmd | Step-2-content }}

or

Authorization: Bearer {{@Cmd | Step-2-content }}

Sample code:

Authorization: Bearer {{@Cmd | curl -s -d ‘{“username”:”admin”,”password”:”secret”}’ -H “Content-Type: application/json”
-H “Accept: application/json” -X POST https://ip/user/login | jq –raw-output “.info.token” }}

### **Step 5: Using @CmdCache**

@CmdCache is similar to @Cmd, but it caches the token for 5 minutes and reuses it across multiple Playbooks.

Usage:

X-API-KEY: {{@Cmd | Step-2-content }}

or

Authorization: Bearer {{@Cmd | Step-2-content }}

Sample code:

Authorization: Bearer {{@CmdCache | curl -s -d ‘{“username”:”admin”,”password”:”secret”}’ -H “Content-Type: application/json”
-H “Accept: application/json” -X POST https://ip/user/login | jq –raw-output “.info.token” }}

### **Step 6: Using @Vault for secure password usage.**

Create a key-value pair in Vault and inject it using this syntax.

Usage:

[[@Vault.ORG-NAME/KEY-NAME]]

e.g.

Authorization: Bearer {{@CmdCache | curl -s -d ‘{“username”:”admin”,”password”:”[[@Vault.ORG-NAME/KEY-NAME]]”}’ -H 
“Content-Type: application/json” -H “Accept: application/json” -X POST https://ip/user/login | jq –raw-output “.info.token” }}

Note: If the request body contains 2 or more opening/closing curly brackets together. Make sure to escape them using spaces 
e.g. {{ -> { {.



   
