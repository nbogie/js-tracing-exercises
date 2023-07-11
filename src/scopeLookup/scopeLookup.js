//@ts-check
const num1 = 10;
const num2 = 20;
const name = "larry";
function enclosingFunction() {
    const name = "curly";

    function mySum(a, b) {
        const result = a + b;
        const x = name;
        return result;
    }
    function myCalcAverage(a, b) {
        const name = "moe";
        const total = mySum(a, b);
        return total / 2;
    }
    return { mySum, myCalcAverage };
}

const { mySum, myCalcAverage } = enclosingFunction();
const avg = myCalcAverage(num1, num2);
