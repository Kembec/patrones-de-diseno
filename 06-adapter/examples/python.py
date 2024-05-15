# Adapter: Permite que interfaces incompatibles trabajen juntas.


class OldSystem:
    def old_method(self) -> str:
        return "Old System Method"


class NewSystem:
    def new_method(self) -> str:
        pass


class Adapter(NewSystem):
    def __init__(self, old_system: OldSystem):
        self.old_system = old_system

    def new_method(self) -> str:
        return self.old_system.old_method()


old_system = OldSystem()
adapter = Adapter(old_system)

print(adapter.new_method())  # Old System Method
