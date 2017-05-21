// My solution...it works!
for (var number = 1; number <= 100; number++)
  if (number % 3 == 0 && number % 5 == 0) console.log("FizzBuzz");
  else if (number % 3 == 0) console.log("Fizz");
  else if (number % 5 == 0) console.log("Buzz");
  else console.log(number);

// Authors solution
// for (var n = 1; n <= 100; n++) {
//   var output = "";
//   if (n % 3 == 0)
//     output += "Fizz";
//   if (n % 5 == 0)
//     output += "Buzz";
//   console.log(output || n);
// }
