APIsec allows you to use a public or private security category(s) while running a Scan.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166119715-6dc082bd-ea19-4d20-9700-8e2b883fa44b.png" />

### **9.1. Public Security Categories**
APIsec has 118 total up-to date public security categories. These security categories include OWASP Top 10 along with other known API vulnerabilities. 

The security categories are constantly updated. But, include:

- Unsecured Endpoints 
- Authentication Weakness
- Role-Based Access Controls (RBAC)
- Attribute-Based Access Controls (ABAC)
- SQL Injection
- Distributed Denial of Service 
      
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166119698-502254b7-519d-408c-bd34-e8a2666d6bd4.png" />

### **9.2. Private Security Categories**
APIsec offers this unique feature to its enterprise customers to add custom security models for newly discovered vulnerability(s) of a database or a framework. 

**Note**: Only the Enterprise admin can add or edit a security model. 

To add a new security model:

1. `click` 'New Security Model' and select the type of mode from the drop-down menu. <br>
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166119699-40a61d6a-f0bf-4303-b114-22c6612082ef.png" />

2. For this demo, i selected 'Injection'.
   
   The ***basic section*** requires following information:
   
   - **Name**: Provide a unique name for the security model.
   - **Injection Data**: This data is the payloads that will be injected on the target API while playbook execution (Security Scanning). 
     
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166119702-91656384-e946-4d3c-9a06-27b8169bffde.png" />
   
   The ***advanced section*** requires following information: 
   
   - **Key**: This is autofilled according to the name of the security model.
   - **Assertions**: Provide the assertions for the said security model. The rules and details are mentioned in the comment box next to 'assertions'.
   - **Security Model Description**: This is optional but it can be added to make it easy for others to understand the purpose of model. It can be written in plain-text or HTML tags. 
   - **Assertions Description**: This is also an optional requirement but it can be added to explicitly define the meaning of assertion expressions.
   - **Remediation**: Admin can add the mitigation techniques for the vulnerability(s) covered under the security model. 
   - **Tags**: The tags are for the classification of vulnerability(s). for e.g, OWASP Top#2 can be a tag for the security model that covers OWASP top 2 vulnerability.
   - **Vulnerability Scoring System**: The default is the CVSS 3.1 but you can also define a custom scoring scale. 
   - **Est. Time to Fix(hours)**: The time required for fixing the vulnerability(s).
   - **Est. Bounty Value**: The bounty offered by different programs for such vulnerability(s).
   - **Auth**: By default it is "Default". But, you can use the name declared in the environment variables. 
   - **Beta Toggle**: If this security model is a beta version then turn on. 
   - **Skip Filing Vulnerability Toggle**:  If off then it prevents from filing the vulnerability after the scan. If the vulnerability is detected it will not be filed (recorded) in the results. 
   - **Scope**: The scope for a custom security model is private and it is visible to the enterprise user only.
 
 <img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166119704-061d4b3c-0234-4bbf-904e-c7b5b50120e1.png"/>
<br>
3. `click` 'Build and Launch' to make it ready for use during the Scan.
    
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166119708-5d3ada1e-4701-418b-89df-082aba0b8a7c.png"/>