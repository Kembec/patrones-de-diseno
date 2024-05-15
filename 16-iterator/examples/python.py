# Iterator: Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado.


class Iterator(ABC):
    @abstractmethod
    def __next__(self):
        pass

    @abstractmethod
    def __iter__(self):
        pass


class ConcreteIterator(Iterator):
    def __init__(self, collection):
        self.collection = collection
        self.position = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.position < len(self.collection):
            item = self.collection[self.position]
            self.position += 1
            return item
        else:
            raise StopIteration


class Aggregate(ABC):
    @abstractmethod
    def create_iterator(self) -> Iterator:
        pass


class ConcreteAggregate(Aggregate):
    def __init__(self):
        self.items = []

    def add_item(self, item):
        self.items.append(item)

    def create_iterator(self) -> Iterator:
        return ConcreteIterator(self.items)


aggregate = ConcreteAggregate()
aggregate.add_item("Item 1")
aggregate.add_item("Item 2")

iterator = aggregate.create_iterator()

for item in iterator:
    print(item)
# Item 1
# Item 2
