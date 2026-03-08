# ZaraChallenge

Custom project in React made a technical preview for Napptilus.

## Index

- [Dependencies](#dependencies)
- [Getting Started](#getting-started)

## Dependencies

In the FrontEnd, apart from the basic libraries of **react** and **react-dom**, this application uses the following dependencies:

- **react-router-dom**: Library for managing application navigation and routing.

- **react-infinite-scroll-component**: Component that implements infinite scrolling, automatically loading more content when the user reaches the bottom of the page.

In the Backend, apart from the core **Node.js** runtime, this application uses the following dependencies:

- **express**: Framework for building API, providing routing, middleware support, and HTTP utilities.

- **cors**: Middleware to enable Cross-Origin Resource Sharing, allowing the API to securely handle requests from front-end clients hosted on different domains.

- **dotenv**: Module for loading environment variables from a .env file, making configuration management simple and secure.

- **node-fetch**: Library for making HTTP requests from Node.js, similar to the fetch API in browsers.

## Getting Started

Once you have cloned the repository, follow these steps to set up and run the project:

1. **Configure environment variables**  
   Copy the variables from `.env.example` into a `.env` file for each project (frontend and backend) and adjust them as needed.

2. **Install dependencies**  
   Navigate to each project folder and run:

```bash
npm install
```

3. **Run both services**
   After installing dependencies for both frontend and backend, start both services simultaneously from the frontend folder by running:

```bash
npm run dev:all
```

This command will launch both the backend API and the frontend application.
