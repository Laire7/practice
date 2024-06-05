// var moment = require("moment"); //CJS 방식
import moment from "moment"; //ESM
import Cat, { Dog } from "./6.03class_은닉성.js";

moment.locale("cn");

const d = new Date();
console.log("🚀 ~ d:", d);
console.log(d);

const m = moment();
console.log("🚀 ~ m:", m);
console.log("🚀 ~ m:", m);
console.log("🚀 ~ m:", m);
console.log(m.fromNow());

const writtenDate = moment("2024-04-30");
console.log("🚀 ~ writtenDate:", writtenDate.fromNow());
