_ex01\_lib.js _

```
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
```

_2.import.js_

```
import printHello from "./ex01_lib.js"

printHello();
```

_cmd_

```
C:\Users\dkxmp\Documents\GithubStore\SW_ImmersionCourse\nodejs_practice\day3>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (day3)
version: (1.0.0)
description:
entry point: (2_import.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\dkxmp\Documents\GithubStore\SW_ImmersionCourse\nodejs_practice\day3\package.json:

{
  "name": "day3",
  "version": "1.0.0",
  "description": "",
  "main": "2_import.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes

C:\Users\dkxmp\Documents\GithubStore\SW_ImmersionCourse\nodejs_practice\day3>
```

계속 엔터를 누르고 마지막 yes를 누르면 vscode좌상단에 package.json 자동생성됨

![image](https://user-images.githubusercontent.com/55140122/129077807-4d169b0c-1e0a-4207-93c0-838331d72d42.png)

사이에 

```
  "type" : "module",
```

추가

```
C:\Users\dkxmp\Documents\GithubStore\SW_ImmersionCourse\nodejs_practice\day3>node 2_import.js
hello es5
```

여러개의 함수를 처리하는 방법

_ex02\_lib.js_

```
function importantFunc1(){
    console.log("hello");
}

function importantFunc2(){
    console.log("es6");
}

function foo(){
    return{
        foo1 : importantFunc1,
        foo2 : importantFunc2
    }
}

export default foo;
```

_2\_import.js_ 를 다음과 같이 수정

```
import printHello from "./ex01_lib.js"
import foo from "./ex02_lib.js";

const lib20bj = foo();

printHello();

lib20bj.foo1();
lib20bj.foo2();
```

이런 코드 방식이 리액트에서 요구하는 방식임.

_ex03\_lib.js_

```
function importantFunc1(){
    console.log("hello");
}

function importantFunc2(){
    console.log("es6");
}

function foo(){
    return{
        foo1 : importantFunc1,
        foo2 : importantFunc2
    }
}

module.exports = foo;
```

_3\_require.js_ 파일 생성 후 다음과 같이 작성

```
const foo = require('./ex03_lib.js');

let libObj = foo()
libObj.foo1()
libObj.foo2()
console.log(libObj);
```

_package.json _을 다음과 같이 변경하고

```
"type" : "commonjs",
```

_2\_import.js _을 다음과 같이 수정함.

```
function importantFunc1(){
    console.log("hello");
}

function importantFunc2(){
    console.log("es6");
}

var very_good_data = 7;
function foo(){
    return{
        data : very_good_data,
        foo1 : importantFunc1,
        foo2 : importantFunc2
    }
}

export default foo;
```

그 후 3\_require.js 를 실행하면

```
C:\Users\dkxmp\Documents\GithubStore\SW_ImmersionCourse\nodejs_practice\day3>node 3_require.js
hello
es6
{ foo1: [Function: importantFunc1], foo2: [Function: importantFunc2] }
```

그리고 package에서 type을 module로 변경후 2\_require.js를 실행시키면

```
C:\Users\dkxmp\Documents\GithubStore\SW_ImmersionCourse\nodejs_practice\day3>node 2_import.js
hello es5
hello
es6
{
  data: 7,
  foo1: [Function: importantFunc1],
  foo2: [Function: importantFunc2] 
}
```

다음으로 소켓프로그래밍 tcp server를 만들어보자

4\_socket\_tcp\_server.js를 생성한 후

```
//net -> http,ftp,ssh,smtp
import net from 'net'

const port = 8070

const tcp_server = net.createServer((_client)=> {
    //packet 처리 
    _client.on('data',(playload)=> {
        console.log(playload + "")

        _client.write("ok"); //응답
        _client.destroy();
    })

    _client.on('close',()=> {
        console.log('closed');
    })

}).listen(port)

console.log(`server listen ${port}`);
```

다음 코드를 적용함

```
C:\Users\dkxmp\Documents\GithubStore\SW_ImmersionCourse\nodejs_practice\day3>node 4_socket_tcp_server.js
server listen 8070
```

새로운 터미널을 열어서 

```
curl -i -X GET http://localhost:8070
```

다음 문장을 입력하면

```
server listen 8070
GET / HTTP/1.1
Host: localhost:8070
User-Agent: curl/7.55.1
Accept: */*


closed
```

종료됨

5\_tcp\_client.js

```
import net from 'net'
const host = '192.168.35.126'
const port = 8070
//소켓생성
const socket = new net.Socket();
//접속시도 
socket.connect(port,host,()=> {
    //접속 성공하면...
    socket.write('hello\r\n','utf-8',()=> {
        //send ok
        console.log('send message');
    });
})

socket.on('data',(playload)=> {
    console.log('recv from server : ' + playload);
});

socket.on('close',()=> {
    console.log('close');
})
```

터미널 두개를 열어 한쪽은 4\_~.js 한쪽은 5\_~.js를 실행시키면

```
server listen 8070
hello

closed
```

```
send message
recv from server : ok
close
```

각각 실행됨