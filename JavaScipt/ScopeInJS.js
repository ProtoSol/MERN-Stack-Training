// Scoping in JavaScript

// JavaScript follows Lexical Scoping

// 1. Global Scope
// 2. Module Scope
// 3. Function Scope
// 4. Block Scope

// ---------------------------------------------------------------------------- Global Scope

var a = 10; // This is a global variable
let b = 20; // This is a global variable
const c = 30; // This is a global variable

function show() {
    console.log(a); // Global variables can be accessed anywhere
    console.log(b);
    console.log(c);
}

// Global Variable binds with the window
// This access means that it can be overwritten by any other variable

// ------------------------------------------------------------------------- Module Scope

// We use the (import , export) keyword to import and export modules

// In file 1
class Transaction{
    constructor(id = 0, desc="", amount=0){
        this.id = id;
        this.desc = desc;
        this.amount = amount;
    }
    toggleMark(){
        this.isDeleted = !this.isDeleted;
    }
}
export default Transaction;

// In file 2

import Transaction from "./Transaction.js"; // To Import the File

// And it can be used in The current File

// ------------------------------------------------------------------------- Function Scope

function show() {
    let a = 10;
    console.log(a);
}

console.log(a); // This gives error as it is being used in global scope

// ------------------------------------------------------------------------- Block Scope

for(let i=0; i<10; i++){
    console.log(i);
}
console.log(i); // Error 
// This will give an Error as it is being used in block scope and cannot be accessed outside the block
