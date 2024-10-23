// Functions in JavaScript

// Javascript is a functional language

// ----------------------------------------------------------- Simple Function

function show(x,y) {
    return x+y;
}

console.log(show(10,20)); // Shows the Output


// [QUESTION] - If we write function call before function body ? 

disp();
function disp() {
    console.log("Hello");
}

// Here In the Compilation pass the Lisping is performed and the function body
// is stored in the memory above the function call. This process is of Hoisting
// Thus this will work in the same way it would normally.

// ----------------------------------------------------------- Function Expression or Anonymous Function

var a = 10 + 20; // This is a Variable Expression

// Below is example of a Function Expression
var show = function(x,y) {
    return x+y;
}
console.log(show(10,20)); // 30
typeof(show); // Function

// [Question] - What happens if we write the call before the definition ?

add();
var add = function(x,y) {
    return x+y;
}

// Again the process of Hoisting is performed and the function body is stored
// in the memory above the function call, But the call will give a TypeError as the
// The expression is undefined at the time of hoisting.

// [Question] - Use Cases of Anonymous Functions ?

// It is used when you want to create a function without a name
// It is used when you want to pass a function as an argument
// It is used when you want to return a function

// [Question] - To Improve the readability of the code we can add names with the function expressions

var show = function add(x,y) {
    return x+y;
}
console.log(show(10,20));

// Another way
function calc(){
    var add = function(x,y) {
        return x+y;
    }
    var sub = function(x,y) {
        return x-y;
    }
    // return {"add":add,"sub":sub}; // Wrap in an object and returns it
    return {add,sub}; // In ECMA 6 the add and subs becomes key values automatically
}

var obj = calc();
obj; // {add: ƒ, sub: ƒ}  : As output in the console
console.log(obj.add(10,20)); // To use the addition with better readability.


// ----------------------------------------------------------- Arrow Function - ES6

// Shorthand way of writing functions
// Preferred for one liner functions 

function add(x,y) { // If the function is a one liner function
    return x+y;
}
const add = (x,y) => x+y; // This is an arrow function

// For Multi Line functions
var adder2 = (x,y) => {
    console.log('X is ', x, 'Y is ', y);
    return x+y;
}
// In this case the return statement and the curly braces are used.

// If we have only one argument we can remove the Parenthesis
var adder3 = x => x+10;

// ----------------------------------------------------------- Using new keyword

var h = new Function(/* The Function Code */);
var add = new Function("x,y","return x+y;");