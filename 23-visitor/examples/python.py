# Visitor: Permite definir nuevas operaciones sin cambiar las clases de los elementos.


class Visitor(ABC):
    @abstractmethod
    def visit_concrete_element_a(self, element):
        pass

    @abstractmethod
    def visit_concrete_element_b(self, element):
        pass


class ConcreteVisitor1(Visitor):
    def visit_concrete_element_a(self, element):
        print(f"ConcreteVisitor1: {element.operation_a()}")

    def visit_concrete_element_b(self, element):
        print(f"ConcreteVisitor1: {element.operation_b()}")


class ConcreteVisitor2(Visitor):
    def visit_concrete_element_a(self, element):
        print(f"ConcreteVisitor2: {element.operation_a()}")

    def visit_concrete_element_b(self, element):
        print(f"ConcreteVisitor2: {element.operation_b()}")


class Element(ABC):
    @abstractmethod
    def accept(self, visitor: Visitor):
        pass


class ConcreteElementA(Element):
    def accept(self, visitor: Visitor):
        visitor.visit_concrete_element_a(self)

    def operation_a(self) -> str:
        return "ConcreteElementA"


class ConcreteElementB(Element):
    def accept(self, visitor: Visitor):
        visitor.visit_concrete_element_b(self)

    def operation_b(self) -> str:
        return "ConcreteElementB"


elements = [ConcreteElementA(), ConcreteElementB()]

visitor1 = ConcreteVisitor1()
visitor2 = ConcreteVisitor2()

for element in elements:
    element.accept(visitor1)
    element.accept(visitor2)
# ConcreteVisitor1: ConcreteElementA
# ConcreteVisitor1: ConcreteElementB
# ConcreteVisitor2: ConcreteElementA
# ConcreteVisitor2: ConcreteElementB
