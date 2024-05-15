// Interpreter: Define una representación para la gramática de un lenguaje.

class Context {
	public input: string;
	public output: number;

	constructor(input: string) {
		this.input = input;
		this.output = 0;
	}
}

interface Expression {
	interpret(context: Context): void;
}

class TerminalExpression implements Expression {
	public interpret(context: Context): void {
		if (context.input.includes("a")) {
			context.output += 1;
		}
	}
}

class NonTerminalExpression implements Expression {
	public interpret(context: Context): void {
		if (context.input.includes("b")) {
			context.output += 2;
		}
	}
}

const context = new Context("ab");
const expressions: Expression[] = [
	new TerminalExpression(),
	new NonTerminalExpression(),
];

expressions.forEach((expression) => expression.interpret(context));
console.log(context.output); // 3
