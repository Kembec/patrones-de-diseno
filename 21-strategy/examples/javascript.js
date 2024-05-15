// Strategy: Define una familia de algoritmos, encapsula cada uno, y los hace intercambiables.

class Context {
	setStrategy(strategy) {
		this.strategy = strategy;
	}

	executeStrategy(data) {
		return this.strategy.doAlgorithm(data);
	}
}

class Strategy {
	doAlgorithm(data) {}
}

class ConcreteStrategyA extends Strategy {
	doAlgorithm(data) {
		return data.sort();
	}
}

class ConcreteStrategyB extends Strategy {
	doAlgorithm(data) {
		return data.reverse();
	}
}

const context = new Context();

context.setStrategy(new ConcreteStrategyA());
console.log(context.executeStrategy([3, 1, 2])); // [1, 2, 3]

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy([3, 1, 2])); // [2, 1, 3]
