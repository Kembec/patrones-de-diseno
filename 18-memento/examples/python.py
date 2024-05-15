# Memento: Permite capturar y externalizar el estado interno de un objeto.


class Memento:
    def __init__(self, state: str):
        self._state = state

    def get_state(self) -> str:
        return self._state


class Originator:
    def __init__(self):
        self._state = ""

    def set_state(self, state: str) -> None:
        print(f"Originator: Setting state to {state}")
        self._state = state

    def save_state(self) -> Memento:
        print("Originator: Saving to Memento.")
        return Memento(self._state)

    def restore_state(self, memento: Memento) -> None:
        self._state = memento.get_state()
        print(f"Originator: State after restoring from Memento: {self._state}")


class Caretaker:
    def __init__(self):
        self._mementos = []

    def add_memento(self, memento: Memento) -> None:
        self._mementos.append(memento)

    def get_memento(self, index: int) -> Memento:
        return self._mementos[index]


originator = Originator()
caretaker = Caretaker()

originator.set_state("State1")
originator.set_state("State2")
caretaker.add_memento(originator.save_state())

originator.set_state("State3")
caretaker.add_memento(originator.save_state())

originator.set_state("State4")

originator.restore_state(
    caretaker.get_memento(1)
)  # Originator: State after restoring from Memento: State3
originator.restore_state(
    caretaker.get_memento(0)
)  # Originator: State after restoring from Memento: State2
