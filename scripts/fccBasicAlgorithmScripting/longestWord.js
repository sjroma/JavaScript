//Find the Longest Word in a String
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
  var eachWord = str.split(" ");
  var longestWord = 0;
//  console.log("Split words are ",eachWord);
  for (var i = 0; i < eachWord.length; i++) {
    if (eachWord[i].length > longestWord) {
      longestWord = eachWord[i].length;
    }
  }
  console.log("The longest word length is",longestWord,"characters");
  return longestWord;
}

//findLongestWordLength("The quick brown fox jumped over the lazy dog");
//findLongestWordLength("The quick brown fox jumped over the lazy dog") //should return 6.
//findLongestWordLength("May the force be with you") //should return 5.
//findLongestWordLength("Google do a barrel roll") //should return 6.
//findLongestWordLength("What is the average airspeed velocity of an unladen swallow") //should return 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") //should return 19.
