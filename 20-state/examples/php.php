<?php
// State: Permite a un objeto alterar su comportamiento cuando cambia su estado interno.

class Context
{
    private $state;

    public function __construct(State $state)
    {
        $this->transitionTo($state);
    }

    public function transitionTo(State $state): void
    {
        echo "Context: Transition to " . get_class($state) . ".\n";
        $this->state = $state;
        $this->state->setContext($this);
    }

    public function request1(): void
    {
        $this->state->handle1();
    }

    public function request2(): void
    {
        $this->state->handle2();
    }
}

abstract class State
{
    protected $context;

    public function setContext(Context $context): void
    {
        $this->context = $context;
    }

    abstract public function handle1(): void;
    abstract public function handle2(): void;
}

class ConcreteStateA extends State
{
    public function handle1(): void
    {
        echo "ConcreteStateA handles request1.\n";
        $this->context->transitionTo(new ConcreteStateB());
    }

    public function handle2(): void
    {
        echo "ConcreteStateA handles request2.\n";
    }
}

class ConcreteStateB extends State
{
    public function handle1(): void
    {
        echo "ConcreteStateB handles request1.\n";
    }

    public function handle2(): void
    {
        echo "ConcreteStateB handles request2.\n";
        $this->context->transitionTo(new ConcreteStateA());
    }
}

$context = new Context(new ConcreteStateA());
$context->request1(); // ConcreteStateA handles request1. \n Context: Transition to ConcreteStateB.
$context->request2(); // ConcreteStateB handles request2. \n Context: Transition to ConcreteStateA.
