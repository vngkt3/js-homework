function getNumberAtArray(arr, index) {
  if (!Array.isArray(arr)) {
    throw new Error("배열이 아닙니다");
  }

  if (index < 0 || index >= arr.length) {
    throw new Error("유효하지 않은 인덱스입니다.");
  }

  return arr[index];
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
