# Javascript Foundation II

- [Javascript Foundation II](#javascript-foundation-ii)
  - [Execution Context](#execution-context)
  - [Lexical Environment](#lexical-environment)
  - [Hoisting](#hoisting)
  - [Function Invocation](#function-invocation)
    - [Function Expression](#function-expression)
    - [Function Declaration](#function-declaration)
  - [arguments KEYWORD](#arguments-keyword)
  - [Variable Environment](#variable-environment)
  - [Scope Chain](#scope-chain)
  - [[[scope]]](#scope)
  - [Exercise: JS is Weird](#exercise-js-is-weird)
  - [Function Scope vs Block Scope](#function-scope-vs-block-scope)
    - [Exercise:](#exercise)
  - [Global Variables](#global-variables)
  - [IIFE: Immediately Invoked Function Expression](#iife-immediately-invoked-function-expression)
  - [this Keyword](#this-keyword)
    - [Benefits](#benefits)
    - [Exercise: Dynamic Scope vs Lexical Scope](#exercise-dynamic-scope-vs-lexical-scope)
  - [call(), apply(), bind()](#call-apply-bind)
    - [Exercise: call(), apply()](#exercise-call-apply)
  - [bind(), currying](#bind-currying)
  - [Exercise: this Keyword](#exercise-this-keyword)
  - [Context vs Scope](#context-vs-scope)

## Execution Context
```javascript
function printName() {
    return 'George Kaplan'
}

function findName() {
    return printName()
}

function sayMyName() {
    return findName()
}

sayMyName()
```

## Lexical Environment
In javascript our **lexical scope** (available data + variables where the function was defined) determines our available variables. Not where the function is called (**dynamic scope**)

## Hoisting
```javascript
console.log('1--------')
console.log(teddy)
console.log(sing2)
var teddy = 'bear'; // variable declarations are partially hoisted

// function expression
var sing2 = function() {
  console.log('uuhh la la la')
} // only partial hoisting since it is a variable declaration

console.log(sing2())

// function declaration
function sing() {
    console.log('ohhh la la la')
}
```
[Exercise 1](https://repl.it/@aneagoie/hoisting)
[Exercise 2](https://repl.it/@aneagoie/hoisting-2)
[Exercise 3](https://repl.it/@aneagoie/hoisting-exe)

[Exercises](https://repl.it/@wmemorgan/JavascriptFundamentalsII)

## Function Invocation
Terms used:
  * Invocation
  * Call
  * Execution

### Function Expression
A function defined inside a variable. Gets defined at run-time.
```javascript
var canada = function() {
    console.log('cold')
}
```

### Function Declaration
Directly assign a specific name to a function. Gets defined at parse time.
```javascript
function india() {
    console.log('warm')
}

canada()
india()
```

## arguments KEYWORD
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

- Is an object that stores any function arguments
- If no arguments are passed it returns an empty object
- It is _safer_ to return `arguments` as an array (`Array.from(arguments)`) 

[Lecture repl](https://repl.it/@aneagoie/functions-and-arguments)

```javascript
function marry(person1, person2) {
  console.log(arguments) 
  return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina')
/*--returns--*/
//[Arguments] { '0': 'Tim', '1': 'Tina' }
//Tim is now married to Tina 
```

## Variable Environment
A place where variables within an execution context are stored

[Lecture Demo](https://repl.it/@aneagoie/Variable-Environment)

## Scope Chain

Gives functions access to variables in the function's parent.

[Lecture Demo](https://repl.it/@aneagoie/Scope-Chain)
[My Demo](https://repl.it/@wmemorgan/Scope-Chain)

_**REMINDER**: In javascript our **lexical scopre** (available data + variables where the function was defined) determines our available variables. Not where the function is called (**dynamic scope**)_


## [[scope]]
A property in a function that displays the function's global environment

## Exercise: JS is Weird
[Exercise](https://repl.it/@aneagoie/JS-is-Weird)
[My Exercise Notes]()


## Function Scope vs Block Scope
- Function Scope: Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.
- Block Scope: A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

### Exercise:
[Exercise](https://repl.it/@aneagoie/Block-Scope-vs-Function-Scope)
[My Solution]()

## Global Variables
Avoid, or greatly minimize, using when possible (_Instructor considers them **evil**_)

## IIFE: Immediately Invoked Function Expression
```javascript
(function() { //bracket enclosure makes it a function expression

})();
```

[Lecture](https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772914)

Place all library code inside local function scope to avoid any namespace collisions

## this Keyword
`this` is the object that the function is a property of

```javascript
obj.someFunc(this)
```

### Benefits
1. Gives methods access to their objects
2. Execute the same code for multiple objects

[Lecture Demo](https://repl.it/@aneagoie/this)
[My Code Along](https://repl.it/@wmemorgan/this)


[Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)


### Exercise: Dynamic Scope vs Lexical Scope
[Exercise](https://repl.it/@aneagoie/dynamic-scope)
[My Solution](https://repl.it/@wmemorgan/dynamic-scope)

**NOTE**: `this` Keyword is **not** lexically scoped


## call(), apply(), bind()
All methods allow you to write a method that can be used on different objects.
- call(): Takes arguments separately
- apply(): Takes arguments as an array
- bind(): Returns a function to be used later


[Lecture Demo](https://repl.it/@aneagoie/call-apply-bind)
[Code Along](https://repl.it/@wmemorgan/call-apply-bind)

### Exercise: call(), apply()
How would you implement this:
```javascript
const array = [1,2,3];
 
function getMaxNumber(arr){
  return arr[arr.length -1] 
}
 
getMaxNumber(array) // should return 3
```

[Solution](https://repl.it/@aneagoie/this-exe-2)


## bind(), currying

[Lecture Demo](https://repl.it/@aneagoie/bind-again)

## Exercise: this Keyword

[Solution](https://repl.it/@aneagoie/this-keyword-exercise)
[My Solution](https://repl.it/@wmemorgan/this-keyword-exercise)

## Context vs Scope

- Scope: function based concept. It addresses the variable access of a function when it is invoked.
- Context: object based concept. What's the value of the `this` keyword. A reference to the object that owns the executing code
