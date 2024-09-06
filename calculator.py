# calculator.py
import sys

def calculate(num1: float, num2: float) -> float:
    return num1 * num2

if __name__ == "__main__":
    num1 = float(sys.argv[1])
    num2 = float(sys.argv[2])
    result = calculate(num1, num2)
    print(result)