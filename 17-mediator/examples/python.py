# Mediator: Define un objeto que encapsula cómo interactúan un conjunto de objetos.


class Mediator(ABC):
    @abstractmethod
    def notify(self, sender: object, event: str) -> None:
        pass


class ConcreteMediator(Mediator):
    def __init__(self, component1, component2):
        self.component1 = component1
        self.component2 = component2
        self.component1.set_mediator(self)
        self.component2.set_mediator(self)

    def notify(self, sender: object, event: str) -> None:
        if event == "A":
            print("Mediator reacts on A and triggers following operations:")
            self.component2.do_c()
        if event == "D":
            print("Mediator reacts on D and triggers following operations:")
            self.component1.do_b()


class BaseComponent:
    def __init__(self, mediator: Mediator = None):
        self._mediator = mediator

    def set_mediator(self, mediator: Mediator) -> None:
        self._mediator = mediator


class Component1(BaseComponent):
    def do_a(self) -> None:
        print("Component 1 does A.")
        self._mediator.notify(self, "A")

    def do_b(self) -> None:
        print("Component 1 does B.")


class Component2(BaseComponent):
    def do_c(self) -> None:
        print("Component 2 does C.")

    def do_d(self) -> None:
        print("Component 2 does D.")
        self._mediator.notify(self, "D")


component1 = Component1()
component2 = Component2()
mediator = ConcreteMediator(component1, component2)

component1.do_a()  # Component 1 does A. \n Mediator reacts on A and triggers following operations: \n Component 2 does C.
component2.do_d()  # Component 2 does D. \n Mediator reacts on D and triggers following operations: \n Component 1 does B.
