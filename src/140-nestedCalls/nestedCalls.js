const num1 = 10;

function a(param1) {
    return param1 * 2;
}

function b(param1) {
    return param1 + 1;
}

const result = a(b(num1) + 10);
