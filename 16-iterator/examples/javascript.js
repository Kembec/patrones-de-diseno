// Iterator: Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado.

class Iterator {
	next() {}
	hasNext() {}
}

class ConcreteIterator extends Iterator {
	constructor(collection) {
		super();
		this.collection = collection;
		this.position = 0;
	}

	next() {
		return this.collection[this.position++];
	}

	hasNext() {
		return this.position < this.collection.length;
	}
}

class Aggregate {
	createIterator() {}
}

class ConcreteAggregate extends Aggregate {
	constructor() {
		super();
		this.items = [];
	}

	addItem(item) {
		this.items.push(item);
	}

	createIterator() {
		return new ConcreteIterator(this.items);
	}
}

const aggregate = new ConcreteAggregate();
aggregate.addItem("Item 1");
aggregate.addItem("Item 2");

const iterator = aggregate.createIterator();

while (iterator.hasNext()) {
	console.log(iterator.next());
}
// Item 1
// Item 2
