/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const last = stack[stack.length - 1];
    const curr = asteroids[i];

    if (!stack.length || last < 0 || curr > 0) {
      stack.push(curr);
    } else if (last + curr === 0) {
      stack.pop();
    } else if (Math.abs(last) < Math.abs(curr)) {
      stack.pop();
      i--;
    }
  }
  return stack;
};
