# Observer: Define una dependencia de uno a muchos entre objetos.


class Subject:
    def __init__(self):
        self._observers = []
        self._state = None

    def get_state(self):
        return self._state

    def set_state(self, state):
        self._state = state
        self.notify_observers()

    def attach(self, observer):
        self._observers.append(observer)

    def detach(self, observer):
        self._observers.remove(observer)

    def notify_observers(self):
        for observer in self._observers:
            observer.update(self)


class Observer(ABC):
    @abstractmethod
    def update(self, subject: Subject):
        pass


class ConcreteObserver(Observer):
    def update(self, subject: Subject):
        print(f"Observer: Reacted to the state change to {subject.get_state()}")


subject = Subject()
observer1 = ConcreteObserver()
observer2 = ConcreteObserver()

subject.attach(observer1)
subject.attach(observer2)

subject.set_state("State1")  # Observer: Reacted to the state change to State1
subject.set_state("State2")  # Observer: Reacted to the state change to State2
