# Chain of Responsibility: Permite pasar solicitudes a lo largo de una cadena de manejadores.


class Handler(ABC):
    def __init__(self):
        self.next_handler = None

    def set_next(self, handler: Handler) -> Handler:
        self.next_handler = handler
        return handler

    @abstractmethod
    def handle(self, request: str) -> str:
        if self.next_handler:
            return self.next_handler.handle(request)
        return None


class ConcreteHandlerA(Handler):
    def handle(self, request: str) -> str:
        if request == "A":
            return f"ConcreteHandlerA handled {request}"
        return super().handle(request)


class ConcreteHandlerB(Handler):
    def handle(self, request: str) -> str:
        if request == "B":
            return f"ConcreteHandlerB handled {request}"
        return super().handle(request)


handler_a = ConcreteHandlerA()
handler_b = ConcreteHandlerB()

handler_a.set_next(handler_b)

print(handler_a.handle("A"))  # ConcreteHandlerA handled A
print(handler_a.handle("B"))  # ConcreteHandlerB handled B
