class Calculator {
    // Write functions to add(), subtract(), multiply() and divide()
    add(a,b){
        return a + b
    }
    subtract(a,b){
        return a - b
    }
    multiply(a,b){
        return a * b
    }
    divide(a,b){
        return a /b
    }
}

const calculator = new Calculator()

console.log(calculator.add(10,5))
console.log(calculator.subtract(10,5))
console.log(calculator.multiply(10,5))
console.log(calculator.divide(10,5))