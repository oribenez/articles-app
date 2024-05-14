# Article Management Application

This project is an Article Management Application built using TypeScript, React, Node.js, Express, and Swagger. It allows users to perform CRUD (Create, Read, Update, Delete) operations on articles, along with managing categories and tags associated with the articles.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Technologies Used](#technologies-used)

## Features

- **Create**: Add new articles with details including title, description, body, and associated categories/tags.
- **Read**: View detailed information about existing articles, including their categories and tags.
- **Update**: Modify existing articles' details such as title, description, and body.
- **Delete**: Remove articles from the database.
- **Get All Articles**: Retrieve a list of all articles stored in the database.
- **Manage Categories**: Create, read, update, and delete categories for better organization.
- **Manage Tags**: Create, read, update, and delete tags to categorize articles effectively.

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
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/68551995-557c-4705-983b-1316e056a5fb">
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/06fb39bf-c050-4a71-9860-029d084b3f9b">
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/9c32d03c-411d-4e77-92cc-26b91a06dc8e">
<img width="500" alt="image" src="https://github.com/oribenez/articles-app/assets/15029502/323f0ab8-4ac5-4c88-9675-ac37ea00e487">

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
