# Star Wars Encyclopedia

This project is a Star Wars Encyclopedia, created as part of the Monthly App Challenge for February 2022 by [mouredev](https://github.com/mouredev/Monthly-App-Challenge-2022?tab=readme-ov-file#febrero-030222). The application fetches data from the Star Wars API and displays information about various characters from the Star Wars universe.

## Description

The Star Wars Encyclopedia is a React application that allows users to browse through a list of Star Wars characters. The data is fetched from the Star Wars API (SWAPI). The application includes pagination to navigate through the list of characters, and each character's details are displayed in a table format.

## Features

- Fetch and display a list of Star Wars characters.
- Pagination to navigate through different pages of characters.
- Display character details including name, height, mass, hair color, skin color, eye color, birth year, and gender.
- Responsive design with a loading indicator.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [yarn](https://yarnpkg.com/) (v1.22 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/star-wars-encyclopedia.git
   cd star-wars-encyclopedia
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the application, run the following command:

```bash
npm start
# or
yarn start
```

This will start the development server and open the application in your default web browser. If it does not open automatically, navigate to `http://localhost:3000` in your browser.

### Project Structure

- `src`: Contains the source code of the application.
  - `components`: Contains the React components used in the application.
  - `services`: Contains the service files for API calls.
  - `styles`: Contains the CSS files for styling the application.
  - `App.tsx`: The main application component.
  - `index.tsx`: The entry point of the application.

### Available Scripts

In the project directory, you can run:

- `npm start` or `yarn start`: Runs the app in development mode.
- `npm test` or `yarn test`: Launches the test runner.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm run eject` or `yarn eject`: Ejects the create-react-app configuration.

## Acknowledgments

- [mouredev](https://github.com/mouredev) for creating the Monthly App Challenge.
- [Star Wars API](https://swapi.dev/) for providing the data.

---

Feel free to modify this README to suit your specific project details and setup.
