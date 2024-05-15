<?php
// Interpreter: Define una representación para la gramática de un lenguaje.

class Context
{
    public $input;
    public $output = 0;

    public function __construct(string $input)
    {
        $this->input = $input;
    }
}

interface Expression
{
    public function interpret(Context $context): void;
}

class TerminalExpression implements Expression
{
    public function interpret(Context $context): void
    {
        if (strpos($context->input, "a") !== false) {
            $context->output += 1;
        }
    }
}

class NonTerminalExpression implements Expression
{
    public function interpret(Context $context): void
    {
        if (strpos($context->input, "b") !== false) {
            $context->output += 2;
        }
    }
}

$context = new Context("ab");
$expressions = [new TerminalExpression(), new NonTerminalExpression()];

foreach ($expressions as $expression) {
    $expression->interpret($context);
}

echo $context->output; // 3
