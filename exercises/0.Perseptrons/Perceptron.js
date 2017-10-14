const activation = sum => Math.sign(sum) || 1;

class Perceptron {
    constructor () {
        this.weights = [0.5, 0.3];
    }
    guess (inputs) {
        let sum = 0;
        for (let i in this.weights) sum += inputs[i] * this.weights[i];
        return activation(sum)
    }
}

module.exports = Perceptron;