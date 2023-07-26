export function caesarCipher(sentence, cipherKey = 1) {
  // Split the sentence into letters
  let letters = sentence.split("");

  // Loop through each letter
  letters.forEach((letter, index) => {
    let letterUpperCase = false;
    //Check if the letter is upper case
    if (isUpperCase(letter)) {
      letterUpperCase = true;
      letter = letter.toLowerCase();
    }
    // Transform the letter to the cipher version
    letter = transformToCipher(letter, cipherKey);
    // If the letter is on the alphabet, change it to the new letter
    if (letter !== undefined) {
      // Check if it's lower or upper case
      if (!letterUpperCase) {
        letters[index] = letter;
      } else {
        letters[index] = letter.toUpperCase();
      }
    }
  });
  sentence = letters.join("");
  return sentence;
}

function isUpperCase(letter) {
  return letter.toUpperCase() === letter && letter.toLowerCase() !== letter;
}

function transformToCipher(letter, cipherKey) {
  const mapping = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  // Check if the letter + cipher is higher than 26 so it restart the count
  if (mapping[letter] + cipherKey > 26) {
    const newKey = (mapping[letter] + cipherKey) % 26;
    letter = Object.keys(mapping).find((key) => mapping[key] === newKey);
    // Otherwise if it's less than 26
  } else {
    letter = Object.keys(mapping).find(
      (key) => mapping[key] === mapping[letter] + cipherKey
    );
  }
  return letter;
}
