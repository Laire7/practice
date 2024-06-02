//다음과 같은 결과가 출력되도록 이전 장에서 작성한 코드를 수정하세요.
const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);

const template = function () {
  before();
  return function (...args) {
    someFn(...args);
    after();
  };
};

const temp = template(someFn);

temp("lnsol", "hello");
