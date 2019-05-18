//Create a function called squared_sum that returns the squared sum of every integer in an array

function squared_sum(arr) {
  var sum = 0;
    i = arr.length;
  while (i--)
    sum += Math.pow(arr[i], 2);
  return sum;
}


console.log(squared_sum([56, 65, 26, 86, 66, 34, 78, 74, 67, 18, 34, 73, 45, 67, 75, 10, 60, 80, 74, 16, 86, 34, 12, 23, 42, 72, 36, 3, 73, 9, 92, 81, 94, 54, 97, 74, 45, 55, 70, 94, 96, 81, 86, 86, 84, 4, 32, 8, 96, 86, 87, 18, 84, 87, 59, 48, 32, 90, 17, 22, 82, 79, 66, 28, 17, 14, 80, 83, 66, 36, 21, 89, 68, 2, 51, 65, 20, 87, 48, 5, 1, 16, 60, 53, 84, 90, 16, 2, 37, 73, 57, 70, 57, 69, 68, 1, 24, 40, 72, 97])); //should sum to 382629

//console.log(squared_sum([0, 1, 2, 3, 4])); //should sum to 30
