// 객체

let studentScore = {
    koreaScore : 90,
    englishScore : 80,
    mathScore : 99

};  

console.log(studentScore.koreaScore);
console.log(studentScore.englishScore);
console.log(studentScore.mathScore);
console.log(studentScore['koreaScore']);
console.log("----------------------------------------")

let a = 10;
let b = '10';

console.log(a === b);   // 값과 자료형이 같으면 true 
console.log(a == b);    // 값만 같으면 true
console.log("----------------------------------------")

let num = 10;
if(num % 2 === 0){
    console.log("변수 num에 할당된 숫자는 짝수");
}
else{
    console.log("변수 num에 할당된 숫자는 홀수");
}
console.log("----------------------------------------")

let c = [10, 20, 30, 40, 50, 'hello', 'js'];
console.log(c);

for(a in c){
    console.log(c[a]);
}
console.log("----------------------------------------")

function fun1(){
    console.log("function1 active -------");
}
fun1();

// 함수 표현식
function fun2(n){
    for(let i=0; i<n; i++)
        console.log(i);
    console.log("fun2 -----")
}
fun2(3);
console.log("----------------------------------------")

let funct = function(n){   // 익명함수
    for(let i=0; i<n; i++)
        console.log(i);
    console.log("function 2 -----")
}
funct(3);
console.log("----------------------------------------")

let funct2 = function fun(n){   // 네이밍 함수
    let sum = 0;
    for(let i=0; i<=n; i++)
        sum += i;
    return sum;
}
let total = funct2(5);
console.log("합 : " + total)
console.log("----------------------------------------")

let funct4 = (n) => {   // 화살표 함수
    let sum = 0;
    for(let i=0; i<=n; i++)
    sum += i;
return sum;
}
let total2 = funct4(4);
console.log("합 : " + total2)
console.log("----------------------------------------")

let f = () => console.log("#####");
f();
console.log("----------------------------------------")

function sum(a,b){
    let a1 = 10
    let b1 = 20
    console.log(a1+b1)
}
// sum()

(function sum2(a,b){
    console.log(a+b)
})(10, 300)
console.log("----------------------------------------")

const person = {
    name:{
        firstname : '길동',
        lastname : '홍'
    },
    age : 20,
    address : '경기도',
    isAdult : true
}
console.log(person.name.firstname)
console.log(person.name.lastname)

person.gender = '남'
console.log(person.gender)

person.age = 59
person.name.lastname = '김'
console.log(person)

delete person.name
console.log(person)
console.log("----------------------------------------")


let test = [10,20,30,40,50]
console.log(test)

test.unshift(60)
console.log(test)

test.shift()
console.log(test)
console.log("----------------------------------------")


