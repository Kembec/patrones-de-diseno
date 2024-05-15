<?php
// Visitor: Permite definir nuevas operaciones sin cambiar las clases de los elementos.

interface Visitor
{
    public function visitConcreteElementA(ConcreteElementA $element): void;
    public function visitConcreteElementB(ConcreteElementB $element): void;
}

class ConcreteVisitor1 implements Visitor
{
    public function visitConcreteElementA(ConcreteElementA $element): void
    {
        echo "ConcreteVisitor1: " . $element->operationA() . "\n";
    }

    public function visitConcreteElementB(ConcreteElementB $element): void
    {
        echo "ConcreteVisitor1: " . $element->operationB() . "\n";
    }
}

class ConcreteVisitor2 implements Visitor
{
    public function visitConcreteElementA(ConcreteElementA $element): void
    {
        echo "ConcreteVisitor2: " . $element->operationA() . "\n";
    }

    public function visitConcreteElementB(ConcreteElementB $element): void
    {
        echo "ConcreteVisitor2: " . $element->operationB() . "\n";
    }
}

interface Element
{
    public function accept(Visitor $visitor): void;
}

class ConcreteElementA implements Element
{
    public function accept(Visitor $visitor): void
    {
        $visitor->visitConcreteElementA($this);
    }

    public function operationA(): string
    {
        return "ConcreteElementA";
    }
}

class ConcreteElementB implements Element
{
    public function accept(Visitor $visitor): void
    {
        $visitor->visitConcreteElementB($this);
    }

    public function operationB(): string
    {
        return "ConcreteElementB";
    }
}

$elements = [new ConcreteElementA(), new ConcreteElementB()];

$visitor1 = new ConcreteVisitor1();
$visitor2 = new ConcreteVisitor2();

foreach ($elements as $element) {
    $element->accept($visitor1);
    $element->accept($visitor2);
}
// ConcreteVisitor1: ConcreteElementA
// ConcreteVisitor1: ConcreteElementB
// ConcreteVisitor2: ConcreteElementA
// ConcreteVisitor2: ConcreteElementB
