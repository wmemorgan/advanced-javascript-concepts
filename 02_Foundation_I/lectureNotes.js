// Javascript Engine
function jsengine(code) {
	return code.split(/\s+/);
}

console.log(jsengine("let a = 5"));

// interpreter vs compiler
function someCalculation(x, y) {
	return x + y;
}

for (let i = 0; i < 1000; i++) {
	someCalculation(5, 4);
}

// inline caching
function findUser(user) {
	return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
	firstName: "George",
	lastName: "Kaplan",
};

console.log(findUser(userData));

// hidden classes
function Animal(x, y) {
	this.x = x;
	this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// Assign all properties inside the constructor or do it in order
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

// Call Stack and Memory Heap
const num = 610; //allocate memory for number
const str = "some text"; //allocate memory for a string
const human = {
	//allocate memory for an object...and it's values
	first: "George",
	last: "Kaplan",
};
function subtractTwo(num) {
	return num - 2;
}
function calculate() {
	const sumTotal = 4 + 5;
	return subtractTwo(sumTotal);
}

console.log(calculate());

/*---MEMORY LEAKS---*/
// Global Variables
var a = 1;
var b = 1;
var c = 1;

// Event Listeners
var element = document.getElementById('button')
element.addEventListener('click', onClick)

// setInterval
setInterval(() => {
	// referencing objects
})
