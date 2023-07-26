import { caesarCipher } from "./cipher";

test("working on lowercase", () => {
  expect(caesarCipher("cd")).toBe("de");
});

test("working on long strings", () => {
  expect(caesarCipher("practice makes expert")).toBe("qsbdujdf nblft fyqfsu");
});

test("working from z to a", () => {
  expect(caesarCipher("zapato de los miercoles")).toBe(
    "abqbup ef mpt njfsdpmft"
  );
});

test("working with punctuation", () => {
  expect(caesarCipher("hello world!!!!, hello friends!!!!")).toBe(
    "ifmmp xpsme!!!!, ifmmp gsjfoet!!!!"
  );
});

test("working with cipher key different from default value", () => {
  expect(caesarCipher("amanda, maria, johny, herrera", 6)).toBe(
    "gsgtjg, sgxog, punte, nkxxkxg"
  );
});

test("working with upper case", () => {
  expect(caesarCipher("JImmy goes RunnIng on SunDAys")).toBe(
    "KJnnz hpft SvooJoh po TvoEBzt"
  );
});
