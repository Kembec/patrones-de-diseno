# Proxy: Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.


class Subject(ABC):
    @abstractmethod
    def request(self) -> str:
        pass


class RealSubject(Subject):
    def request(self) -> str:
        return "RealSubject Request"


class Proxy(Subject):
    def __init__(self, real_subject: RealSubject):
        self.real_subject = real_subject

    def request(self) -> str:
        print("Proxy: Checking access before forwarding request to RealSubject.")
        return self.real_subject.request()


real_subject = RealSubject()
proxy = Proxy(real_subject)

print(
    proxy.request()
)  # Proxy: Checking access before forwarding request to RealSubject. \n RealSubject Request
