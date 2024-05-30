const arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr);
console.log("--ex1) [2,3]을 추출--");
console.log(arr.slice(1, 3));
console.log("🚀 ~ arr:", arr);

console.log("--ex2) [3]부터 모두 다 추출--");
const fromValue3 = arr.findIndex((v) => v === 3);
console.log("🚀 ~ arr:", arr);
console.log(arr.slice(fromValue3));
console.log("🚀 ~ arr:", arr);

console.log("--ex3) [2,3,4] 제거하기 --");
const value2 = arr.findIndex((v) => v == 2);
console.log("🚀 ~ arr:", arr);
const delete234 = arr.splice(value2, value2 + 2);
console.log("🚀 ~ arr:", arr);
console.log(delete234);

console.log("--ex4) 복원하기 --");
arr.splice(value2, 0, ...delete234);
console.log("🚀 ~ arr:", arr);
console.log(arr);
console.log("🚀 ~ arr:", arr);

console.log("--ex5) [3] 부터 끝까지 제거하기--");
//ex2 참고: const fromValue3 = arr.findIndex((v) => v === 3);
const deleteFrom3 = arr.splice(fromValue3);
console.log("🚀 ~ arr:", arr);

console.log("--ex6) 복원하기--");
//ex2 참고: const fromValue3 = arr.findIndex((v) => v === 3);
arr.splice(fromValue3, 0, ...deleteFrom3);
console.log("🚀 ~ arr:", arr);

// console.log("--ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기--");
// arr.splice(fromValue3, 1, "X", "Y", "Z");
// console.log("🚀 ~ arr:", arr);

console.log("--ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.--");
const arr12 = arr.slice(0, 2);
const arr345 = arr.slice(-3);
let arrNoSplice = [];
arrNoSplice = arrNoSplice.concat(arr12, "X", "Y", "Z", arr345);
console.log("🚀 ~ arrNoSplice:", arrNoSplice);
