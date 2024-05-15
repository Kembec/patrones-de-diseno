<?php
// Proxy: Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.

interface Subject
{
    public function request(): string;
}

class RealSubject implements Subject
{
    public function request(): string
    {
        return "RealSubject Request";
    }
}

class Proxy implements Subject
{
    private $realSubject;

    public function __construct(RealSubject $realSubject)
    {
        $this->realSubject = $realSubject;
    }

    public function request(): string
    {
        echo "Proxy: Checking access before forwarding request to RealSubject.\n";
        return $this->realSubject->request();
    }
}

$realSubject = new RealSubject();
$proxy = new Proxy($realSubject);

echo $proxy->request(); // Proxy: Checking access before forwarding request to RealSubject. \n RealSubject Request
