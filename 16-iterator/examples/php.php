<?php
// Iterator: Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado.

class ConcreteIterator implements Iterator
{
    private $collection;
    private $position = 0;

    public function __construct(array $collection)
    {
        $this->collection = $collection;
    }

    public function current()
    {
        return $this->collection[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }

    public function key()
    {
        return $this->position;
    }

    public function valid(): bool
    {
        return isset($this->collection[$this->position]);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }
}

class ConcreteAggregate implements IteratorAggregate
{
    private $items = [];

    public function addItem($item): void
    {
        $this->items[] = $item;
    }

    public function getIterator(): Iterator
    {
        return new ConcreteIterator($this->items);
    }
}

$aggregate = new ConcreteAggregate();
$aggregate->addItem("Item 1");
$aggregate->addItem("Item 2");

$iterator = $aggregate->getIterator();

foreach ($iterator as $item) {
    echo $item . "\n";
}
// Item 1
// Item 2
