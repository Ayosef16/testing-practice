export function capitalize(sentence) {
  let words = sentence.split(" ");
  words.forEach((element, index) => {
    let firstLetter = element.charAt(0).toUpperCase();
    let otherLetter = element.slice(1).toLowerCase();
    words[index] = firstLetter + otherLetter;
  });
  sentence = words.join(" ");
  return sentence;
}
