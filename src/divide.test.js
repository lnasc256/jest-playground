const divide = require('./divide');

test('9 / 3 to equal 3', () => {
  expect(divide(9, 3)).toBe(3);
});

test('12 / 4 to equal 3', () => {
  expect(divide(12, 4)).toBe(3);
});

test('2 / 2 to equal 1', () => {
  expect(divide(2, 2)).toBe(1);
});

test('7 / 2 to equal 3.5', () => {
  expect(divide(7, 2)).toBe(3.5);
});
