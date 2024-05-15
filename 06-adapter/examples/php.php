<?php
// Adapter: Permite que interfaces incompatibles trabajen juntas.

class OldSystem
{
    public function oldMethod(): string
    {
        return "Old System Method";
    }
}

interface NewSystem
{
    public function newMethod(): string;
}

class Adapter implements NewSystem
{
    private $oldSystem;

    public function __construct(OldSystem $oldSystem)
    {
        $this->oldSystem = $oldSystem;
    }

    public function newMethod(): string
    {
        return $this->oldSystem->oldMethod();
    }
}

$oldSystem = new OldSystem();
$adapter = new Adapter($oldSystem);

echo $adapter->newMethod(); // Old System Method
