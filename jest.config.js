/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom", // Required for testing React components
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Support for absolute imports (@/*)
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Transform JS, JSX, TS, TSX
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Setup for additional configs (if needed)
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Allowed file extensions
};

module.exports = config;