export function analyzeArray(array) {
  const arrayLength = array.length;
  const sum = array.reduce((total, number) => total + number, 0);
  const average = Math.round(sum / arrayLength) || 0;
  const min = Math.min(...array);
  const max = Math.max(...array);
  return { average, min, max, length: arrayLength };
}
