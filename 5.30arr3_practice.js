// const assert = require("assert");
let arr = [1, 2, 3, 4];

function deleteFrom2(arr) {
  console.log(
    "--assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]); // 2부터 몽땅 지워!--"
  );
  console.log(arr.slice(0, 2));
}
deleteFrom2(arr);

function deleteFrom1To3(arr) {
  console.log(
    "--assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]); // 1부터 3 앞까지 지워!--"
  );
  const beforeArrI1 = arr.slice(0, 1);
  const afterArrI3 = arr.slice(3);
  console.log(beforeArrI1.concat(afterArrI3));
}
deleteFrom1To3(arr);

// assert.deepStrictEqual(arr, [1, 2, 3, 4]);
const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
var users = [Hong, Kim, Lee];

function delete2(users) {
  console.log(
    "--assert.deepStrictEqual(deleteObjectArray(users, 2), [Hong, Kim]--"
  );
  console.log(users.slice(0, 2));
}
delete2(users);

function deleteFrom1To2(users) {
  console.log(
    "--assert.deepStrictEqual(deleteObjectArray(users, 1, 2), [Hong, Lee]--"
  );
  const beforeUserI1 = users.slice(0, 1);
  const fromUserI2 = users.slice(2);
  console.log(beforeUserI1.concat(fromUserI2));
}
deleteFrom1To2(users);

function deleteId2(users) {
  console.log(
    `--assert.deepStrictEqual(deleteObjectArray(users, "id", 2), [Hong, Lee]--`
  );
  const findId2 = users.findIndex((user) => user.id == 2);
  const beforeId2 = users.slice(0, findId2);
  const afterId2 = users.slice(findId2 + 1);
  console.log(beforeId2.concat(afterId2));
}
deleteId2(users);

function deleteNameLee(users) {
  console.log(
    `--assert.deepStrictEqual(deleteObjectArray(users, "name", "Lee"), [Hong, Kim])--`
  );
  const findNameLee = users.findIndex((user) => user.name == "Lee");
  const beforeNameLee = users.slice(0, findNameLee);
  const afterNameLee = users.slice(findNameLee + 1);
  console.log(beforeNameLee.concat(afterNameLee));
}
deleteNameLee(users);
