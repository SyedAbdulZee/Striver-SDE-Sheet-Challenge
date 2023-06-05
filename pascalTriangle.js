function nCr(n, r) {
    let res = 1;
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
}
function pascalTriangle(r, c) {
    element = nCr(r - 1, c - 1);
    return element;
}

console.log(pascalTriangle(5, 3));