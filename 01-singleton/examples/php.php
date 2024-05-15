<?php
// Singleton: Garantiza que una clase tenga solo una instancia.

class Singleton
{
    private static $instance;
    public $data;

    private function __construct()
    {
        $this->data = "Singleton Data";
    }

    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new Singleton();
        }
        return self::$instance;
    }

    public function getData()
    {
        return $this->data;
    }
}

$instance1 = Singleton::getInstance();
$instance2 = Singleton::getInstance();

echo $instance1 === $instance2; // true
