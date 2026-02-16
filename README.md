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
npx json-server -p 3001 db-copy.json
```

The server will use the `db.json` file as its database.

## Running Postman collection with newman

```bash
newman run postman/postman/collections/json-server-testing.postman_collection.json -g postman/postman/globals/workspace.postman_globals.json
```

## Playwright Testing Suite

The `playwright-ts` folder contains a comprehensive API testing framework built with Playwright and TypeScript. This suite provides automated testing capabilities for all CRUD operations on the JSON Server endpoints.

### Test Architecture

- **Test Organization**: Tests are structured in the `tests/api/` directory, organized by HTTP method (GET, POST, PUT, PATCH, DELETE)
- **Fixtures**: Custom fixtures in `fixtures/missions.ts` provide reusable test setup and teardown functionality
- **Configuration**: `playwright.config.ts` defines test execution parameters, base URL, timeouts, and reporting
- **Reporting**: HTML reports generated in `test-reports/html/` with trace retention on failures

### Test Coverage

The test suite covers:

- **GET operations**: Retrieve all characters, individual character by ID, filtering by query parameters
- **POST operations**: Create new missions with complete data validation
- **PUT/PATCH operations**: Update existing missions (full and partial updates)
- **DELETE operations**: Remove missions with proper cleanup verification

### Playwright Project Setup

Navigate to the Playwright directory and install dependencies:

```bash
cd playwright-ts
npm install
npx playwright install
```

### Running Playwright Tests

Execute the complete test suite:

```bash
npm test
```

Run specific test files:

```bash
npx playwright test get.spec.ts
npx playwright test post.spec.ts
```

View HTML reports after test execution:

```bash
npx playwright show-report
```

## Local Development Setup

The `local-setup.ps1` PowerShell script provides automated server initialization. It creates a working copy of the database (`db-copy.json`) and starts the JSON Server on port 3001. This approach preserves the original database file while allowing tests to perform destructive operations on the copy.

### Script Features:

- Database backup creation before server startup
- Automatic port configuration (3001)
- Error handling for missing database files
- Clear console feedback during execution

Execute the setup script:

```powershell
.\local-setup.ps1
```

## Tools Used

- **json-server**: REST API server with full CRUD operations
- **Postman**: Manual API testing and collection management
- **Playwright**: TypeScript-based automation framework for API testing
- **Newman**: Postman collection runner for CI/CD integration
- **GitHub Actions**: Automated workflow execution and testing pipelines

## Command Reference

### Start JSON Server

```bash
npx json-server -p 3001 db-copy.json
```

### Execute Postman Collection

```bash
newman run postman/postman/collections/json-server-testing.postman_collection.json -g postman/postman/globals/workspace.postman_globals.json
```

### Run Playwright Tests

```bash
cd playwright-ts
npm test
```

### View Playwright Reports

```bash
cd playwright-ts
npx playwright show-report
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
