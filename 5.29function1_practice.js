function once() {
  globalThis.name = "once";
  return function (x, y) {
    if (globalThis.name == "once") {
      globalThis.name = "twice";
      return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`;
    }
  };
}

const fn = once();

console.log(fn(1, 6)); //금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); //undefined
console.log(fn(3, 8)); //undefined
