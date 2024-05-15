<?php
// Factory Method: Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar.

abstract class Product
{
    abstract public function operation(): string;
}

class ConcreteProductA extends Product
{
    public function operation(): string
    {
        return "ConcreteProductA Operation";
    }
}

class ConcreteProductB extends Product
{
    public function operation(): string
    {
        return "ConcreteProductB Operation";
    }
}

abstract class Creator
{
    abstract public function factoryMethod(): Product;

    public function someOperation(): string
    {
        $product = $this->factoryMethod();
        return "Creator: " . $product->operation();
    }
}

class ConcreteCreatorA extends Creator
{
    public function factoryMethod(): Product
    {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator
{
    public function factoryMethod(): Product
    {
        return new ConcreteProductB();
    }
}

$creatorA = new ConcreteCreatorA();
$creatorB = new ConcreteCreatorB();

echo $creatorA->someOperation(); // Creator: ConcreteProductA Operation
echo $creatorB->someOperation(); // Creator: ConcreteProductB Operation
