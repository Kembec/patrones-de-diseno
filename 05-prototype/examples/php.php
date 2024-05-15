<?php
// Prototype: Permite crear nuevos objetos clonando una instancia existente.

interface Prototype
{
    public function __clone();
}

class ConcretePrototype implements Prototype
{
    private $data;

    public function __construct(string $data)
    {
        $this->data = $data;
    }

    public function __clone()
    {
        // No necesitamos hacer nada aquí, PHP maneja la clonación superficial.
    }

    public function getData(): string
    {
        return $this->data;
    }
}

$original = new ConcretePrototype("Prototype Data");
$clone = clone $original;

echo $clone->getData(); // Prototype Data
