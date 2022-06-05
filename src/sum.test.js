const sum = require('./sum');

test('1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
