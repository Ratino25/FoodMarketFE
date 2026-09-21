
import React from 'react';
import { Text } from 'react-native';

const Number = ({ number, type, style }) => {
  const parsedNumber = globalThis.Number(number ?? 0);

  if (globalThis.Number.isNaN(parsedNumber)) {
    return <Text>0</Text>;
  }

  if (type === 'decimal') {
    const value = new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(parsedNumber);

    return <Text style={style} >{value}</Text>;
  }

  const value = new Intl.NumberFormat('id-ID').format(parsedNumber);
  return <Text style={style} >IDR {value}</Text>;
};

export default Number;
