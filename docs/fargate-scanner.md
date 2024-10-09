# APIsec AWS Fargate


###### AWS Fargate<sup>TM</sup> - Amazon Elastic Container Service (ECS) - 


## APIsec AWS Fargate

!!! example "Deployment of APIsec Scanner in AWS Fargate"

	- Login into AWS Account.
	- Select Amazon Elastic Container Service (ECS).![ECS](https://user-images.githubusercontent.com/87167426/162345174-d3112e20-7ca4-4855-a154-69551c0c853d.png)

	- Select Clusters.
	- ![Clusters](https://user-images.githubusercontent.com/87167426/162345213-777c9d4a-cc16-43b9-91d6-a222b1f46cd0.png)

	- Create a New Cluster
	- Select "Networking Only" Option
	- Give Unique Cluster Name.![Config  Cluster](https://user-images.githubusercontent.com/87167426/162345261-2ab05963-816c-4195-a1d0-3b3b0d3c598c.png)

	- Skip VPC and CloudWatch option,Click on create 
	- Select View Cluster.
	- ![Cluster Created](https://user-images.githubusercontent.com/87167426/162345354-aaa3f2ed-82e5-4f6e-bcac-58edf558f862.png)

	- Task Definitions.
	- ![Task Def](https://user-images.githubusercontent.com/87167426/162345408-54b0bc0a-a0b3-433a-b64e-317c24ac6cd7.png)

	- Create a New Task Definition
	- Select 'FARGATE' Option.![Task Config](https://user-images.githubusercontent.com/87167426/162345462-dcd22115-9141-4725-9869-47433e35fdd5.png)

	- Followed by Next, Give Unique Name & Select the rest options as provided.![Task Congif1](https://user-images.githubusercontent.com/87167426/162345514-72e4f957-5e2f-4fe2-bede-cb02391f6906.png)

	- Add Container
	- Select atleast below mentioned CPU and Memory to run scans on playbooks smoothly.![Task Config2](https://user-images.githubusercontent.com/87167426/162345669-9ab488c1-00ab-408b-8c66-fa16bb9883cb.png)

	- Give Unique Container name, Image name(fxlabs/bot:latest).![Container](https://user-images.githubusercontent.com/87167426/162345825-a440e591-92e3-4995-bcbb-6686bf232224.png)

	- Skip all options & proceed on “Environment variables” section to add scanner parameters from scanner created page of APIsec Product.![Env Variables](https://user-images.githubusercontent.com/87167426/162345897-ea592132-6c5d-4cad-b01b-2acea3237794.png)
	- Optional :- Log configuration. 
	- Add Container.
	- Click on Create.
	- ![APIsec Launched](https://user-images.githubusercontent.com/87167426/162345987-545c4af8-488d-41d5-a009-4ca29146ad11.png)

	- Redirect to home page, then Click on Newly Created Cluster.
	![Cluster Created1](https://user-images.githubusercontent.com/87167426/162346031-af4c2521-7e20-41ef-999c-e7b859e2c250.png)

	- CREATE A NEW RUN TASK
	- Click on Task and then click on RUN NEW TASK.
	![Run Task](https://user-images.githubusercontent.com/87167426/162346258-67231593-2357-4243-a623-b50b2f6feaa9.png)

	- Select FARGATE as Launch type and select all required options as provided.![Task config](https://user-images.githubusercontent.com/87167426/162346366-043f4f75-53e2-4ef1-88d0-c9ac64b80dc7.png)
	![Task config1](https://user-images.githubusercontent.com/87167426/162346486-30d64474-967c-4f51-81d1-acef7a699eaf.png)
	
	Note : If above Auto-assign public IP is selected as disable, the container will be in stop state.

	- On Container Override Expand to see Cluster with Env created and then click on RUN TASK, wait for 2minutes.![Task created](https://user-images.githubusercontent.com/87167426/162346663-d6903b70-df73-4099-a3cb-10afcc8e8ace.png)
	- Click on Task to see information and its resources.
	![Task 1](https://user-images.githubusercontent.com/87167426/162346764-c10f3c74-901b-442c-aa6a-16dc0e175568.png)
	- Click on "Check Status" of the Created Scanner in Scanner page of APIsec product.
	![Status](https://user-images.githubusercontent.com/87167426/162346854-820d821c-3695-44df-8b02-8f864311c015.png)

	- Now you can run scans on the PLAYBOOKS in projects.
	- Cluster and Container Details :
	![Details](https://user-images.githubusercontent.com/87167426/162346898-058a199c-1ffe-4ae0-9bb7-8eada179695e.png)
	![image1](https://user-images.githubusercontent.com/113323378/199402484-bfba5b8b-dd7e-499a-930c-60b89ffebbec.png)



!!! info "Note"
	
	- If Auto-assign public IP is selected as disable, the container will be in stop state.
	- To Delete cluster, first you need to stop the TASK.
	- If you are behind firewall/vpn, then you will have to whitelist cloud.apisec.ai IP (104.196.107.163) and port 5671 on the outbound request for the scanner to connect with the APIsec server.
