// Strategy: Define una familia de algoritmos, encapsula cada uno, y los hace intercambiables.

interface Strategy {
	doAlgorithm(data: number[]): number[];
}

class ConcreteStrategyA implements Strategy {
	public doAlgorithm(data: number[]): number[] {
		return data.sort();
	}
}

class ConcreteStrategyB implements Strategy {
	public doAlgorithm(data: number[]): number[] {
		return data.reverse();
	}
}

class Context {
	private strategy: Strategy;

	public setStrategy(strategy: Strategy): void {
		this.strategy = strategy;
	}

	public executeStrategy(data: number[]): number[] {
		return this.strategy.doAlgorithm(data);
	}
}

const context = new Context();

context.setStrategy(new ConcreteStrategyA());
console.log(context.executeStrategy([3, 1, 2])); // [1, 2, 3]

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy([3, 1, 2])); // [2, 1, 3]
