

console.log(`\n\n---------예습 문제 p.112--------------`);
const arr = [100, 200, 300, 400, 500, 600, 700];
console.log(`\n1.for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.`);
for (const i in arr)
    console.log(i);
console.log(`\n2. for-in문을 사용하여 배열의 원소(값)를 출력하시오.`);
for (const i of arr)
    console.log(i);

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false }
console.log(`\n3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.`);
for(k in obj){
    console.log(k);
}
console.log(`\n4. for-in문을 사용하여 프로퍼티 값을 출력하시오.`);
for(l in obj) {
    console.log(obj[l]);
}
console.log(`\n5. for-of문을 사용하여 프로퍼티 값을 출력하시오.`);
for(l of Object.values(obj)) {
    console.log(l);
}
console.log(`\n6.level 프로퍼티가 열거(entries)되지 않도록 설정하시오. // Object.defineProperty`);
Object.defineProperty(obj, 'role', {enumerable: false});
console.log(Object.getPrototypeOf(obj));
console.log(Object.getOwnPropertyDescriptors(obj));

console.log(`\n7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty`);
Object.defineProperty(obj, 'role', {writable: false, enumerable: true, configurable: false});
delete role;
obj.role = 7;
console.log(obj.role);
//console.log(Object.getOwnPropertyDescriptors(obj));


console.log(`\n-------[['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)-------`);
//=> { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
const abcNumArr = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]];
var abcNumObj = {};
for(let i = 0; i < abcNumArr.length; i++){
    let [key, ...numArr] = abcNumArr[i];
    abcNumObj[key]=numArr;
}
console.log(abcNumObj);



console.log(`\n-------위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)-------`);
const abcNumObj2 = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
let abcNumArr2 = [];
for(abc in abcNumObj2){
    let abcNumArr2_inside = [abc];
    for(arr2 of abcNumObj2[abc])
        abcNumArr2_inside.push(arr2);
    abcNumArr2.push(abcNumArr2_inside);
}
console.log(abcNumArr2);


// const abcNumObj2KeyArr = Object.keys(abcNumObj2);
// for(let i = 0; i < abcNumObj2KeyArr.length; i++){
//     abcNumArr2[i] = abcNumObj2KeyArr[i];
//     console.log(Object.keys(abcNumObj2)[i]);
    //  for(let j = 0; j < abcNumObj2[abc].length; j++) 
    //      abcNumArr2_inside[j] = abcNumObj2[abc][j];
//}
//let i = 0; 
// for(abc in abcNumObj2){
//     let abcNumArr2_inside = [];
//     for(j = 0; j < abcNumObj2[abc].length; j++)
//         abcNumArr2_inside[j] = abcNumObj2[abc][j];
//     abcNumArr2[i] = abcNumArr2_inside;
//     console.log(i);
//     i++;
// }


console.log(`\n-------원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.-------`);
const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
const newKim = {};
for (const k in kim)
    newKim[k] = kim[k]; 
//shallow copy 확인
newKim.addr = 'Daegu';
console.log('newKim.addr = ', newKim.addr);
console.log('kim.addr =', kim.addr);
console.log('kim.addr !== newKim.addr', kim.addr !== newKim.addr); // true면 통과!