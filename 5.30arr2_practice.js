// const assert = require("assert");
const arr = [1, 2, 3, 4];

function fpush56(arr) {
  console.log(
    "--assert.deepstrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6])--"
  );
  const push56 = arr.concat(5, 6);
  console.log(push56);
}
fpush56(arr);

function pop4(arr) {
  console.log("--assert.deepstrictEqual(pop(arr), 4)--");
  console.log(arr.at(-1));
}
pop4(arr);

function pop34(arr) {
  console.log("--assert.deepstrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!--");
  console.log(arr.slice(-2));
}
pop34(arr);

function unshift(arr) {
  console.log("--assert.deepstrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4])--");
  const unshift0 = [0];
  console.log(unshift0.concat(arr));
}
unshift(arr);

function unshift78(arr) {
  console.log(
    "--assert.deepstrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]--"
  );
  const unshift78 = [7, 8];
  console.log(unshift78.concat(arr));
}
unshift78(arr);

function shift1(arr) {
  console.log("--assert.deepstrictEqual(shift(arr), [2, 3, 4]--");
  console.log(arr.slice(1));
}
shift1(arr);

function shift2(arr) {
  console.log("--assert.deepstrictEqual(shift(arr, 2), [3, 4]--");
  console.log(arr.slice(2));
}
shift2(arr);

function arrEqual(arr) {
  console.log("--assert.deepstrictEqual(arr, [1, 2, 3, 4]--");
  console.log(arr.toString() === [1, 2, 3, 4].toString());
}
arrEqual(arr);
