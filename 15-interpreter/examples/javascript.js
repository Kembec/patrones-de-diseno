// Interpreter: Define una representación para la gramática de un lenguaje.

class Context {
	constructor(input) {
		this.input = input;
		this.output = 0;
	}
}

class Expression {
	interpret(context) {}
}

class TerminalExpression extends Expression {
	interpret(context) {
		if (context.input.includes("a")) {
			context.output += 1;
		}
	}
}

class NonTerminalExpression extends Expression {
	interpret(context) {
		if (context.input.includes("b")) {
			context.output += 2;
		}
	}
}

const context = new Context("ab");
const expressions = [new TerminalExpression(), new NonTerminalExpression()];

expressions.forEach((expression) => expression.interpret(context));
console.log(context.output); // 3
