import fetch from 'node-fetch'

// 참고로 알아두자
/*
fetch('http://localhost:8090/echo?title=hello&msg=nodejs')
.then((res) => {
    // console.log(res)
    return res.json()
} )

.then((jsonObj) =>{
    console.log(jsonObj);
})
*/

// fetch 는 비동기 함수..

// async 이 안에서는 비동기 함수가 되라ㅏㅏㅏ
async (function(){
    let res = await (await fetch('http://localhost:8090/echo?title=hello&msg=nodejs')).json();
    console.log(res);  
}) ();