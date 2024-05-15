// Builder: Separa la construcción de un objeto complejo de su representación.

class Product {
	constructor() {
		this.parts = [];
	}
	addPart(part) {
		this.parts.push(part);
	}
	showParts() {
		console.log(this.parts.join(", "));
	}
}

class Builder {
	reset() {}
	buildPartA() {}
	buildPartB() {}
	getResult() {}
}

class ConcreteBuilder extends Builder {
	constructor() {
		super();
		this.product = new Product();
	}

	reset() {
		this.product = new Product();
	}

	buildPartA() {
		this.product.addPart("Part A");
	}

	buildPartB() {
		this.product.addPart("Part B");
	}

	getResult() {
		return this.product;
	}
}

class Director {
	setBuilder(builder) {
		this.builder = builder;
	}

	construct() {
		this.builder.reset();
		this.builder.buildPartA();
		this.builder.buildPartB();
	}
}

const builder = new ConcreteBuilder();
const director = new Director();

director.setBuilder(builder);
director.construct();

const product = builder.getResult();
product.showParts(); // Part A, Part B
