
# Dashboard with Widget Search Feature

This project is a React-based dashboard with dynamic widgets and a search functionality to filter widgets. It uses Redux for state management and Recharts for data visualization (donut-pie charts). You can add or delete categories and widgets, with real-time updates to the dashboard.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Search Functionality](#search-functionality)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)

## Features

- Dynamic dashboard for managing categories and widgets.
- Donut-pie chart visualization for widget data.
- Search bar to filter and display widgets based on their name.
- Redux-based state management.

## Prerequisites

To run this project, you need to have **Node.js** and **npm** installed on your local machine.

- [Download Node.js](https://nodejs.org/) (which includes npm).
- Verify the installation:
  ```bash
  node -v
  npm -v
  ```

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
   Replace `<repository-url>` with the actual URL of this repository.

2. Navigate into the project directory:
   ```bash
   cd my-app
   ```

3. Install all necessary dependencies:
   ```bash
   npm install
   ```

## Running the Project

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

This will launch the app in your default browser at [http://localhost:3000](http://localhost:3000). The app will automatically reload if you make changes to the code.

## Search Functionality

- A search bar is implemented to filter and display widgets based on their name.
- Start typing in the search bar, and the widgets that match the search term will appear in the results.

## Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production, optimizing the build for best performance.

### `npm run eject`

If you need to customize the build configuration, run this command to eject the configuration files. **Note:** This action is irreversible.

## Troubleshooting

### Port Already in Use
If the default port `3000` is occupied, you'll be asked if you'd like to use another port. You can also specify a different port manually:
```bash
PORT=4000 npm start
```

### Missing Dependencies
If you encounter issues with missing modules, ensure all dependencies are installed by running:
```bash
npm install
```



