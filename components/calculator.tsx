// components/Calculator.js
'use client'

import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState('');

  const handleCalculate = async () => {
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1: parseFloat(num1), num2: parseFloat(num2) }),
    });
    const data = await response.json();
    setTotal(data.result);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Calculator</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Number #1</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Number #2</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Total</label>
        <input
          type="number"
          value={total}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Calculate
      </button>
    </div>
  );
}