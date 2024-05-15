# Bridge: Desacopla una abstracción de su implementación.


class Implementation(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass


class ConcreteImplementationA(Implementation):
    def operation(self) -> str:
        return "ImplementationA Operation"


class ConcreteImplementationB(Implementation):
    def operation(self) -> str:
        return "ImplementationB Operation"


class Abstraction:
    def __init__(self, implementation: Implementation):
        self.implementation = implementation

    def operation(self) -> str:
        return self.implementation.operation()


implementation_a = ConcreteImplementationA()
abstraction_a = Abstraction(implementation_a)

implementation_b = ConcreteImplementationB()
abstraction_b = Abstraction(implementation_b)

print(abstraction_a.operation())  # ImplementationA Operation
print(abstraction_b.operation())  # ImplementationB Operation
