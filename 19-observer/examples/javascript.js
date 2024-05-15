// Observer: Define una dependencia de uno a muchos entre objetos.

class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	notifyObservers() {
		this.observers.forEach((observer) => observer.update());
	}
}

class ConcreteSubject extends Subject {
	constructor() {
		super();
		this.state = null;
	}

	setState(state) {
		this.state = state;
		this.notifyObservers();
	}

	getState() {
		return this.state;
	}
}

class Observer {
	update() {}
}

class ConcreteObserver extends Observer {
	constructor(subject) {
		super();
		this.subject = subject;
	}

	update() {
		console.log(
			`Observer: Reacted to the state change to ${this.subject.getState()}`
		);
	}
}

const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver(subject);
const observer2 = new ConcreteObserver(subject);

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState("State1"); // Observer: Reacted to the state change to State1
subject.setState("State2"); // Observer: Reacted to the state change to State2
