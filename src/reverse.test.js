import { reverseString } from "./reverse";

test("reverse a string with 1 word", () => {
  expect(reverseString("trying")).toBe("gniyrt");
});

test("reverse a string with more than 1 word", () => {
  expect(reverseString("PaBlo Clavo un CLAVITO")).toBe(
    "OTIVALC nu ovalC olBaP"
  );
});
