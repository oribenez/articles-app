# Article Management Application

This project is an Article Management Application built using TypeScript, React, Node.js, Express, and Swagger. It allows users to perform CRUD (Create, Read, Update, Delete) operations on articles, along with managing categories and tags associated with the articles.

## Demo
https://drive.google.com/file/d/1ng5eKmF7YfDy5VobIoUdJscI35IecX5R/view?usp=sharing

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Technologies Used](#technologies-used)

## Features
- **Manage Articles**: All CRUD operations.
- **Manage Categories**: All CRUD operations.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/oribenez/articles-app.git
```

2. Navigate to the project directory:

```bash
cd article-app
```

3. Install dependencies for both client and server:

```bash
cd front
npm i
cd ../back
npm i
```

## Usage

1. Start the server:

```bash
cd back
npm run dev
```

2. Start the client application:

```bash
cd front
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## API Documentation

The API documentation is generated using Swagger. Once the server is running, you can access the Swagger UI at `http://localhost:8000/api-docs` to explore and interact with the API endpoints.

## Technologies Used

- **TypeScript**: Utilized for both frontend and backend development for static typing and improved code maintainability.
- **React**: Used for building the frontend user interface, providing a dynamic and responsive user experience.
- **Node.js**: Used as the runtime environment for the server-side application.
- **Express**: Utilized as the web framework for handling HTTP requests and routing.
- **Swagger**: Used for API documentation to ensure clarity and ease of use for developers.
- **MongoDB**: A NoSQL database used for storing articles, categories, and tags.

## Articles
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/dff64893-3406-438e-a9a1-26a0eecd723f">
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/c18fa0db-18d1-40ad-8b4a-35c0cc49bac9">
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/a4421717-3c0f-4ac7-a4db-4ca2bbf6980b">
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/98a62d31-f976-468e-901e-ee7b044646a3">

## Swagger dashboard
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/9cd20e4e-57da-45f5-9ea8-671d257b4237">

## Original Assesment
1 - Create a schema for an Article:

Article: Id, Date, Title, Description, Body

Category: Id, Title, Description

Tag: Id, Title, Description

Category has many Articles

Article has many Tags

2 - Create CRUD API in Node.js with Swagger:

Create

Read

Update 

Delete

Get all Articles

3 - Create a React app to display and use the Node.js CRUD API
