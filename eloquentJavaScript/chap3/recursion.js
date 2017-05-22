// Modulo (%) can be used to test if a number is even or odd by using % 2
// to check whether it's divisible by two.
// Another way is;
// Zero is even, One is odd, for any other number N, its evenness is the
// same as N - 2.
// Define a recursive function isEven corresponding to this description.
// The function should accept a number parameter and return a Boolean.

function isEven(N) {
  if (N == 0)
    return true;
  else if (N == 1)
    return false;
  else
    return isEven(N - 2);
}

console.log(isEven(21));
