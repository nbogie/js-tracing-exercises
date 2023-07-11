const num1 = 10;
const num2 = 20;
function sum(n1, n2) {
    const result = n1 + n2;
    return result;
}
function calcAverage(a, b) {
    const total = sum(a, b);
    return total / 2;
}
const average = calcAverage(num1, num2);
