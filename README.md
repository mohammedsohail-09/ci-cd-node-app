# 🚀 CI/CD Node.js App with GitHub Actions & Docker

This project demonstrates a simple Node.js web application that is containerized using Docker and deployed automatically using GitHub Actions.

## 📦 Tech Stack

- **Node.js**
- **Docker**
- **GitHub Actions (CI/CD)**

---

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mohammedsohail-09/ci-cd-node-app.git
cd ci-cd-node-app

### 2. Initialize Node App

npm init -y

### 3. Create index.js

// index.js
console.log("Hello from CI/CD Node App!");

📁 Project Structure

ci-cd-node-app/
│
├── index.js
├── package.json
├── Dockerfile
└── .github/
    └── workflows/
        └── deploy.yml

🐳 Docker Setup
Create Dockerfile in root:

# Use Node.js base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Run the app
CMD ["node", "index.js"]

Build Docker Image:

docker build -t my-node-app .

Run Docker Container:

docker run my-node-app

✍️ Workflow File (deploy.yml):

name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run app
        run: node index.js






