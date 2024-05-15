# State: Permite a un objeto alterar su comportamiento cuando cambia su estado interno.


class Context:
    def __init__(self, state):
        self._state = None
        self.transition_to(state)

    def transition_to(self, state):
        print(f"Context: Transition to {type(state).__name__}.")
        self._state = state
        self._state.set_context(self)

    def request1(self):
        self._state.handle1()

    def request2(self):
        self._state.handle2()


class State(ABC):
    def __init__(self):
        self._context = None

    def set_context(self, context):
        self._context = context

    @abstractmethod
    def handle1(self):
        pass

    @abstractmethod
    def handle2(self):
        pass


class ConcreteStateA(State):
    def handle1(self):
        print("ConcreteStateA handles request1.")
        self._context.transition_to(ConcreteStateB())

    def handle2(self):
        print("ConcreteStateA handles request2.")


class ConcreteStateB(State):
    def handle1(self):
        print("ConcreteStateB handles request1.")

    def handle2(self):
        print("ConcreteStateB handles request2.")
        self._context.transition_to(ConcreteStateA())


context = Context(ConcreteStateA())
context.request1()  # ConcreteStateA handles request1. \n Context: Transition to ConcreteStateB.
context.request2()  # ConcreteStateB handles request2. \n Context: Transition to ConcreteStateA.
