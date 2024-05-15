# Interpreter: Define una representación para la gramática de un lenguaje.


class Context:
    def __init__(self, input: str):
        self.input = input
        self.output = 0


class Expression(ABC):
    @abstractmethod
    def interpret(self, context: Context) -> None:
        pass


class TerminalExpression(Expression):
    def interpret(self, context: Context) -> None:
        if "a" in context.input:
            context.output += 1


class NonTerminalExpression(Expression):
    def interpret(self, context: Context) -> None:
        if "b" in context.input:
            context.output += 2


context = Context("ab")
expressions = [TerminalExpression(), NonTerminalExpression()]

for expression in expressions:
    expression.interpret(context)

print(context.output)  # 3
