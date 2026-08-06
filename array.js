///Create an Array
///To create an array in JavaScript, you can use the following syntax: 
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(fruits);

///Access Array Elements
///You can access individual elements of an array using their index. The index starts from 0 for the first element, 1 for the second element, and so on. Here's how you can access elements in the fruits array:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

///Array Length
///You can find the length of an array using the length property. It returns the number of elements in the array. Here's how you can get the length of the fruits array:
console.log(fruits.length);

///Add Elements to an Array
///You can add elements to an array using the push() method. The push() method adds one or more elements to the end of an array. Here's how you can add elements to the fruits array:
fruits.push("mango");
console.log(fruits);

///Add first element (unshift)
///You can add an element to the beginning of an array using the unshift() method. The unshift() method adds one or more elements to the start of an array. Here's how you can add an element to the fruits array:
fruits.unshift("strawberry");
console.log(fruits);

///Remove first element (shift)
///You can remove the first element from an array using the shift() method. The shift() method removes the first element from an array and returns that removed element. Here's how you can remove the first element from the fruits array:
fruits.shift();
console.log(fruits);