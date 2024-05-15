<?php
// Mediator: Define un objeto que encapsula cómo interactúan un conjunto de objetos.

interface Mediator
{
    public function notify($sender, string $event): void;
}

class ConcreteMediator implements Mediator
{
    private $component1;
    private $component2;

    public function __construct(Component1 $component1, Component2 $component2)
    {
        $this->component1 = $component1;
        $this->component2 = $component2;

        $this->component1->setMediator($this);
        $this->component2->setMediator($this);
    }

    public function notify($sender, string $event): void
    {
        if ($event === "A") {
            echo "Mediator reacts on A and triggers following operations:\n";
            $this->component2->doC();
        }

        if ($event === "D") {
            echo "Mediator reacts on D and triggers following operations:\n";
            $this->component1->doB();
        }
    }
}

class BaseComponent
{
    protected $mediator;

    public function __construct(Mediator $mediator = null)
    {
        $this->mediator = $mediator;
    }

    public function setMediator(Mediator $mediator): void
    {
        $this->mediator = $mediator;
    }
}

class Component1 extends BaseComponent
{
    public function doA(): void
    {
        echo "Component 1 does A.\n";
        $this->mediator->notify($this, "A");
    }

    public function doB(): void
    {
        echo "Component 1 does B.\n";
    }
}

class Component2 extends BaseComponent
{
    public function doC(): void
    {
        echo "Component 2 does C.\n";
    }

    public function doD(): void
    {
        echo "Component 2 does D.\n";
        $this->mediator->notify($this, "D");
    }
}

$component1 = new Component1();
$component2 = new Component2();
$mediator = new ConcreteMediator($component1, $component2);

$component1->doA(); // Component 1 does A. \n Mediator reacts on A and triggers following operations: \n Component 2 does C.
$component2->doD(); // Component 2 does D. \n Mediator reacts on D and triggers following operations: \n Component 1 does B.
