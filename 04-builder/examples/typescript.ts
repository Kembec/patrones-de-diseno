// Builder: Separa la construcción de un objeto complejo de su representación.

class Product {
	public parts: string[] = [];

	public addPart(part: string): void {
		this.parts.push(part);
	}

	public showParts(): void {
		console.log(this.parts.join(", "));
	}
}

interface Builder {
	reset(): void;
	buildPartA(): void;
	buildPartB(): void;
	getResult(): Product;
}

class ConcreteBuilder implements Builder {
	private product: Product;

	constructor() {
		this.product = new Product();
	}

	reset(): void {
		this.product = new Product();
	}

	buildPartA(): void {
		this.product.addPart("Part A");
	}

	buildPartB(): void {
		this.product.addPart("Part B");
	}

	getResult(): Product {
		return this.product;
	}
}

class Director {
	private builder: Builder;

	setBuilder(builder: Builder): void {
		this.builder = builder;
	}

	construct(): void {
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
