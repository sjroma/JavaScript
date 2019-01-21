function double(a) {
	return a * 2;
}

console.log(double(8));
console.log(double(12));
console.log(double(4));

// a function declaration
function addThree(x) {
	return x + 3;
}

// calling that same function:
// function name, followed by a pair or parens
// with an "argument" between the parens
var result = addThree(7): // returns '10'
console.log(result);

// another function declaration
// inside a function body you can do as much work as you need.  You can declare
// variables, use operators, even declard and use other functions.  Once you're done, use the
// return keyword to specify what data your function call will return.  Observe:
function doubleAndAddTax(price) {
	var result = price * 2;
	result = result * 1.07;
	return result;
}

console.log(doubleAndAddTax(35));


function sentence(string1, string2) {
   var speech = string1 + string2;
   return speech;
}


// Write a function called sentence that concatenates two strings and returns the result. 
// You'll need two parameters to make this work.
function sentence(string1, string2) {
   var speech = string1 + string2;
   return speech;
}

var speech = sentence("Howdy ", "folks!");
sentence;
console.log(speech);


// As you've already seen in the previous exercises, JavaScript functions can accept more 
// than one parameter (or none at all). The order of the arguments will relate directly to 
// the order of the parameters. Additional parameters and arguments (sometimes shortened to
// params and args) should be separated by commas.
function announceParams(a, b, c){
	console.log("Param a is " + a);
	console.log("Param b is " + b);
	console.log("Param c is " + c);
}

announceParams("root beer", 24, "$3.40");


// Define a function called difference, with two parameters, 
// that returns the difference between two values.
function difference(a, b){
  diff = a - b;
  return diff
}
ß∑
console.log(result);

// Madlibs code
var people = ["Alice", "Bob", "Carol"];
var verbs = ["yelps", "chatters", "blurts"];
var phrases = ["loves rock and roll", "was eaten by a lion", "walked across the street"];
var nouns = ["turtle", "book", "tomato"];

madlibs(people, verbs, phrases, nouns);
// "Alice chatters about the turtle who loves rock and roll."

madlibs(people, verbs, phrases, nouns);
// "Bob blurts about the book who walked across the street."

madlibs(people, verbs, phrases, nouns);
// "Carol yelps about the tomato who was eaten by a lion."


// Generating random integers is a common task in programming. Unfortunately, JavaScript's 
// primary way of doing this is slightly clunky. It requires calling two functions from the 
// Math object, and multiplying one of the results by another number.
console.log( Math.random() ); // prints a random decimal between 0 and 1
console.log( Math.random() * 10 ); // random number between 0 and 10
console.log( Math.floor(1.99) ); // round down to integer
console.log( Math.floor(Math.random() * 10) ); // random between/including 0 and 9
console.log( Math.floor(Math.random() * 9) + 1); // random between/including 1 and 10

// As you can see, Math.floor() will round a decimal down to its nearest integer, and 
// Math.random() will generate a decimal between 0 and 1. Using + and * operators, we can 
// generate specific ranges of whole numbers. Here's a version of this as a function. Feel 
// free to copy and paste this into the upcoming exercises to make generating random numbers easier:
// generates value of 0, x - 1, or an integer in between
function random(x) {
  return Math.floor(Math.random() * x);
}

// uncomment below to try it out
// console.log(random(6));
