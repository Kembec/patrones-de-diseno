// Observer: Define una dependencia de uno a muchos entre objetos.

interface Observer {
	update(subject: Subject): void;
}

class Subject {
	private observers: Observer[] = [];
	private state: string;

	public getState(): string {
		return this.state;
	}

	public setState(state: string): void {
		this.state = state;
		this.notifyObservers();
	}

	public addObserver(observer: Observer): void {
		this.observers.push(observer);
	}

	public removeObserver(observer: Observer): void {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	public notifyObservers(): void {
		this.observers.forEach((observer) => observer.update(this));
	}
}

class ConcreteObserver implements Observer {
	public update(subject: Subject): void {
		console.log(
			`Observer: Reacted to the state change to ${subject.getState()}`
		);
	}
}

const subject = new Subject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState("State1"); // Observer: Reacted to the state change to State1
subject.setState("State2"); // Observer: Reacted to the state change to State2
