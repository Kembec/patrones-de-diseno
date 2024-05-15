<?php
// Memento: Permite capturar y externalizar el estado interno de un objeto.

class Memento
{
    private $state;

    public function __construct(string $state)
    {
        $this->state = $state;
    }

    public function getState(): string
    {
        return $this->state;
    }
}

class Originator
{
    private $state;

    public function setState(string $state): void
    {
        echo "Originator: Setting state to " . $state . "\n";
        $this->state = $state;
    }

    public function saveState(): Memento
    {
        echo "Originator: Saving to Memento.\n";
        return new Memento($this->state);
    }

    public function restoreState(Memento $memento): void
    {
        $this->state = $memento->getState();
        echo "Originator: State after restoring from Memento: " . $this->state . "\n";
    }
}

class Caretaker
{
    private $mementos = [];

    public function addMemento(Memento $memento): void
    {
        $this->mementos[] = $memento;
    }

    public function getMemento(int $index): Memento
    {
        return $this->mementos[$index];
    }
}

$originator = new Originator();
$caretaker = new Caretaker();

$originator->setState("State1");
$originator->setState("State2");
$caretaker->addMemento($originator->saveState());

$originator->setState("State3");
$caretaker->addMemento($originator->saveState());

$originator->setState("State4");

$originator->restoreState($caretaker->getMemento(1)); // Originator: State after restoring from Memento: State3
$originator->restoreState($caretaker->getMemento(0)); // Originator: State after restoring from Memento: State2
