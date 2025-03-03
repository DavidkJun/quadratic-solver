function solveQuadratic(a, b, c) {
    if(a === 0) {
        throw new Error("a cannot be a 0")
    }
    const D = b * b - 4 * a * c;
    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { roots: 2, values: [x1, x2] };
    } else if (D === 0) {
        const x = -b / (2 * a);
        return { roots: 1, values: [x] };
    } else {
        return { roots: 0, values: [] };
    }
}

module.exports = { solveQuadratic }