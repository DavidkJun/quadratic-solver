const fs = require("fs");
const path = require("path");
const {solveQuadratic} = require("./solver");

function fileMode(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`file ${filePath} does not exist`);
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, "utf8").trim();
    const parts = content.split(" ").map(Number);

    if (parts.length !== 3 || parts.some(isNaN)) {
        console.log("invalid file format");
        process.exit(1);
    }

    const [a, b, c] = parts;
    console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

    try {
        const result = solveQuadratic(a, b, c);
        console.log(`There are ${result.roots} root(s)`);
        result.values.forEach((root, index) => console.log(`x${index + 1} = ${root}`));
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

if (process.argv.length === 3) {
    fileMode(process.argv[2]);
}
