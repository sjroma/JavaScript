/*
Write a program that uses console.log to print all the numbers
from 1 to 100, with two exceptions. For numbers divisible by 3,
print "Fizz" instead of the number and for numbers divisible by
5 (and not 3), print "Buzz" instead.
When that's working, modify the program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5.
*/

/*
 my solution
for (var i = 1; i <= 100; i++) {
      if (i % 5 == 0 && i % 3 == 0)
              console.log("FizzBuzz");
  else if (i % 3 == 0)
              console.log("Fizz");
  else if (i % 5 == 0)
              console.log("Buzz");
  else
    console.log(i);
}
*/

// my original solution revamped based on the authors solution
// his solution is still more eloquent (i.e. lots shorter)
for (var i = 1; i <= 100; i++) {
  var output = "";
  if (i % 5 === 0 && i % 3 === 0)
    output = "FizzBuzz";
  else if (i % 3 === 0)
    output = "Fizz";
  else if (i % 5 === 0)
    output = "Buzz";
  console.log(output || i);
}

// Authors solution
// for (var n = 1; n <= 100; n++) {
//   var output = "";
//   if (n % 3 == 0)
//     output += "Fizz";
//   if (n % 5 == 0)
//     output += "Buzz";
//   console.log(output || n);
// }
