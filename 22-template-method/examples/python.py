# Template Method: Define el esqueleto de un algoritmo en una operación.


class AbstractClass(ABC):
    def template_method(self):
        self.base_operation1()
        self.required_operation1()
        self.base_operation2()
        self.required_operation2()

    def base_operation1(self):
        print("AbstractClass says: I am doing the bulk of the work")

    def base_operation2(self):
        print("AbstractClass says: But I let subclasses override some operations")

    @abstractmethod
    def required_operation1(self):
        pass

    @abstractmethod
    def required_operation2(self):
        pass


class ConcreteClass1(AbstractClass):
    def required_operation1(self):
        print("ConcreteClass1 says: Implemented Operation1")

    def required_operation2(self):
        print("ConcreteClass1 says: Implemented Operation2")


class ConcreteClass2(AbstractClass):
    def required_operation1(self):
        print("ConcreteClass2 says: Implemented Operation1")

    def required_operation2(self):
        print("ConcreteClass2 says: Implemented Operation2 differently")


concrete_class1 = ConcreteClass1()
concrete_class2 = ConcreteClass2()

concrete_class1.template_method()
# AbstractClass says: I am doing the bulk of the work
# ConcreteClass1 says: Implemented Operation1
# AbstractClass says: But I let subclasses override some operations
# ConcreteClass1 says: Implemented Operation2

concrete_class2.template_method()
# AbstractClass says: I am doing the bulk of the work
# ConcreteClass2 says: Implemented Operation1
# AbstractClass says: But I let subclasses override some operations
# ConcreteClass2 says: Implemented Operation2 differently
