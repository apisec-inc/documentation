<h1 align="center"> <b> Scan APIs locally with APIsec CLI </b> </h1>
<div style="text-align: justify"> 

### **Scan local APIs to find vulnerabilities with APIsec CLI**

### **1. Installation**

To download and run apisec-cli, please run the following

git clone https://github.com/intesar/apisec-clicd apisec-clijava -jar apisec-cli.jar

### **2. Signup with APIsec**

For the new users, you need to sign-up with APIsec. It creates a new tenant for you in the APIsec SaaS Platform.

Command: Signup –c  -e

apisec> signup -c mycompany -e john@mycompany.com

It returns the login credentials, i.e., the user name and an auto generated password. Save these in a file called fx.properties at the location specified. Upon next execution, you’ll be automatically logged-in to your tenant.

Alternatively, you can keep the password with you, and when you execute the script next time you need to manually login using the below command.

Command: login –u  -p

apisec> login –u john@mycompany.com -p DBhk20Al

### **3. Register APIs**

Register the API that you wish to scan by providing its publicly available Open API Spec URL i.e.,

swagger url for e.g., http://mycompany.com/application/v2/api-docs

Command: register –n  -o

apisec> register –n orders -o http://mycompany.com/orders/v2/api/docs

APIsec parses the specs and generates the security playbooks for scanning. This might take a few seconds depending on the number of endpoints in the API.

If your application is hosted internally and the OAS Url is not available publicly, APIsec recommends you to upload the OAS file in json/yaml format to any public location like github and provide its direct url.

Note: You can register multiple APIs in the same tenant by repeating the above step. Use ‘ls’ command to view the list of all the registered APIs with APIsec

Command: ls

apisec> ls

### **4. Scan the API**

To scan the API for vulnerabilities, use the scan command as below.

Command: scan –n < api name>

apisec> scan –n orders

It runs all the playbooks generated in the above step, which invokes the endpoints at the application hosted (the host url and the basepath provided in the OAS Specs).

If the application is hosted internally and no public IP is available, you need to scan using your local scanner. The steps to create a local scanner are available in the next section.

### **5. Create a local scanner**

If the application is hosted internally and no public IP is available, you need to deploy a local scanner to invoke.

Command: scanner create –n

apisec> scanner create –n MyLocalScanner

Command: scan –n  -s

apisec> scan –n orders –s MyLocalScanner

This command returns the docker and kubernetes scripts to deploy the scanner. Run the docker or kubernetes script as per your environment setup on the same machine where the API is hosted or any other machine in the network which can access the APIs. The script It will deploy the scanner in that machine.

Use the below commands to view the list of all local scanners created in your tenant.

Command: scanner ls

apisec> scanner ls

Use the below commands to remove the local scanner in your tenant. Command: scanner rm -n

apisec> scanner rm -n MyLocalScanner

  </div>
