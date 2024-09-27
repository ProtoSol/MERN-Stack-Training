// Js is a High Level Language

// Types of Data : Number, String, Boolean, Undefined, Null, Symbol, BigInt

// Number

var a;
typeof(a);
a = 10;
typeof(a);
a = "Hello";
typeof(a);


// Number Errors : NaN, -0, Infinity
// Helper Function : isNaN, isFinite

// To grab Number from String
parseInt("10.5"); // To parse Int
parseFloat("10.5"); // To parse Float

// String

// For string we have ', ", `

// For Multiline String
var a = `Hello
World`;

// For String Concatenation
var a = "Hello";
a += "World";

// For Dynamic String
var a = "Pranshu";
var offer = `Dear ${a},
10% off on your first order!`;

// To print
console.log(10);
console.log("Hello");

// Boolean

var a = true;
typeof(a);

a = a + 10;
// This will give 11 as an output

// Undefined + Undefined gives NaN as Output

// Big Integer

// The Range of the Number is -9007199254740991 to 9007199254740991
// Thus we use BigInt

a = 9007199254740992n;
a = BigInt("9007199254740992"); // Through Function

// Symbol
// Null