import { useState } from 'react';

export default function useCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const getValues = () => {
    return [parseFloat(num1) || 0, parseFloat(num2) || 0];
  };

  const add = () => {
    const [a, b] = getValues();
    setResult(a + b);
  };

  const subtract = () => {
    const [a, b] = getValues();
    setResult(a - b);
  };

  const multiply = () => {
    const [a, b] = getValues();
    setResult(a * b);
  };

  const divide = () => {
    const [a, b] = getValues();
    if (b === 0) {
      setResult('Err');
    } else {
      setResult(a / b);
    }
  };

  const power = () => {
    const [a, b] = getValues();
    let res = 1;
    for (let i = 0; i < b; i++) {
      res *= a;
    }
    setResult(res);
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return {
    num1,
    setNum1,
    num2,
    setNum2,
    result,
    add,
    subtract,
    multiply,
    divide,
    power,
    clear
  };
}
