// 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
//  → 배열의 각 요소를 제곱   n => n ** 2            [square]
//  → 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
//  → 배열의 각 요소를 세제곱  n => n ** 3            [cube]

let arr = [1, 2, 3, 4, 5];

// const newArr = arr
//   .map((a) => a ** 2)
//   .map((a) => Math.sqrt(a))
//   .map((a) => a ** 3);

// console.log(newArr);

const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;

const newArr1 = arr
  .reduce((s, a) => `${s} ${cube(sqrt(square(a)))}`)
  .split(" ") // ['a', 'b', '', 'c',  'd', '', 'e']
  .filter((a) => !!a) // ['a', 'b', 'c', 'd', 'e']
  .map((a) => Number(a));
console.log(newArr1);

const newArr11 = arr
  .reduce((s, a) => `${arr.map((a) => cube(sqrt(square(a))))}`)
  .split(",")
  .map((a) => Number(a));
console.log(newArr11);

const newArr22 = arr
  .reduce((s, a) => `${arr.map((a) => sqrt(square(cube(a))))}`)
  .split(",")
  .map((a) => Number(a));
console.log(newArr22);

//  TryThis. 수행 순서를 자유롭게 변경하도록 해보세요.
const newArr2 = [cube, square, sqrt].reduce(
  (s, f) => `${s} ${arr.map((a) => f(a))}`
);
// .split(",")
// .map((a) => Number(a));
console.log(newArr2);

// const newArr222 = [cube, square, sqrt]
// const arr2 = (arr.map((a) => f(a)));
// console.log(arr2);
//console.log(newArr);
//[square, sqrt, cube]
//[cube, square, sqrt].reduce(...
