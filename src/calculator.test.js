import { calculator } from "./calculator";

test("return the sum of 2 numbers", () => {
  expect(calculator.add(10, 50)).toBe(60);
});

test("return the subtract of 2 numbers", () => {
  expect(calculator.subtract(100, 200)).toBe(-100);
});

test("return the divition of 2 numbers", () => {
  expect(calculator.divide(50, 25)).toBe(2);
});

test("return the divition by 0", () => {
  expect(calculator.divide(50, 0)).toBe(Infinity);
});

test("return the multiplication of 2 numbers", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});
