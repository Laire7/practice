//다음 코드를 올바르게 수정하시오.
const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${dog.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName, 1000);
  },
};

dog.whatsYourName();
