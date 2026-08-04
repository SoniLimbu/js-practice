///Normal function
function greet(soni) {
    return "Hello " + soni;
} 
console.log(greet("soni"));

///Arrow function


const greetArrow = (priya) => {
    return "Hello " + priya;
};

console.log(greetArrow("priya"));

///Arrow function (one parameter)
const square = number => number * number;
console.log(square(5));

///Short Arrow function (no parameter)
const greetShort = () => "Hello World";
console.log(greetShort());

///Short Arrow function 
/// No return Keyword needed 
const cube = number => number * number * number;
console.log(cube(3));

///Function Expression
const divide = function(a, b) {
    return a /b ;
};
console.log(divide(20,4));

///Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 6));

///Function Expression
const subtract = function (a,b) {
    return a -b;
}
console.log(subtract(20,8));

///Function Expression
const largest = function(a,b) {
    if (a >b){
        return a 
        
    }
    return b;
}
console.log(largest(20, 10));
console.log(largest(5, 15));

///Function Expression
const area = function(length, width) {
    return length * width;
}   
console.log(area(5, 4));

///Arrow function with two parameters
const add = (a,b) => {
    return a + b;
}
console.log(add(10,5));

