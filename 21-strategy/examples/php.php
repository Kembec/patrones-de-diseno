<?php
// Strategy: Define una familia de algoritmos, encapsula cada uno, y los hace intercambiables.

interface Strategy
{
    public function doAlgorithm(array $data): array;
}

class ConcreteStrategyA implements Strategy
{
    public function doAlgorithm(array $data): array
    {
        sort($data);
        return $data;
    }
}

class ConcreteStrategyB implements Strategy
{
    public function doAlgorithm(array $data): array
    {
        rsort($data);
        return $data;
    }
}

class Context
{
    private $strategy;

    public function __construct(Strategy $strategy = null)
    {
        $this->strategy = $strategy;
    }

    public function setStrategy(Strategy $strategy): void
    {
        $this->strategy = $strategy;
    }

    public function executeStrategy(array $data): array
    {
        return $this->strategy->doAlgorithm($data);
    }
}

$context = new Context();

$context->setStrategy(new ConcreteStrategyA());
print_r($context->executeStrategy([3, 1, 2])); // [1, 2, 3]

$context->setStrategy(new ConcreteStrategyB());
print_r($context->executeStrategy([3, 1, 2])); // [3, 2, 1]
