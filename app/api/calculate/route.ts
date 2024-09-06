// app/api/calculate/route.js
import { PythonShell } from 'python-shell';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { num1, num2 } = await request.json();

  try {
    const results = await PythonShell.run('calculator.py', {
      mode: 'text',
      pythonOptions: ['-u'],
      args: [num1, num2]
    });
    
    const result = parseFloat(results[0]);
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while calculating' }, { status: 500 });
  }
}