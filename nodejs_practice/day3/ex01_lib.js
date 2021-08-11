function bad_func1(){
}

function bad_func2(){
}

function printHello() { 
    console.log('hello es5');
}

// 외부에서 쓸것이라는 것을 알려줘야 함
// export default 그냥 외워두자
// 여러개의 함수가 있는데 이중 printHello만 사용할때 쓰는 방식
export default printHello;