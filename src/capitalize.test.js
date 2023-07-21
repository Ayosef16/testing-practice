import { capitalize } from "./capitalize";

test("capitalize 1 word sentence", () => {
  expect(capitalize("catnip")).toBe("Catnip");
});

test("capitalize 1 word with different cases", () => {
  expect(capitalize("CatFoOd")).toBe("Catfood");
});

test("capitalize multiple words", () => {
  expect(capitalize("cat dog apples")).toBe("Cat Dog Apples");
});

test("capitalize multiple words with different cases", () => {
  expect(capitalize("OmAeWa shinDEiru KISaMA")).toBe("Omaewa Shindeiru Kisama");
});
