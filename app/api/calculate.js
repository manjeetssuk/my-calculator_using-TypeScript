// pages/api/calculate.js
import { calculate } from '../../calculator';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { num1, num2 } = req.body;
    const result = calculate(num1, num2);
    res.status(200).json({ result });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

