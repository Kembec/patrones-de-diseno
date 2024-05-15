<?php
// Template Method: Define el esqueleto de un algoritmo en una operación.

abstract class AbstractClass
{
    public function templateMethod(): void
    {
        $this->baseOperation1();
        $this->requiredOperation1();
        $this->baseOperation2();
        $this->requiredOperation2();
    }

    protected function baseOperation1(): void
    {
        echo "AbstractClass says: I am doing the bulk of the work\n";
    }

    protected function baseOperation2(): void
    {
        echo "AbstractClass says: But I let subclasses override some operations\n";
    }

    abstract protected function requiredOperation1(): void;
    abstract protected function requiredOperation2(): void;
}

class ConcreteClass1 extends AbstractClass
{
    protected function requiredOperation1(): void
    {
        echo "ConcreteClass1 says: Implemented Operation1\n";
    }

    protected function requiredOperation2(): void
    {
        echo "ConcreteClass1 says: Implemented Operation2\n";
    }
}

class ConcreteClass2 extends AbstractClass
{
    protected function requiredOperation1(): void
    {
        echo "ConcreteClass2 says: Implemented Operation1\n";
    }

    protected function requiredOperation2(): void
    {
        echo "ConcreteClass2 says: Implemented Operation2 differently\n";
    }
}

$concreteClass1 = new ConcreteClass1();
$concreteClass2 = new ConcreteClass2();

$concreteClass1->templateMethod();
// AbstractClass says: I am doing the bulk of the work
// ConcreteClass1 says: Implemented Operation1
// AbstractClass says: But I let subclasses override some operations
// ConcreteClass1 says: Implemented Operation2

$concreteClass2->templateMethod();
// AbstractClass says: I am doing the bulk of the work
// ConcreteClass2 says: Implemented Operation1
// AbstractClass says: But I let subclasses override some operations
// ConcreteClass2 says: Implemented Operation2 differently
