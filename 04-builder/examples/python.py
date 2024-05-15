# Builder: Separa la construcción de un objeto complejo de su representación.


class Product:
    def __init__(self):
        self.parts = []

    def add_part(self, part: str):
        self.parts.append(part)

    def show_parts(self):
        print(", ".join(self.parts))


class Builder(ABC):
    @abstractmethod
    def reset(self):
        pass

    @abstractmethod
    def build_part_a(self):
        pass

    @abstractmethod
    def build_part_b(self):
        pass

    @abstractmethod
    def get_result(self) -> Product:
        pass


class ConcreteBuilder(Builder):
    def __init__(self):
        self.reset()

    def reset(self):
        self.product = Product()

    def build_part_a(self):
        self.product.add_part("Part A")

    def build_part_b(self):
        self.product.add_part("Part B")

    def get_result(self) -> Product:
        return self.product


class Director:
    def __init__(self):
        self.builder = None

    def set_builder(self, builder: Builder):
        self.builder = builder

    def construct(self):
        self.builder.reset()
        self.builder.build_part_a()
        self.builder.build_part_b()


builder = ConcreteBuilder()
director = Director()

director.set_builder(builder)
director.construct()

product = builder.get_result()
product.show_parts()  # Part A, Part B
