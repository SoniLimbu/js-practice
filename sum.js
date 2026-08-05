
// Write a program to calculate the sum of first 5 natural numbers using while loop.
let i = 1;
let sum = 0;
while (i <=5) {
    sum =sum +i;
    i ++;
}
console.log(sum);

/// Write a program to calculate the sum of first 5 natural numbers using for loop.
let sum1 = 0;   
for (let i = 1; i <=5; i ++){
    sum1 = sum1 + i;
}
console.log(sum1);

/// Write a program to calculate the sum of first 5 natural numbers using do while loop.
let sum2 = 0;
let j = 1;  

do {
    sum2 = sum2 + j;    
    j ++;
} while (j <=5);
console.log(sum2);

///Sum using function 
function add(x,y ){
    return x + y;
}
let result = add(5,10);
console.log(result);

///sum of even numbers (1 to 20)
let evenSum = 0;

for (let i = 1; i <=20; i ++){
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log(evenSum);

///sum of odd numbers (1 to 20)
let oddSum = 0;
for (let i = 1; i <=20; i ++){
    if (i % 2 !== 0) {
        oddSum += i;
    }
    
}   
console.log(oddSum);
