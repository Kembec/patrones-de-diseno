<?php
// Composite: Permite tratar objetos individuales y composiciones de objetos de manera uniforme.

abstract class Component
{
    abstract public function operation(): string;
}

class Leaf extends Component
{
    public function operation(): string
    {
        return "Leaf Operation";
    }
}

class Composite extends Component
{
    private $children = [];

    public function add(Component $child): void
    {
        $this->children[] = $child;
    }

    public function operation(): string
    {
        $results = [];
        foreach ($this->children as $child) {
            $results[] = $child->operation();
        }
        return implode(", ", $results);
    }
}

$leaf1 = new Leaf();
$leaf2 = new Leaf();
$composite = new Composite();

$composite->add($leaf1);
$composite->add($leaf2);

echo $composite->operation(); // Leaf Operation, Leaf Operation
