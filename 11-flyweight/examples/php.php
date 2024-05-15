<?php
// Flyweight: Reduce la cantidad de objetos creados compartiendo objetos existentes.

class Flyweight
{
    private $sharedState;

    public function __construct(string $sharedState)
    {
        $this->sharedState = $sharedState;
    }

    public function operation(string $uniqueState): void
    {
        echo "Flyweight: Shared " . $this->sharedState . ", Unique " . $uniqueState . "\n";
    }
}

class FlyweightFactory
{
    private $flyweights = [];

    public function getFlyweight(string $sharedState): Flyweight
    {
        if (!isset($this->flyweights[$sharedState])) {
            $this->flyweights[$sharedState] = new Flyweight($sharedState);
        }
        return $this->flyweights[$sharedState];
    }
}

$factory = new FlyweightFactory();

$flyweight1 = $factory->getFlyweight("SharedState1");
$flyweight1->operation("UniqueState1");

$flyweight2 = $factory->getFlyweight("SharedState1");
$flyweight2->operation("UniqueState2");

echo $flyweight1 === $flyweight2; // true
