<?php
// Command: Encapsula una solicitud como un objeto.

interface Command
{
    public function execute(): string;
}

class Receiver
{
    public function action(): string
    {
        return "Receiver Action";
    }
}

class ConcreteCommand implements Command
{
    private $receiver;

    public function __construct(Receiver $receiver)
    {
        $this->receiver = $receiver;
    }

    public function execute(): string
    {
        return $this->receiver->action();
    }
}

class Invoker
{
    private $command;

    public function setCommand(Command $command): void
    {
        $this->command = $command;
    }

    public function executeCommand(): string
    {
        return $this->command->execute();
    }
}

$receiver = new Receiver();
$command = new ConcreteCommand($receiver);
$invoker = new Invoker();

$invoker->setCommand($command);
echo $invoker->executeCommand(); // Receiver Action
