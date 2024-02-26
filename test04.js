// 콜백함수

let f = function () {
    console.log("1번")
}

// 출력하기까지 시간을 설정(ex : f,3000 => 3초 뒤에 출력)
setTimeout(
    f, 10000
)
console.log("----------------------------")

function double(num){
    setTimeout(
        function(){
            const doubleNum = num+2;
            console.log(doubleNum)
        }, 1000
    )
}

double(10)

function fetchData(callback){
    setTimeout(function(){
        const data = "여기 데이터"
        callback(data)
        }, 1000
    )
}


fetchData(function(data){
    console.log("데이터 도착 >> " + data)
})

fetchData(f)

fetchData(function(data){
    console.log("새로운 데이터 >> " + data)
})



