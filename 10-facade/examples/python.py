# Facade: Proporciona una interfaz simplificada a un conjunto complejo de interfaces en un subsistema.


class SubsystemA:
    def operation_a(self) -> str:
        return "SubsystemA Operation"


class SubsystemB:
    def operation_b(self) -> str:
        return "SubsystemB Operation"


class Facade:
    def __init__(self):
        self.subsystem_a = SubsystemA()
        self.subsystem_b = SubsystemB()

    def operation(self) -> str:
        return f"{self.subsystem_a.operation_a()}, {self.subsystem_b.operation_b()}"


facade = Facade()
print(facade.operation())  # SubsystemA Operation, SubsystemB Operation
