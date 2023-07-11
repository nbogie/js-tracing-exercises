//@ts-check
const num1 = 10;
const num2 = 20;
const friend = "larry";
function enclosingFunction() {
    const friend = "curly";

    function mySum(a, b) {
        const result = a + b;
        const x = friend;
        return result;
    }
    function myCalcAverage(a, b) {
        const friend = "moe";
        const total = mySum(a, b);
        return total / 2;
    }
    return { mySum, myCalcAverage };
}

const { mySum, myCalcAverage } = enclosingFunction();
const avg = myCalcAverage(num1, num2);
