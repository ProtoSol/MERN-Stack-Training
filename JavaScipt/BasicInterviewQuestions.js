// ---------------------------------Difference between TypeOF and InstanceOf

// To check if an object is of a particular type
a instanceof Object;

// To check if an object is of a particular type
typeof(a);

// TypeOf is used to check if an object is of a particular type

// InstanceOf is used to check if an object is of a particular type

// ------------------------------------------------Undefined == Null

undefined == null; // This is True

typeof(undefined); // This is undefined
typeof(null); // This is object

10 + undefined; // This is NaN, undefined is not a number
10 + null; // This is 100, null is represented as 0

undefined === null; // This is false, here typeof(undefined) and typeof(null) are different

// -------------------------------------------------- Difference between === and ==

// === // Strict Equality Operator, first typeof() is checked then the value is checked

// == // Loose Equality Operator, first the value is checked then the typeof() is checked

// ------------------------------------------------- NaN == NaN

NaN == NaN; // This is False, Because NaN is not equal to itself as there might be different situations

NaN === NaN; // This is also False

// ------------------------------------------------ Immutablity and Mutability

// Further refer to [JavaScipt\REST_SPREAD_ergs.js]

var arr = [1,2,3,4,5];
var e = arr; // Copies the Address of arr
// If one is changed the other will change to
// mutability 
var arr = [1,2,3,4,5];
var e = [...arr]; // Clones the array
// If one is changed the other won't be affected
// immutability