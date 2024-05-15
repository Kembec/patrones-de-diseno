// Chain of Responsibility: Permite pasar solicitudes a lo largo de una cadena de manejadores.

class Handler {
	setNext(handler) {
		this.nextHandler = handler;
		return handler;
	}

	handle(request) {
		if (this.nextHandler) {
			return this.nextHandler.handle(request);
		}
		return null;
	}
}

class ConcreteHandlerA extends Handler {
	handle(request) {
		if (request === "A") {
			return `ConcreteHandlerA handled ${request}`;
		}
		return super.handle(request);
	}
}

class ConcreteHandlerB extends Handler {
	handle(request) {
		if (request === "B") {
			return `ConcreteHandlerB handled ${request}`;
		}
		return super.handle(request);
	}
}

const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();

handlerA.setNext(handlerB);

console.log(handlerA.handle("A")); // ConcreteHandlerA handled A
console.log(handlerA.handle("B")); // ConcreteHandlerB handled B
