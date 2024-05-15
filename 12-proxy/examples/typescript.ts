// Proxy: Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.

interface Subject {
	request(): string;
}

class RealSubject implements Subject {
	request(): string {
		return "RealSubject Request";
	}
}

class Proxy implements Subject {
	private realSubject: RealSubject;

	constructor(realSubject: RealSubject) {
		this.realSubject = realSubject;
	}

	request(): string {
		console.log(
			"Proxy: Checking access before forwarding request to RealSubject."
		);
		return this.realSubject.request();
	}
}

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

console.log(proxy.request()); // Proxy: Checking access before forwarding request to RealSubject. \n RealSubject Request
