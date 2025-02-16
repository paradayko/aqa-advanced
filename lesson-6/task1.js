// Function declaration
function getArea(width, height) {
    return width * height;
}

console.log(getArea(5, 10));

// Function expression
const getArea_2 = function(width, height) {
    return width * height;
}

console.log(getArea_2(3, 8));

// Arrow function expression
const getArea_3 = (width, height) => width * height;

console.log(getArea_3(2, 5));