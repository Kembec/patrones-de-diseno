# Command: Encapsula una solicitud como un objeto.


class Command(ABC):
    @abstractmethod
    def execute(self) -> str:
        pass


class Receiver:
    def action(self) -> str:
        return "Receiver Action"


class ConcreteCommand(Command):
    def __init__(self, receiver: Receiver):
        self.receiver = receiver

    def execute(self) -> str:
        return self.receiver.action()


class Invoker:
    def __init__(self):
        self.command = None

    def set_command(self, command: Command):
        self.command = command

    def execute_command(self) -> str:
        return self.command.execute()


receiver = Receiver()
command = ConcreteCommand(receiver)
invoker = Invoker()

invoker.set_command(command)
print(invoker.execute_command())  # Receiver Action
