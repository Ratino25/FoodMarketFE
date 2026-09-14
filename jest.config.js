module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/__mocks__/svgMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@react-navigation|@react-native|react-native)',
  ],
};
