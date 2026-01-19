# JSON Server Testing

This project is designed to practice working with REST APIs by performing CRUD operations on a `json-server`. The requests will be executed using **Postman** and **Playwright TypeScript**. The repository is also configured to run automated workflows using **GitHub Actions**.

## Project Purpose

The main goal of this project is to:

1. Learn and practice CRUD operations (Create, Read, Update, Delete) on a REST API.
2. Use **Postman** to manually test API endpoints.
3. Automate API testing using **Playwright** with TypeScript.
4. Integrate the project with **GitHub Actions** to automate testing and ensure continuous integration.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js**: Check the version with `node -v`.
- **npm**: Check the version with `npm -v`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tobhash/json-server-testing.git
   cd json-server-testing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the JSON Server

To start the `json-server` on port `3001`, run the following command:

```bash
npx json-server -p 3001 db.json
```

The server will use the `db.json` file as its database.

## Tools Used

- **json-server**: A lightweight tool to create a REST API quickly.
- **Postman**: For manual testing of API endpoints.
- **Playwright**: For automating API tests using TypeScript.
- **GitHub Actions**: For automating workflows and running tests.

## How to Use Postman in VS Code

You can use the **Postman** extension in Visual Studio Code to test your API endpoints directly within the IDE.

## Future Enhancements

- Add detailed Playwright test scripts for CRUD operations.
- Configure GitHub Actions to run Playwright tests automatically.
- Extend the `db.json` file with sample data for testing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
