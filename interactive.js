const readline = require("readline-sync");
const { solveQuadratic } = require("./solver");

function getNumberInput(prompt) {
    while (true) {
        const input = readline.question(prompt);
        const num = parseFloat(input);
        if (!isNaN(num)) return num;
        console.log(`Error. Expected a valid real number, got ${input} instead`);
    }
}

function interactiveMode() {
    console.log("Quadratic Equation Solver");

    const a = getNumberInput("a = ");
    const b = getNumberInput("b = ");
    const c = getNumberInput("c = ");

    console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

    const result = solveQuadratic(a, b, c);
    console.log(`There are ${result.roots} root(s)`);
    result.values.forEach((root, index) => console.log(`x${index + 1} = ${root}`));
}

if (process.argv.length === 2) {
    interactiveMode();
}
