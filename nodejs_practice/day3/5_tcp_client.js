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


// net, new net.socket(직접생성)
// 소켓을 만들고 접속을 시도한다.
// 서버에게 요청을 한다. 