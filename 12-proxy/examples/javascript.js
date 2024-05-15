// Proxy: Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.

class RealSubject {
	request() {
		return "RealSubject Request";
	}
}

class Proxy {
	constructor(realSubject) {
		this.realSubject = realSubject;
	}

	request() {
		console.log(
			"Proxy: Checking access before forwarding request to RealSubject."
		);
		return this.realSubject.request();
	}
}

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

console.log(proxy.request()); // Proxy: Checking access before forwarding request to RealSubject. \n RealSubject Request
