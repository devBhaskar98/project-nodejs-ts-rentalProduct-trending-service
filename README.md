# Trending News CRUD API 😊

This is a Trending News CRUD API built with Node.js and TypeScript. It provides a robust backend solution for managing trending news articles,
utilizing PostgreSQL to store data in a dedicated table. This boilerplate project includes all the necessary setup, including CRUD operations,
routing, error handling for not found resources, and unit testing with Jest.

## Technologies Used

-   **Node.js**: JavaScript runtime for building server-side applications.
-   **TypeScript**: Adds static types to JavaScript for improved code quality.
-   **Express**: Minimalist web framework for Node.js.
-   **Jest**: Testing framework for JavaScript.
-   **PostgreSQL** (if applicable): Object-relational database system.

### Project Structure

plaintext

```
/src
  ├── config
  ├── controllers
  ├── middlewares
  ├── repositories
  ├── routes
  ├── index.ts
/test
```

## Getting Started

Follow these instructions to set up your project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
    -   Node v18.17.0 used in this project
-   [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) or [npm](https://docs.npmjs.com/getting-started/installing-npm)
-   PostgreSQL (if applicable)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/devBhaskar98/project-nodejs-rentalProduct-trending-service
    cd project-nodejs-rentalProduct-trending-service
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add your configuration:

    ```bash
    SERVER_HOSTNAME=your_localhost
    SERVER_PORT=server_port

    DB_HOST=your_db_host
    DB_PORT=your_db_port
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    ```

## Running the Application

To run the application in development mode, use:

```bash
npm run start
# or
yarn start
```

## Testing

To run tests using Jest, use:

```bash
npm test
# or
yarn test
```

## Features

    CRUD Operations: Create, Read, Update, and Delete news articles.
    Routing: Organized routes for handling requests.
    Error Handling: Middleware for handling not found errors.
    Unit Testing: Tests written with Jest to ensure code reliability.

---

### Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature/YourFeature).
    Make your changes and commit them (git commit -m 'Add some feature').
    Push to the branch (git push origin feature/YourFeature).
    Open a pull request.

### License

This project is licensed under the Tor Production 😊 License.
