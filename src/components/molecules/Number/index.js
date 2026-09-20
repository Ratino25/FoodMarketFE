
import React from 'react';
import { Text } from 'react-native';

const Number = ({ number, type }) => {
  const parsedNumber = globalThis.Number(number ?? 0);

  if (globalThis.Number.isNaN(parsedNumber)) {
    return <Text>0</Text>;
  }

  if (type === 'decimal') {
    const value = new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(parsedNumber);

    return <Text>{value}</Text>;
  }

  const value = new Intl.NumberFormat('id-ID').format(parsedNumber);
  return <Text>IDR {value}</Text>;
};

export default Number;
