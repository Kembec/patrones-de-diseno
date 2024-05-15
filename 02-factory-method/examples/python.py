# Factory Method: Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar.

from abc import ABC, abstractmethod


class Product(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass


class ConcreteProductA(Product):
    def operation(self) -> str:
        return "ConcreteProductA Operation"


class ConcreteProductB(Product):
    def operation(self) -> str:
        return "ConcreteProductB Operation"


class Creator(ABC):
    @abstractmethod
    def factory_method(self) -> Product:
        pass

    def some_operation(self) -> str:
        product = self.factory_method()
        return f"Creator: {product.operation()}"


class ConcreteCreatorA(Creator):
    def factory_method(self) -> Product:
        return ConcreteProductA()


class ConcreteCreatorB(Creator):
    def factory_method(self) -> Product:
        return ConcreteProductB()


creator_a = ConcreteCreatorA()
creator_b = ConcreteCreatorB()

print(creator_a.some_operation())  # Creator: ConcreteProductA Operation
print(creator_b.some_operation())  # Creator: ConcreteProductB Operation
