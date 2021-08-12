import http from 'http'
import { title } from 'process';
import {URL} from 'url'

const port = 8090

http.createServer((req,res)=> {

    const urlObj = new URL(
        req.url,
        'http://example.com'
    );
    
    console.log(`pathname: ${urlObj.pathname}`)
    console.log(`search: ${urlObj.pathname}`)
    console.log(`hostname: ${urlObj.pathname}`)
    let result = {
        r: 'ok'
    }
    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용 
    }
    res.writeHead(200, header);

    // 에코요청처리
    if(urlObj.pathname === '/echo'){
        let _title = urlObj.searchParams.get('title');
        let _msg = urlObj.searchParams.get('mes');

        result._title = _title
        result._msg = _msg
    }
    else if(urlObj.pathname == '/sum'){
        let a = parseInt(urlObj.searchParams.get('a'));
        let b = parseInt(urlObj.searchParams.get('b'));

        result.cal = a + b ;
    }
    else if(urlObj.pathname == '/sub'){
        let a = parseInt(urlObj.searchParams.get('a'));
        let b = parseInt(urlObj.searchParams.get('b'));

        result.cal = a - b ;
    }
    else if(urlObj.pathname == '/multi'){
        let a = parseInt(urlObj.searchParams.get('a'));
        let b = parseInt(urlObj.searchParams.get('b'));

        result.cal = a * b ;
    }
    else if(urlObj.pathname == '/avg'){
        let avg01 = parseInt(urlObj.searchParams.get('avg01'));
        let avg02 = parseInt(urlObj.searchParams.get('avg02'));
        let avg03 = parseInt(urlObj.searchParams.get('avg03'));
        let avg04 = parseInt(urlObj.searchParams.get('avg04'));
        let avg05 = parseInt(urlObj.searchParams.get('avg05'));
        let avg_result = (avg01 + avg02 + avg03 + avg04 + avg05) /5

        result.cal = avg_result ;
    }
    // api가 많을 경우 switch문을 구성하는 것이 더 유리함.
    
    res.end(JSON.stringify(result));
}).listen(port);

console.log(`listen : ${port}`);