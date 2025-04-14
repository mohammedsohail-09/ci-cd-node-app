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

![Screenshot 2025-04-07 184508](https://github.com/user-attachments/assets/a5693f56-0448-4bfd-9c93-b31890505e3f)

![Screenshot 2025-04-07 190642](https://github.com/user-attachments/assets/d7bc3bc3-d479-4d65-9979-47967a7925e6)

![Screenshot 2025-04-07 190944](https://github.com/user-attachments/assets/f46c1048-6288-4fba-a884-202be208ba7b)


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

![Screenshot 2025-04-07 192610](https://github.com/user-attachments/assets/70287bae-d3fc-48c4-bedd-7d941d5b0ad0)

![Screenshot 2025-04-07 194139](https://github.com/user-attachments/assets/3fbc5eed-afd7-41e8-8648-cabf219e4871)

![Screenshot 2025-04-07 194157](https://github.com/user-attachments/assets/b31633c7-680a-4197-b2cd-babc3b2e7811)

![Screenshot 2025-04-07 194312](https://github.com/user-attachments/assets/c306f9bf-8641-4570-bf4d-1f8f55a9715d)

![Screenshot 2025-04-07 194623](https://github.com/user-attachments/assets/b8b0c6de-ce4c-44bb-9874-c376a03bb071)





