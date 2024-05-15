<?php
// Observer: Define una dependencia de uno a muchos entre objetos.

interface Observer
{
    public function update(Subject $subject): void;
}

class Subject
{
    private $observers = [];
    private $state;

    public function getState(): string
    {
        return $this->state;
    }

    public function setState(string $state): void
    {
        $this->state = $state;
        $this->notifyObservers();
    }

    public function addObserver(Observer $observer): void
    {
        $this->observers[] = $observer;
    }

    public function removeObserver(Observer $observer): void
    {
        $this->observers = array_filter($this->observers, function ($obs) use ($observer) {
            return $obs !== $observer;
        });
    }

    public function notifyObservers(): void
    {
        foreach ($this->observers as $observer) {
            $observer->update($this);
        }
    }
}

class ConcreteObserver implements Observer
{
    public function update(Subject $subject): void
    {
        echo "Observer: Reacted to the state change to " . $subject->getState() . "\n";
    }
}

$subject = new Subject();
$observer1 = new ConcreteObserver();
$observer2 = new ConcreteObserver();

$subject->addObserver($observer1);
$subject->addObserver($observer2);

$subject->setState("State1"); // Observer: Reacted to the state change to State1
$subject->setState("State2"); // Observer: Reacted to the state change to State2
