# Strategy: Define una familia de algoritmos, encapsula cada uno, y los hace intercambiables.


class Strategy(ABC):
    @abstractmethod
    def do_algorithm(self, data: list) -> list:
        pass


class ConcreteStrategyA(Strategy):
    def do_algorithm(self, data: list) -> list:
        return sorted(data)


class ConcreteStrategyB(Strategy):
    def do_algorithm(self, data: list) -> list:
        return sorted(data, reverse=True)


class Context:
    def __init__(self, strategy: Strategy = None):
        self._strategy = strategy

    def set_strategy(self, strategy: Strategy):
        self._strategy = strategy

    def execute_strategy(self, data: list) -> list:
        return self._strategy.do_algorithm(data)


context = Context()

context.set_strategy(ConcreteStrategyA())
print(context.execute_strategy([3, 1, 2]))  # [1, 2, 3]

context.set_strategy(ConcreteStrategyB())
print(context.execute_strategy([3, 1, 2]))  # [3, 2, 1]
