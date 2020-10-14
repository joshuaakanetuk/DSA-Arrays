function url(str) {
  const arr = str.split("");
  const urled = arr.map((char) => {
    if (char === " ") return "%20";
    return char;
  });
  return urled.join("");
}
// O(n) because map is a for loop at length

console.log(url("tauhida parveen"));
console.log(url("www.thinkful.com /tauh ida parv een"));

function arr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// O(n) for loop at length
console.log(arr([1, 2, 3, 4, 5, 6]));

function maxSum(arr) {
  let maxSum = 0;
  let sumSoFar = 0;
  for (let i = 0; i < arr.length; i++) {
    sumSoFar += arr[i];
    if (sumSoFar > maxSum) {
      maxSum = sumSoFar;
    }
  }
  return maxSum;
}

// O(n)
console.log(maxSum([4, 6, -3, 5, -2, 1]));
console.log(maxSum([100, -1, 1, 2]));

function mergeArrays(arr1, arr2) {
  arr1 = arr1.concat(arr2);
  return arr1.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeChar(string, delimiter) {
  let charArr = [];
  let newString = [];
  let finalString = "";
  for (let i = 0; i < delimiter.length; i++) {
    charArr.push(delimiter[i]);
  }

  for (let j = 0; j < string.length; j++) {
    let caught = false;
    charArr.forEach((i, index) => {
      if (i === string[j]) {
        caught = true;
      }
      if (charArr.length - 1 === index && caught === false)
        newString.push(string[j]);
    });
  }

  for (let k = 0; k < newString.length; k++) {
    finalString += newString[k];
  }

  return finalString;
}
//  O(n^k)
console.log(removeChar("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

function products(arr) {
  let products = [];
  let t;
  for (let i = 0; i < arr.length; i++) {
    let tempArray = arr.filter((j) => j !== arr[i]);
    t = tempArray.reduce((acc, cur) => acc * cur);
    products.push(t);
  }
  return products;
}

console.log(products([1, 3, 9, 4]));

function two(arr) {
  let columncatch = [];
  let rowcatch = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        rowcatch.push(i);
        columncatch.push(j);
      }
    }
  }

  for (let y = 0; y < arr.length; y++) {
    columncatch.forEach((item) => {
      arr[y][item] = 0;
    });

    rowcatch.forEach((item) => {
      arr[item] = Array(arr[y].length).fill(0);
    });
  }

  return arr;
}
// O(n ^ k)
console.log(
  two([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);

function stringRotation(str1, str2) {

}