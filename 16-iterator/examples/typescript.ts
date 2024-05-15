// Iterator: Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado.

interface Iterator<T> {
	next(): T;
	hasNext(): boolean;
}

class ConcreteIterator<T> implements Iterator<T> {
	private collection: T[];
	private position: number = 0;

	constructor(collection: T[]) {
		this.collection = collection;
	}

	public next(): T {
		return this.collection[this.position++];
	}

	public hasNext(): boolean {
		return this.position < this.collection.length;
	}
}

interface Aggregate<T> {
	createIterator(): Iterator<T>;
}

class ConcreteAggregate<T> implements Aggregate<T> {
	private items: T[] = [];

	public addItem(item: T): void {
		this.items.push(item);
	}

	public createIterator(): Iterator<T> {
		return new ConcreteIterator<T>(this.items);
	}
}

const aggregate = new ConcreteAggregate<string>();
aggregate.addItem("Item 1");
aggregate.addItem("Item 2");

const iterator = aggregate.createIterator();

while (iterator.hasNext()) {
	console.log(iterator.next());
}
// Item 1
// Item 2
