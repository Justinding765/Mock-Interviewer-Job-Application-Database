# Mock Interviewer/Job Application Database
Mock Interviewer and Job Application Database is a versatile web application built using the MERN stack to help job seekers master their interviewing skills and manage their job application process. The platform integrates AI-powered features to create a seamless and efficient experience for users, making it easier for them to prepare for interviews, maintain their job applications, and navigate the competitive job market. With Mock Interviewer and Job Application Database, users can not only practice and analyze their performance in mock interviews, but also effectively organize and manage their job applications, ensuring that they stay on top of every opportunity that comes their way.

## Deployment
1. Create a .env folder in the root of the project with contents: PORT=5000, Mongo_URI<YOUR_KEY>, OPEN_AI_KEY=<YOUR_KEY>
### Docker
1. Run ```docker compose up --build```
2. Access web application on **http://localhost:3000/**
### Kubernetes
1. Run ``` kubectl apply -f .``` in the Kubernetes-app-deployment folder inside the project
2. Run ```kubectl create configmap my-config --from-env-file=../.env``` to add a configmap
3. Access web application on **http://localhost:31534/**
## Features
### Mock Interviewer
Practice your interview skills with our mock interview feature! Use our AI powered Interview Generator to Generate your own custom Interview. The User can then conduct their interview with Text-to-Speech that acts as the Interviewer and record their interview. At the end the User can save their recording to their very own media gallery!
![image](https://user-images.githubusercontent.com/56009508/227400597-5d17f7b9-81b9-4378-94ae-5e4d80a2eef6.png)

![image](https://user-images.githubusercontent.com/56009508/227400793-9f99cc9e-a5ca-415e-8029-00d1194b5f2c.png)

![image](https://user-images.githubusercontent.com/56009508/227400867-917ce046-7af2-44f6-bc0c-77a42c0954c4.png)

### Media Gallery
![image](https://user-images.githubusercontent.com/56009508/227401737-3fdcf883-daad-48fd-ac38-2a26317fc21a.png)

![image](https://user-images.githubusercontent.com/56009508/227401783-324ed186-65b4-4e9b-aec2-2b9b2793f20f.png)
### Application Database
![image](https://user-images.githubusercontent.com/56009508/227402275-f3b2f579-7438-49ab-83d7-cd5d6bd38def.png)

![image](https://user-images.githubusercontent.com/56009508/227402509-530d38a6-4be9-4efe-8485-b0c50ea32292.png)


## Prerequisites and Dependencies

- Node.js
- MongoDB
- Express.js
- React.js
- npm or yarn
- Must also have OpenAI authentication key
- Docker Desktop
- Kubernetes
