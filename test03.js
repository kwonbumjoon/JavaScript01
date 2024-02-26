// 스프레드 연산자 ......es6

let arr = [10,20,30]

let nArr = [...arr,40,50,60]    // 점 3개 기입

console.log(nArr)

function func(...rest){
    console.log(rest)
}

func(1,2,3,4,5,)
console.log('-----------------------------')
function func2(a,...rest){
    console.log(a)
    console.log(rest)
}

func2(1,2,3,4,5,)
