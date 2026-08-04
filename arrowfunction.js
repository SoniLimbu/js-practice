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

