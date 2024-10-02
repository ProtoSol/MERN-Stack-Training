// Arguments
function add(){
    var sum =0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

add(1,2,3,4,5);
// This will give 15, thus we can give n arguments to the function block

// What happens if we add String in the arguments to the function block

add(1,2,3,4,"5");
// We get the result as 105 as a String
// To fix this we can use Implicit type conversion

function add(){
    var sum =0;
    for(let i = 0; i < arguments.length; i++){
        sum = sum + parseInt(arguments[i]);
    }
    return sum;
}

// If the person add "eight" as an argument we need to use isNaN()

function add(){
    var sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum = sum + (isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]));
    }
    return sum;
}


// There can also be some cases where a function is used as an argument to another function
// In this case we need to use arguments.callee

function add(){
    var sum = 0;
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === "function"){
            sum = sum + (isNaN(parseInt(arguments[i]())) ? 0 : parseInt(arguments[i]()));
        } else {
            sum = sum + (isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]));
        }
    }
    return sum;
}

add(1,2,3,4,5, function(){return 100});

// Now this function can use number, string, and functions

// If the agrument is an Array

function add(){
    var sum = 0;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] instanceof Array){
            for(let j = 0; j < arguments[i].length; j++){
                if(typeof arguments[i][j] === "function"){
                    sum = sum + (isNaN(parseInt(arguments[i][j]())) ? 0 : parseInt(arguments[i][j]()));
                } else {
                    sum = sum + (isNaN(parseInt(arguments[i][j])) ? 0 : parseInt(arguments[i][j]));
                }
            }
        } else {
            if(typeof arguments[i] === "function"){
                sum = sum + (isNaN(parseInt(arguments[i]())) ? 0 : parseInt(arguments[i]()));
            } else {
                sum = sum + (isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]));
            }
        }
    }
    return sum;
}

add(1,2,3,4,5, function(){return 100}, [1,2,3,4,5,function(){return 100}]);

// Default arguments
function add(x, y){
    return x + y;
}

add(10,20); // Works
add(10); // Gives NaN as result
add(10,20,30); // Gives NaN as result

// To make defualt arguments we use = operator

function add(x = 0, y = 0){
    return x + y;
}
add(10); // This will work now
// This feature was added in ECKMA 6

// Before we used Truthy and Falsy values
// Now we use Null and Undefined
// This is called Truthy and Falsy values

if(10){
    console.log("Truthy");
} else {
    console.log("Falsy");
} 
// returns truthy for valid arguments
// returns falsy for invalid arguments

function add(x,y){
    x = x||0;
    y = y||0;
    return x + y;
}