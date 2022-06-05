const multiply = require('./multiply');

test('adds 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

test('adds 6 * 3 to equal 18', () => {
  expect(multiply(6, 3)).toBe(18);
});
