<?php
// Chain of Responsibility: Permite pasar solicitudes a lo largo de una cadena de manejadores.

abstract class Handler
{
    private $nextHandler;

    public function setNext(Handler $handler): Handler
    {
        $this->nextHandler = $handler;
        return $handler;
    }

    public function handle(string $request): ?string
    {
        if ($this->nextHandler) {
            return $this->nextHandler->handle($request);
        }
        return null;
    }
}

class ConcreteHandlerA extends Handler
{
    public function handle(string $request): ?string
    {
        if ($request === "A") {
            return "ConcreteHandlerA handled " . $request;
        }
        return parent::handle($request);
    }
}

class ConcreteHandlerB extends Handler
{
    public function handle(string $request): ?string
    {
        if ($request === "B") {
            return "ConcreteHandlerB handled " . $request;
        }
        return parent::handle($request);
    }
}

$handlerA = new ConcreteHandlerA();
$handlerB = new ConcreteHandlerB();

$handlerA->setNext($handlerB);

echo $handlerA->handle("A"); // ConcreteHandlerA handled A
echo $handlerA->handle("B"); // ConcreteHandlerB handled B
