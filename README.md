# Vaani Goyal (2201AI41) Assignment

## Overview
This project is a full-stack web application that processes URLs to extract frequently occurring words. The application sends user-provided input from the frontend to the backend, where it is parsed, processed by a Python script, and returns the top frequent words. The results are then displayed on the frontend.

## Prerequisites
- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **Python** (version 3.x): Download and install from [Python official website](https://www.python.org/).  
  Ensure Python is added to your system's PATH.

## Getting Started
### 1. Clone the repository
```bash
git clone [https://github.com/VaaniGoyal/VaaniGoyal_Assignment.git]
cd VaaniGoyal_Assignment
```

### 2. Install dependencies
#### Frontend
In your project directory, run the following to install the required libraries:
```bash
npm install
npm install react-router-dom
```
#### Backend
To run the backend, navigate to server directory and run the following to install the required libraries:
```bash
cd server
npm install cors
npm init -y
npm install express body-parser path
```
#### Python
To run python scripts, install the given dependencies, using:
```bash
pip install requests beautifulsoup4
```

### 3. Running the Application
#### Backend
To start the backend, run the following: 
```bash
cd server
node server.js
```
#### Frontend
To start the frontend, open another terminal and run:
```bash
npm start
```

## Project Structure
```
- server/            # Backend codebase
  - controller.js       # Controller to handle backend logic
  - process_input.py    # Python script for content processing
  - routes.js           # API route
  - server.js/          # main server file
- src/              # Frontend codebase
```

## Usage
1. Visit the Input Page to submit a URL and the number of frequent words to retrieve.
2. The backend processes the input, and results are displayed on the frontend.

## Features
- URL parsing to ensure compatibility in content processing.
- Full-stack integration with Python backend for content analysis.
- Universal navigation buttons across all pages, including a smooth scroll to sections on click.

## Contributing
1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

