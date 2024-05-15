# Flyweight: Reduce la cantidad de objetos creados compartiendo objetos existentes.


class Flyweight:
    def __init__(self, shared_state: str):
        self.shared_state = shared_state

    def operation(self, unique_state: str) -> None:
        print(f"Flyweight: Shared {self.shared_state}, Unique {unique_state}")


class FlyweightFactory:
    def __init__(self):
        self.flyweights = {}

    def get_flyweight(self, shared_state: str) -> Flyweight:
        if shared_state not in self.flyweights:
            self.flyweights[shared_state] = Flyweight(shared_state)
        return self.flyweights[shared_state]


factory = FlyweightFactory()

flyweight1 = factory.get_flyweight("SharedState1")
flyweight1.operation("UniqueState1")

flyweight2 = factory.get_flyweight("SharedState1")
flyweight2.operation("UniqueState2")

print(flyweight1 is flyweight2)  # True
