<p align="center">
  <img width="100px" src="https://cdn-icons-png.flaticon.com/512/564/564429.png" align="center" alt="Calculate GitHub Readme Stats Score" />
  <h2 align="center">Express.js Calculator</h2>
  <p align="center">CI/CD Pipeline with GitHub Actions and Automated Tests</p>
</p>


## Built With

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,js,jest,html,github)](https://skillicons.dev)    
    

## 🪐 Overview

This is a project for a simple Express.js application that calculates the sum of two numbers, containing unit tests and a CI/CD pipeline that runs every time the main branch is pushed.


## 🛠️ Configuration

1. Clone the repository:

```bash
git clone https://github.com/cnjaqueline/ci-cd-pipeline-coursework.git
```
2. Install the dependencies:
```bash
npm install
```
## ⚙ Running the Application

1. Navigate to the source code directory:
```bash
cd src
```

2. To start the server, run:
```bash
node app.js
```

The application will be available at http://localhost:3000.

## 📦Running the Tests

To run the tests, use the command:
```bash
npm test
```

## CI/CD Pipeline

The project includes a GitHub Actions workflow that performs the following steps:

1. Checks out the repository.
2. Sets up a Node.js environment.
3. Installs the project's dependencies.
4. Builds the project.
5. Runs the project's tests.
6. Deploys the project (you need to replace the deploy script with your actual deployment script).

This workflow is triggered whenever there's a **push** to the **main** branch.


## 📜Development
This repository is a project of the DEVOPS PRACTICE CULTURE discipline of the POSTGRADUATE QUALITY ENGINEERING AND SOFTWARE TESTING course at PUC Minas, class 1 of 2024, created by Jaqueline Constantino.