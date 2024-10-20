// Type of References in Java Script

var arr = [1,2,3,4,5];
// Here arr is Array Literal

var x = 10;
// Here x is a Number Literal

var y = "Pranshu";
// Here y is a String Literal

// IF we want to store a data we use a Reference Type
var phones = {"ram":1223123, "brand": "Apple"};
// Keys Unique
// Values can be Same

// phone is an instance of Object
// arr is an instance of Array and Object

// Phone's data can be accessed like this
// Using []
phones["ram"];
// Using Dot Notation
phones.ram;
// We cannot access Numeric Keys and keys with spaces using Dot Notation

// Square Brackets can be used to access keys using different variables
var key = "ram";
phones[key];
// Making this Dynamic and Iterable

