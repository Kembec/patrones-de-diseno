<?php
// Builder: Separa la construcción de un objeto complejo de su representación.

class Product
{
    private $parts = [];

    public function addPart(string $part)
    {
        $this->parts[] = $part;
    }

    public function showParts()
    {
        echo implode(", ", $this->parts);
    }
}

interface Builder
{
    public function reset(): void;
    public function buildPartA(): void;
    public function buildPartB(): void;
    public function getResult(): Product;
}

class ConcreteBuilder implements Builder
{
    private $product;

    public function __construct()
    {
        $this->product = new Product();
    }

    public function reset(): void
    {
        $this->product = new Product();
    }

    public function buildPartA(): void
    {
        $this->product->addPart('Part A');
    }

    public function buildPartB(): void
    {
        $this->product->addPart('Part B');
    }

    public function getResult(): Product
    {
        return $this->product;
    }
}

class Director
{
    private $builder;

    public function setBuilder(Builder $builder): void
    {
        $this->builder = $builder;
    }

    public function construct(): void
    {
        $this->builder->reset();
        $this->builder->buildPartA();
        $this->builder->buildPartB();
    }
}

$builder = new ConcreteBuilder();
$director = new Director();

$director->setBuilder($builder);
$director->construct();

$product = $builder->getResult();
$product->showParts(); // Part A, Part B
