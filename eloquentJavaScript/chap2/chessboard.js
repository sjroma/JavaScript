/*
Write a program that creates a string that represents an 8x8 grid,
using new-line characters to separate lines. At each position of the
grid there is either a space or a "#" character. The characters should
form a chess board.
Passing this string to console.log should show something like this;
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting
a grid of the given width and height.

Exercise hint: The string can be built by starting with an empty one and
repeatedly addnig characters. A newline character is written "\n".
To work with two dimensions, you need a loop inside of a loop. The order of
the loops must follow the order in which we build up the string (line by line,
left to right, top to bottom). So the outer loop handles the lines and the
inner loop handles the character on a line.
Two variables are needed to track progress. To know whether to put a space or
a hash sign at a given position you could test whether the sum of the two
counters is even (%2).
Terminating a line by adding a newline character happens after the line has
been built up so do this after the inner loop but inside of the outer loop.
*/

var size = 10, board = " ";
  for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
      if ((x + y) % 2 == 0)
        board += " ";
      else
        board += "#";
    }
    board += "\n";
  }
console.log(board);
