class Strategy {
    execute(point_a: number, point_b: number): number {
        console.log("Executing strategy with points:", point_a, point_b);
        return point_a + point_b;
    }
}
class concreteStrategyAdd extends Strategy {
    execute(point_a: number, point_b: number): number {
        console.log("Executing addition strategy with points:", point_a, point_b);
        return point_a + point_b;
    }
}
class concreteStrategySubtract extends Strategy {
    execute(point_a: number, point_b: number): number {
        console.log("Executing subtraction strategy with points:", point_a, point_b);
        return point_a - point_b;
    }
}
class concreteStrategyMultiply extends Strategy {
    execute(point_a: number, point_b: number): number {
        console.log("Executing multiplication strategy with points:", point_a, point_b);
        return point_a * point_b;
    }
}
class concreteStrategyDivide extends Strategy {
    execute(point_a: number, point_b: number): number {
        if (point_b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        console.log("Executing division strategy with points:", point_a, point_b);
        return point_a / point_b;
    }
}
class context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    executeStrategy(point_a: number, point_b: number): number {
        return this.strategy.execute(point_a, point_b);
    }
}
class exampleApp{
    static main(): void {
        const contextInstance = new context(new concreteStrategyAdd());
        console.log("Result of addition:", contextInstance.executeStrategy(5, 3));

        contextInstance.setStrategy(new concreteStrategySubtract());
        console.log("Result of subtraction:", contextInstance.executeStrategy(5, 3));

        contextInstance.setStrategy(new concreteStrategyMultiply());
        console.log("Result of multiplication:", contextInstance.executeStrategy(5, 3));

        contextInstance.setStrategy(new concreteStrategyDivide());
        console.log("Result of division:", contextInstance.executeStrategy(6, 3));
    }
}
exampleApp.main();