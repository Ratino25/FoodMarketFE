/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
jest.mock('../src/router', () => function RouterMock() {
  const { View } = require('react-native');
  return <View />;
});
jest.mock('react-native', () => {
  const React = require('react');

  return {
    View: 'View',
    Text: ({ children }: { children?: React.ReactNode }) => React.createElement('Text', null, children),
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
import NumberComponent from '../src/components/molecules/Number';

test('loads the root app component', () => {
  expect(App).toBeTruthy();
});

test('renders number component without recursion', () => {
  let tree: renderer.ReactTestRenderer;
  renderer.act(() => {
    tree = renderer.create(<NumberComponent number={15000} />);
  });

  expect(tree).toBeTruthy();
  expect(tree!.toJSON()).toBeTruthy();
});
