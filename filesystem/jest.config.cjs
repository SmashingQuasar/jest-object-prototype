// jest.config.js
module.exports = {
  rootDir: '.',
  // preset: 'ts-jest/presets/js-with-ts-esm',
  moduleFileExtensions: ['ts', 'js', 'node', 'json'],
  transform: {
    '^.+\\.ts$': 'babel-jest',
    // '^.+\\.ts$': '@swc/jest',
  },
  // globals: {
  //   'ts-jest': {
  //     tsconfig: '<rootDir>/tsconfig.jest.json',
  //     useESM: true,
  //   },
  // },
  moduleNameMapper: {
    '(.+)\\.js': '$1',
    // '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  // extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/__tests__/**/*.{spec,test}.(ts|js)'],
  coveragePathIgnorePatterns: ['.nocov.ts'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/test_data', '<rootDir>/__tests__/e2e'],
};
