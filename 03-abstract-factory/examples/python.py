# Abstract Factory: Proporciona una interfaz para crear familias de objetos relacionados.

from abc import ABC, abstractmethod


class AbstractProductA(ABC):
    @abstractmethod
    def operation_a(self) -> str:
        pass


class AbstractProductB(ABC):
    @abstractmethod
    def operation_b(self) -> str:
        pass


class ConcreteProductA1(AbstractProductA):
    def operation_a(self) -> str:
        return "ProductA1 Operation"


class ConcreteProductA2(AbstractProductA):
    def operation_a(self) -> str:
        return "ProductA2 Operation"


class ConcreteProductB1(AbstractProductB):
    def operation_b(self) -> str:
        return "ProductB1 Operation"


class ConcreteProductB2(AbstractProductB):
    def operation_b(self) -> str:
        return "ProductB2 Operation"


class AbstractFactory(ABC):
    @abstractmethod
    def create_product_a(self) -> AbstractProductA:
        pass

    @abstractmethod
    def create_product_b(self) -> AbstractProductB:
        pass


class ConcreteFactory1(AbstractFactory):
    def create_product_a(self) -> AbstractProductA:
        return ConcreteProductA1()

    def create_product_b(self) -> AbstractProductB:
        return ConcreteProductB1()


class ConcreteFactory2(AbstractFactory):
    def create_product_a(self) -> AbstractProductA:
        return ConcreteProductA2()

    def create_product_b(self) -> AbstractProductB:
        return ConcreteProductB2()


factory1 = ConcreteFactory1()
factory2 = ConcreteFactory2()

product_a1 = factory1.create_product_a()
product_b1 = factory1.create_product_b()

product_a2 = factory2.create_product_a()
product_b2 = factory2.create_product_b()

print(product_a1.operation_a())  # ProductA1 Operation
print(product_b1.operation_b())  # ProductB1 Operation
print(product_a2.operation_a())  # ProductA2 Operation
print(product_b2.operation_b())  # ProductB2 Operation
