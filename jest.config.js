module.exports = {
  roots: ["<rootDir>/test", "<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.tsx", "!<rootDir>/**/ports/*.tsx"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.tsx$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1",
  },
  preset: "@shelf/jest-mongodb",
  setupFiles: ["dotenv/config"],
};
