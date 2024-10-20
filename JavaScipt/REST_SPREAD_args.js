// Rest Arguments

// rest vs arguments

function show(){
    console.log(arguments.length);
}

// This gives 0
show();

// This gives 3
show(1,2,3);

// By default javascript will take n number of arguments
// This function doesnt show this takes n arguments

// for eg console.log( shows ...data in the box clearly stating it takes n arguments.


function show(...a){
    console.log(a.length);
}
// ECMA 6 made this a feature

// The arguments is not an instance of array but in the function ...a is an instance of array

function disp(...a){
    a.push(100);
    arguments.push(100);

    console.log(a.length);
    console.log(a instanceof Array);
    console.log(arguments instanceof Array);
}

// Rest Arguments

// Rest Arguments allows us to group the arguments and make it easier to work with it
// ... is used to define rest arguments
// The arguments are grouped into an array
// Rest Arguments should be the last argument in the function

function show(a, b, ...c){
    console.log(a);
    console.log(b);
    console.log(c instanceof Array);
}

show(1,2,3,4,5);

// Output
// 1
// 2
// true


function show(...a){
    console.log(a.length);
} // On Function level rest is used
var x = [1,2,3,4,5];
var y = [...x]; // This is spread operator


var arr = [1,2,3,4,5];
var e = arr; // Copies the Address of arr
// If one is changed the other will change to
// mutability 
var arr = [1,2,3,4,5];
var e = [...arr]; // Clones the array
// If one is changed the other won't be affected
// immutability

// Thus Rest VS Spread

function show(a, b, ...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

show(1,2,3,4,5);    // 1 2 [3,4,5]

// Rest Arguments is used in functions
// Spread Arguments is used in Arrays

// Spread Example

var arr =[1,2,3,4,5];
var arr2 = [...arr,6,7,8,9,10];
var arr3 = [...arr, ...arr2];
console.log(arr3);

var emp = {empId: 1, empName: "John"};
var emp2 = {...emp, empSalary: 10000};
var emp3 = {...emp, ...emp2}; // Clone is made
// The Same fields are ovverridden by the first one, the unique fields are merged
console.log(emp3);

var emp={id: 1, name: "John"};
var emp2 = {id :10, salary: 10000};
var emp3 = {emp, emp2}; // Refrence is passed

