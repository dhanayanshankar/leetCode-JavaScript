/**
 * Given a function rand7 which generates a uniform random integer in the range 1 to 7,
 * write a function rand10 which generates a uniform random integer in the range 1 to 10.
 *
 * Do NOT use system's Math.random().
 *
 * Example 1:
 * Input: 1
 * Output: [7]
 *
 * Example 2:
 * Input: 2
 * Output: [8,4]
 *
 * Example 3:
 * Input: 3
 * Output: [8,1,10]
 *
 * Note:
 * rand7 is predefined.
 * Each testcase has one argument: n, the number of times that rand10 is called.
 *
 * Follow up:
 * What is the expected value for the number of calls to rand7() function?
 * Could you minimize the number of calls to rand7()?
 */
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  let row, col, idx;
  do {
    row = rand7(); //rand() is not defined here
    col = rand7();
    idx = col + (row - 1) * 7;
  } while (idx > 40);
  return 1 + ((idx - 1) % 10);
};

module.exports = rand10;
