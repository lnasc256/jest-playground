const subtract = require('./subtract');

test('adds 4 - 2 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2);
});

test('adds 7 - 4 to equal 4', () => {
  expect(subtract(7, 4)).toBe(3);
});
