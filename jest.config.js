module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/reportWebVitals.js",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
};
