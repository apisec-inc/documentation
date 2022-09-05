**Netbanking Application Installation Guide Table of Contents**

Section 1:  Introduction

Section 1.1: purposes

Section 1.2: scope             Section 2: Installation Manual

Section 2.1: Prerequisite![](Aspose.Words.d2e433c1-eac9-4390-87e7-7f53662f9515.001.png)

Section 2.2: Installation Procedure Section 2.3: Post installation

**1 Introduction![](Aspose.Words.d2e433c1-eac9-4390-87e7-7f53662f9515.002.png)**

1. ***Purpose***

The objective of this document is to setup Netbanking application on a plane Docker-Swarm  cluster![](Aspose.Words.d2e433c1-eac9-4390-87e7-7f53662f9515.001.png)

2. ***Scope:***

This document is intended for the purpose of executing a “***fx-nb-installer.sh***” script which will deploy a Net-Banking application in an on-prem Docker-Swarm cluster.

**2 Installation Manual**

1. ***Prerequisites***

To install Net-Banking API specs Application, the following list of prerequisites are required to be fulfilled before running the installer “***fx-nb-installer.sh***” script.

Prerequisites are:

- One Ubuntu 20.04 LTS (64-bit) based VM for Deploying Netbanking Application. VM Configuration:

CPUs: 4 Cores

Memory: 16GB Ram

Disk: 100GB

- Ports: 8080
2. ***Installation Procedure***

Once all prerequisite checks and prerequisite tasks are finished, the execution of script can be initiated.

- Cloned APIsec ***On-Prem*** repository
- git clone https://github.com/apisec-inc/On-Prem.git
- Go inside the On-Prem/Netbanking
- cd On-Prem/Netbanking
- Change the permissions of “***fx-nb-installer.sh***” if required
- sudo chmod a+x **fx-nb-installer.sh**
- Execute the script
- bash **fx-nb-installer.sh --username “<docker-hub-username>” --password “<docker-hub-password>”**
3. ***Post-Installation***
- Once the script execution and the deployment are finished run below ‘docker’ commands to check deployment status.
- sudo docker ps![](Aspose.Words.d2e433c1-eac9-4390-87e7-7f53662f9515.001.png)
- sudo docker service ls
- sudo docker stack services netbanking
- sudo docker stack ps netbanking

Once script execution finishes and installation is done, Netbanking Application and its API specs can be at the following links.

- Netbanking application: http://<Private-IP/Public-IP>:8080 Expected OutPut Screenshot:![](Aspose.Words.d2e433c1-eac9-4390-87e7-7f53662f9515.003.jpeg)
- Netbanking APP API specs: http://<Private-IP/Public-IP>:8080/v2/api-docs

Expected OutPut Screenshot:![](Aspose.Words.d2e433c1-eac9-4390-87e7-7f53662f9515.004.jpeg)

***Note 1:-  You will have to enable/open port 8080 for the inbound request to access the application in the browser.![](Aspose.Words.d2e433c1-eac9-4390-87e7-7f53662f9515.001.png)***

***Note 2:- Once fx-nb-installer.sh script execution finishes following user accounts and orgs will be created in the postgres database.***

***Enterprise Admin:***

*email: user1@netbanking.io  password: admin123$ name: Netbanking UserA*

*email: user6@netbanking.io  password: admin123$ name: Netbanking ROLE\_ADMIN email: user11@netbanking.io password: admin123$ name: Netbanking ADMIN1 email: user12@netbanking.io password: admin123$ name: Netbanking ADMIN2*

***Org\_users:***

*email: user2@netbanking.io password: admin123$ name: Netbanking UserB*

*email: user3@netbanking.io password: admin123$ name: Netbanking UserC*

*email: user4@netbanking.io password: admin123$ name: Netbanking ROLE\_USER email: user5@netbanking.io password: admin123$ name: Netbanking ROLE\_PM*

*email: user7@netbanking.io password: admin123$ name: Netbanking ROLE\_BANK\_ACCOUNTANT ![](Aspose.Words.d2e433c1-eac9-4390-87e7-7f53662f9515.001.png)email: user8@netbanking.io password: admin123$ name: Netbanking ROLE\_BANK\_MANAGER*

***Note 3:- You can use the below credentials setting while registering a project using this API SPEC application so that project connects with the application, by clicking on “Advanced Section”.***

***That helps in verifying log4j assertions and others as well.***

*Default||Basic||user1@netbanking.io||admin123$ UserA||Basic||user1@netbanking.io||admin123$ UserB||Basic||user11@netbanking.io||admin123$ UserC||Basic||user12@netbanking.io||admin123$ ROLE\_USER||Basic||user11@netbanking.io||admin123$ ROLE\_PM||Basic||user12@netbanking.io||admin123$ ROLE\_ADMIN||Basic||<user6@netbanking.io>||admin123$*

**Conclusion**: Once you are able  to view Netbanking API Specs in the browser like in the above API specs screenshot, we can safely say **NetBanking API SPECs Application** installation was completed successfully and you can now register a project with APIsec product using this **API SPECs** application and run scans on them to find vulnerabilities.
