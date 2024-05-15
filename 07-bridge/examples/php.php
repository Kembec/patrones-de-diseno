<?php
// Bridge: Desacopla una abstracción de su implementación.

interface Implementation
{
    public function operation(): string;
}

class ConcreteImplementationA implements Implementation
{
    public function operation(): string
    {
        return "ImplementationA Operation";
    }
}

class ConcreteImplementationB implements Implementation
{
    public function operation(): string
    {
        return "ImplementationB Operation";
    }
}

class Abstraction
{
    protected $implementation;

    public function __construct(Implementation $implementation)
    {
        $this->implementation = $implementation;
    }

    public function operation(): string
    {
        return $this->implementation->operation();
    }
}

$implementationA = new ConcreteImplementationA();
$abstractionA = new Abstraction($implementationA);

$implementationB = new ConcreteImplementationB();
$abstractionB = new Abstraction($implementationB);

echo $abstractionA->operation(); // ImplementationA Operation
echo $abstractionB->operation(); // ImplementationB Operation
