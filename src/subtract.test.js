const subtract = require('./subtract');

test('4 - 2 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2);
});

test('7 - 4 to equal 4', () => {
  expect(subtract(7, 4)).toBe(3);
});
