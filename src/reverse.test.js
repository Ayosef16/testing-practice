import { reverseString } from "./reverse";

test("reverse a string with 1 word", () => {
  expect(reverseString("trying")).toBe("gniyrt");
});
