<?php
// Decorator: Añade responsabilidades adicionales a un objeto de manera dinámica.

abstract class Component
{
    abstract public function operation(): string;
}

class ConcreteComponent extends Component
{
    public function operation(): string
    {
        return "ConcreteComponent Operation";
    }
}

abstract class Decorator extends Component
{
    protected $component;

    public function __construct(Component $component)
    {
        $this->component = $component;
    }

    public function operation(): string
    {
        return $this->component->operation();
    }
}

class ConcreteDecoratorA extends Decorator
{
    public function operation(): string
    {
        return "ConcreteDecoratorA(" . parent::operation() . ")";
    }
}

class ConcreteDecoratorB extends Decorator
{
    public function operation(): string
    {
        return "ConcreteDecoratorB(" . parent::operation() . ")";
    }
}

$component = new ConcreteComponent();
$decoratorA = new ConcreteDecoratorA($component);
$decoratorB = new ConcreteDecoratorB($decoratorA);

echo $decoratorB->operation(); // ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent Operation))
