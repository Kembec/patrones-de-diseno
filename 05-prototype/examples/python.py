# Prototype: Permite crear nuevos objetos clonando una instancia existente.

import copy


class Prototype:
    def __init__(self, data: str):
        self.data = data

    def clone(self):
        return copy.deepcopy(self)


original = Prototype("Prototype Data")
clone = original.clone()

print(clone.data)  # Prototype Data
