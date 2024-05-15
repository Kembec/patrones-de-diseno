# Singleton: Garantiza que una clase tenga solo una instancia.


class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.data = "Singleton Data"
        return cls._instance

    def get_data(self):
        return self.data


instance1 = Singleton()
instance2 = Singleton()

print(instance1 is instance2)  # True
print(instance1.get_data())  # Singleton Data
