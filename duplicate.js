const name = ["a", "b", "c", "d", "a", "c", "f", "e", "b"];

function removeDuplicateNames(items) {
  let singleNames = [];
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (singleNames.includes(element) === false) {
      singleNames.push(element);
    }
  }
  return singleNames;
}

const result = removeDuplicateNames(name);
console.log(result);
