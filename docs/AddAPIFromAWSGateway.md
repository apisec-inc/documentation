
# How to programmatically register API’s from AWS Gateway

Depending on your development/deployment process, it may be easier to register API’s within APIsec using a script rather than the UI.  In order to make that easier, there is a pre-written script that is located [here](https://github.com/apisec-inc/apisec-scripts/tree/master/AWS-API-Gateway).

In order to use the script, there are a few steps/prerequisites.



1. Install the AWS CLI. [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
2. Generate an AWS Secret-key and Access-key

Once you have the prerequisites done and your key information, you can use the script in the following manner.

`#Syntax: bash api-gateway-registration.sh --host "" --username "" --password "" --accesskey "&lt;ACCESS_KEY>" --secretkey "&lt;SECRET_KEY>" --name "" --accountType "&lt;ACCOUNT_TYPE>" --region ""`

`#Example usage: bash api-gateway-registration.sh --host "https://cloud.apisec.ai" --username "admin@apisec.ai" --password "xxxxxx" --accesskey "xxxxxxx" --secretkey "xxxxxxxxx" --name "Testing" --accountType "AWS_API_GATEWAY" --region "us-east-1"`

<iframe src="../Chatbot/index.html" width="320" height="400" frameborder="0" style="position: fixed; bottom: 20px; right: 20px;"></iframe>