import { analyzeArray } from "./analyze";

test("check if it work with a 2 number array", () => {
  expect(analyzeArray([2, 4])).toEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 2,
  });
});

test("check if it work with multiple numbers", () => {
  expect(analyzeArray([1, 3, 5, 7, 14])).toEqual({
    average: 6,
    min: 1,
    max: 14,
    length: 5,
  });
});

test("check if it work with with decimal", () => {
  expect(analyzeArray([1.5, 2, 3, 4, 10.7, 5, 6])).toEqual({
    average: 5,
    min: 1.5,
    max: 10.7,
    length: 7,
  });
});
