// Chain of Responsibility: Permite pasar solicitudes a lo largo de una cadena de manejadores.

abstract class Handler {
	private nextHandler: Handler;

	public setNext(handler: Handler): Handler {
		this.nextHandler = handler;
		return handler;
	}

	public handle(request: string): string {
		if (this.nextHandler) {
			return this.nextHandler.handle(request);
		}
		return null;
	}
}

class ConcreteHandlerA extends Handler {
	public handle(request: string): string {
		if (request === "A") {
			return `ConcreteHandlerA handled ${request}`;
		}
		return super.handle(request);
	}
}

class ConcreteHandlerB extends Handler {
	public handle(request: string): string {
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
