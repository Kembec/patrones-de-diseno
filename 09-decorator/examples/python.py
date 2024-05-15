# Decorator: Añade responsabilidades adicionales a un objeto de manera dinámica.


class Component(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass


class ConcreteComponent(Component):
    def operation(self) -> str:
        return "ConcreteComponent Operation"


class Decorator(Component):
    def __init__(self, component: Component):
        self.component = component

    def operation(self) -> str:
        return self.component.operation()


class ConcreteDecoratorA(Decorator):
    def operation(self) -> str:
        return f"ConcreteDecoratorA({super().operation()})"


class ConcreteDecoratorB(Decorator):
    def operation(self) -> str:
        return f"ConcreteDecoratorB({super().operation()})"


component = ConcreteComponent()
decorator_a = ConcreteDecoratorA(component)
decorator_b = ConcreteDecoratorB(decorator_a)

print(
    decorator_b.operation()
)  # ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent Operation))
