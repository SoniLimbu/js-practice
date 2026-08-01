for (let i = 2; i <= 100; i++) {
    let prime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(i);
    }
}

 /// Function with return

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);

console.log(result);


/// Function returning a string


function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Soni", "Limbu"));

//  Even or Odd


function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}

checkEvenOdd(10);
checkEvenOdd(7);


/// Largest Number


function largest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(largest(20, 10));
console.log(largest(5, 15));


/// Calculate Square


function square(number) {
    return number * number;
}

console.log(square(5));
console.log(square(12));


/// Calculate Area of Rectangle


function area(length, width) {
    return length * width;
}

console.log(area(5, 4));



///Arrow Function


const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(20, 8));

/// Short Arrow Function


const cube = number => number * number * number;

console.log(cube(3));


///Function Expression


const divide = function(a, b) {
    return a / b;
};

console.log(divide(20, 4));



