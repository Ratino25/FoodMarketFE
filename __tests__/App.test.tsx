/**
 * @format
 */

import React from 'react';
jest.mock('../src/router', () => function RouterMock() {
  const { View } = require('react-native');
  return <View />;
});
jest.mock('react-native', () => {
  return {
    View: 'View',
    StatusBar: 'StatusBar',
    StyleSheet: { create: (styles: object) => styles },
    useColorScheme: () => 'light',
  };
});

jest.mock('react-native-flash-message', () => function FlashMessageMock() {
  const { View } = require('react-native');
  return <View />;
});

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => {
    const { View } = require('react-native');
    return <View>{children}</View>;
  },
}));

jest.mock('react-redux', () => ({
  Provider: ({ children }: { children: React.ReactNode }) => children,
}));

import App from '../App';

test('loads the root app component', () => {
  expect(App).toBeTruthy();
});
