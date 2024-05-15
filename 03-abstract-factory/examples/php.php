<?php
// Abstract Factory: Proporciona una interfaz para crear familias de objetos relacionados.

interface AbstractProductA
{
    public function operationA(): string;
}

class ConcreteProductA1 implements AbstractProductA
{
    public function operationA(): string
    {
        return "ProductA1 Operation";
    }
}

class ConcreteProductA2 implements AbstractProductA
{
    public function operationA(): string
    {
        return "ProductA2 Operation";
    }
}

interface AbstractProductB
{
    public function operationB(): string;
}

class ConcreteProductB1 implements AbstractProductB
{
    public function operationB(): string
    {
        return "ProductB1 Operation";
    }
}

class ConcreteProductB2 implements AbstractProductB
{
    public function operationB(): string
    {
        return "ProductB2 Operation";
    }
}

interface AbstractFactory
{
    public function createProductA(): AbstractProductA;
    public function createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory
{
    public function createProductA(): AbstractProductA
    {
        return new ConcreteProductA1();
    }

    public function createProductB(): AbstractProductB
    {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory
{
    public function createProductA(): AbstractProductA
    {
        return new ConcreteProductA2();
    }

    public function createProductB(): AbstractProductB
    {
        return new ConcreteProductB2();
    }
}

$factory1 = new ConcreteFactory1();
$factory2 = new ConcreteFactory2();

$productA1 = $factory1->createProductA();
$productB1 = $factory1->createProductB();

$productA2 = $factory2->createProductA();
$productB2 = $factory2->createProductB();

echo $productA1->operationA(); // ProductA1 Operation
echo $productB1->operationB(); // ProductB1 Operation
echo $productA2->operationA(); // ProductA2 Operation
echo $productB2->operationB(); // ProductB2 Operation
