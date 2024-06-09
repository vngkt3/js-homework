function getValueAtObject(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    throw new Error("Error!");
  }
}

// 예시 사용
const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};
