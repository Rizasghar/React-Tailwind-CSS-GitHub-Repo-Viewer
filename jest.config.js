module.exports = {
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: "jsdom",
    setupFiles: ['./jest.setup.js']
  };
  