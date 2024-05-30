/*
console.log('\n--for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.--');
for(let i = 0.1; i < 0.9 ; i += 0.1) 
   console.log(i.toFixed(1)); 
console.log(1);
*/
//포기한 코드
// for(let i = 0.1; i < 1 ; i += 0.1) {
//     console.log(i*10);
//     console.log(Math.trunc(i*10));
//     console.log((i*10) == Math.trunc(i*10));
//     console.log(i.toFixed(i==1.0? 0 : 1)); 
// }

/*
console.log('\n--1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오--'); 
// Math.sqrt() 사용, 무리수만 출력!
for(let i = 1; i <= 10 ; i++) 
    console.log(Math.sqrt(i).toFixed(3)); 
 


console.log('\n--오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.--');
const today = new Date()
// 요일번호 today.getDay();
const WEEK_NAMES = '일월화수목금토';
console.log(`오늘은 ${WEEK_NAMES[today.getDay()]}요일 입니다!`);

//switch문
// var DAY_OF_WEEK=7;
// switch(today.getDay()) {
//     case 0:
//         DAY_OF_WEEK = WEEK_NAMES[0];
//         break;
//     case 1:
//         DAY_OF_WEEK = WEEK_NAMES[1];
//         break;
//     case 2:
//         DAY_OF_WEEK = WEEK_NAMES[2];
//         break;
//     case 3:
//         DAY_OF_WEEK = WEEK_NAMES[3];
//         break;
//     case 4:
//         DAY_OF_WEEK = WEEK_NAMES[4];
//         break;
//     case 5:
//         DAY_OF_WEEK = WEEK_NAMES[5];
//         break;
//     case 6:
//         DAY_OF_WEEK = WEEK_NAMES[6];
//         break;
//     }
// console.log(`오늘은 ${DAY_OF_WEEK}요일 입니다!`);
*/

// console.log('\n--다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.--');
// //(단, 소숫점 자리수는 긴쪽에 맞춘다)
// function addPoints(a, b) {
//     var a_length=0, b_length=0;
//     a_length=a.toString().length-2;
//     b_length=b.toString().length-2;
//     console.log((a+b).toFixed(a_length>b_length? a_length: b_length));
// }

// function addPoints(a, b) {
//     var a_length=0, b_length=0;
//     while (a.toFixed(a_length)!=a) a_length++;
//     while (b.toFixed(b_length)!=b) b_length++;
//     console.log((a+b).toFixed(a_length>b_length? a_length: b_length));
// }

// addPoints(0.21354, 0.1)   // 0.31354
// addPoints(0.14, 0.28)     // 0.42
// addPoints(0.34, 0.226)    // 0.566



console.log('\n--user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.--');
//(Function signature를 3개 이상으로 표현하기)
const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};
function f1(user) {console.log(`id: ${user.id}   name: ${user.name}`);}
console.log('--------f1--------');
f1(hong), f1(lee);
console.log('--------f2--------');
var f2 = function f2({id, name}) {console.log(`id: ${id}   name: ${name}`);}
f2(hong), f2(lee);
console.log('--------f3--------');
const f3 = ({id, name}) => {console.log(`id: ${id}   name: ${name}`);};
//const f3 = (user) => {console.log(`id: ${user.id}   name: ${user.name}`);};
//const f3 = (user) => {console.log(`id: ${user['id']}   name: ${user['name']`);};
f3(hong), f3(lee);



/*
console.log('\n--다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.--');
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}
const userI = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}
const {passwd, ...userInfo} = userI;
//const {id, name, addr} = userI;
//const userInfo = {id, name, addr};
console.log(userInfo); 


console.log('\n--다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.--');
const arr = [[{id: 1}], [{id:2}, {id: 3}]]
const [[{id: id1}], [{id: id2}, {id: id3}]] = arr;
//const id1  = arr[0][0].id;
//const id2  = arr[1][0].id;
//const id3  = arr[1][1].id;
//const {id: id1} = arr[0][0];
//const {id: id2} = arr[1][0];
//const {id: id3} = arr[1][1];
console.log(`id1: ${id1}   id2: ${id2}   id3: ${id3}`); */