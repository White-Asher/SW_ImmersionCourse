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

// net 모듈사용, createServer
// 서버 소켓을 열고(만들고) 기다린다
// 접속이 들어오면 클라이언트 소켓을 하나 만든다
//  요청을 처리한다.
