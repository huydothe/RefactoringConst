const ADDITION = '+';

const SUBTRACTION = '-';

const MULTIPLICATION = '*';

const DIVISION = '/';

export class Calculator {
    public static calculate(firstOperand: number, secondOperand: number, Operator: string): number {
        switch (Operator) {
            case ADDITION:
                return firstOperand + secondOperand;
            case SUBTRACTION:
                return firstOperand - secondOperand;
            case MULTIPLICATION:
                return firstOperand * secondOperand;
            case DIVISION:
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    }
}