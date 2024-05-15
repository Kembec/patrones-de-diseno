# Composite: Permite tratar objetos individuales y composiciones de objetos de manera uniforme.


class Component(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass


class Leaf(Component):
    def operation(self) -> str:
        return "Leaf Operation"


class Composite(Component):
    def __init__(self):
        self.children = []

    def add(self, child: Component):
        self.children.append(child)

    def operation(self) -> str:
        results = [child.operation() for child in self.children]
        return ", ".join(results)


leaf1 = Leaf()
leaf2 = Leaf()
composite = Composite()

composite.add(leaf1)
composite.add(leaf2)

print(composite.operation())  # Leaf Operation, Leaf Operation
