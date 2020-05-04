# Javascript Foundation II

- [Javascript Foundation II](#javascript-foundation-ii)
  - [Execution Context](#execution-context)
  - [Lexical Environment](#lexical-environment)
  - [Hoisting](#hoisting)
  - [Function Invocation](#function-invocation)
    - [Function Expression](#function-expression)
    - [Function Declaration](#function-declaration)
    - [arguments KEYWORD](#arguments-keyword)

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

### arguments KEYWORD
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

