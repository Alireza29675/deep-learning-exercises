const activation = sum => Math.sign(sum) || 1;
const rand = (a, b) => Math.random() * (b - a) + a;

class Perceptron {
    constructor () {
        this.weights = [rand(-1, 1), rand(-1, 1)];
    }
    guess (inputs) {
        let sum = 0;
        for (let i in this.weights) sum += inputs[i] * this.weights[i];
        return activation(sum)
    }
    train (inputs, target) {
        const guess = this.guess(inputs);
        const error = target - guess;

        // Tune all the weights
        for (let i in this.weights) {
            this.weights[i] += error * inputs[i];
        }
    }
}

module.exports = Perceptron;