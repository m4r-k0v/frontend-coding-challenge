# FE task setup

This guide will walk you through the steps to get the Vite React + TypeScript app running locally. Please follow these steps carefully to ensure all dependencies are correctly installed.

## Prerequisites

1. Make sure you have **Node.js** installed. If not, you can download it from [Node.js official website](https://nodejs.org/).
2. Ensure **npm** is available (it comes with Node.js).

## Steps to Start the App

### 1. Install Dependencies

First, you need to install the required dependencies for the app. Run the following command inside the app's root directory:

```bash
npm install
```

### 2. Start the Book Store API

A level above the app directory, there is a folder named `book-store-api`. This API is required in order to run the app properly. To start the Book Store API:

- Navigate to the `book-store-api` folder:

  ```bash
  cd ../book-store-api
  ```

- Install the dependencies for the API by running:

  ```bash
  npm install
  ```

- Start the API server:

  ```bash
  npm run start
  ```

### 3. Start the Vite App

After ensuring that the Book Store API is running, go back to the Vite React app directory and start the development server:

```bash
npm run dev
```

The app should now be accessible at [http://localhost:3000](http://localhost:3000) (or whatever port Vite specifies).

## Key Things to Note

- **Dependencies**: Ensure all dependencies are installed using `npm install` in both the Vite app and the `book-store-api`.
- **API Requirement**: The Book Store API must be running before starting the Vite app to ensure the data can be properly loaded.
- **Development Server**: Use `npm run dev` to start the development environment.

## Folder Structure Overview

- `fe-test/` - The main application folder containing the Vite React + TypeScript app.
  - `node_modules/` - Dependencies installed by npm.
  - `public/` - Static assets for the application.
  - `src/` - The source code for the application.
    - `assets/` - Images and other asset files.
    - `components/` - Reusable React components.
    - `hooks/rq/` - React Query hooks like `useGetStore.ts` for data fetching.
    - `providers/` - Context providers for managing global state.
    - `services/` - Any additional services, such as API functions.
    - `utility/` - Utility files for constants, helpers, and TypeScript types (`const.ts`, `helpers.ts`, `types.ts`).
  - `App.tsx` - Main application component.
  - `App.css` - Global CSS styles for the app.
  - `index.css` - Base CSS file.
  - `main.tsx` - Entry point of the React app.
  - `vite-env.d.ts` - Vite environment type definitions.
  - `index.html` - The HTML file used by Vite to mount the React app.
  - `eslint.config.js` - ESLint configuration for code quality.
  - `tsconfig.json` - TypeScript configuration.
  - `tsconfig.app.json` - Specific TypeScript configuration for the app.
  - `.gitignore` - Git ignore rules.
  - `package.json` - Project metadata and scripts.
  - `package-lock.json` - Locks the versions of the installed packages.

- `book-store-api/` - The API needed for backend data.

Feel free to modify the app as needed and enjoy coding!
