# How to setup and install Netbanking Application in Docker-Swarm Cluster!!!

### Prerequisites:-

1. Ubuntu 20.04 LTS (64-bit) based VM for Deploying  Netbanking Application. 
2. No. of  Nodes: 1  

              Node Configuration:
                   CPUs: 4 cores
                   Mem:  16 GB RAM
                   Disk: 100 GB                        
3. Ports:- 8080



### Installation Steps.
   
       git clone https://github.com/apisec-inc/On-Prem.git
    
       cd On-Prem/Netbanking
    
       sudo chmod a+x fx-nb-installer.sh
    
       bash fx-nb-installer.sh --username “<docker-hub-username>” --password “<docker-hub-password>”
       
       ## Once script execution finishes and installation is done, Netbanking Application and its API specs can be at the following links.
       
       ## Netbanking application: http://<Private-IP/Public-IP>:8080
       
       ## Netbanking APP API specs: http://<Private-IP/Public-IP>:8080/v2/api-docs
       
       ## Note 1:- You will have to enable/open port 8080 for the inbound request to access the application in the browser.
       
       ## Note 2:- Once fx-nb-installer.sh script execution finishes following org_users and enterprise admin accounts will be created in the postgres                      database.

                   Enterprise Admin:
                   email: user1@netbanking.io  password: admin123$ name: Netbanking UserA
                   email: user6@netbanking.io  password: admin123$ name: Netbanking ROLE_ADMIN
                   email: user11@netbanking.io password: admin123$ name: Netbanking ADMIN1
                   email: user12@netbanking.io password: admin123$ name: Netbanking ADMIN2

                   Org_users:
                   email: user2@netbanking.io password: admin123$ name: Netbanking UserB
                   email: user3@netbanking.io password: admin123$ name: Netbanking UserC
                   email: user4@netbanking.io password: admin123$ name: Netbanking ROLE_USER
                   email: user5@netbanking.io password: admin123$ name: Netbanking ROLE_PM
                   email: user7@netbanking.io password: admin123$ name: Netbanking ROLE_BANK_ACCOUNTANT
                   email: user8@netbanking.io password: admin123$ name: Netbanking ROLE_BANK_MANAGER
        
        ## Note 3:- You can use below credentials setting while registering a project using this API SPEC application so that project connects with the   application, by clicking on “Advanced Section”. 
                    That helps in verifying log4j assertions and others as well.

         
                     Default||Basic||user1@netbanking.io||admin123$
                     UserA||Basic||user1@netbanking.io||admin123$
                     UserB||Basic||user11@netbanking.io||admin123$
                     UserC||Basic||user12@netbanking.io||admin123$
                     ROLE_USER||Basic||user11@netbanking.io||admin123$
                     ROLE_PM||Basic||user12@netbanking.io||admin123$
                     ROLE_ADMIN||Basic||user6@netbanking.io||admin123$

       



