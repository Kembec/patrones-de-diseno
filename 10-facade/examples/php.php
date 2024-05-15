<?php
// Facade: Proporciona una interfaz simplificada a un conjunto complejo de interfaces en un subsistema.

class SubsystemA
{
    public function operationA(): string
    {
        return "SubsystemA Operation";
    }
}

class SubsystemB
{
    public function operationB(): string
    {
        return "SubsystemB Operation";
    }
}

class Facade
{
    private $subsystemA;
    private $subsystemB;

    public function __construct()
    {
        $this->subsystemA = new SubsystemA();
        $this->subsystemB = new SubsystemB();
    }

    public function operation(): string
    {
        return $this->subsystemA->operationA() . ", " . $this->subsystemB->operationB();
    }
}

$facade = new Facade();
echo $facade->operation(); // SubsystemA Operation, SubsystemB Operation
