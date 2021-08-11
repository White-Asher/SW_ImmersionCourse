process.stdin.resume()
process.stdin.setEncoding('utf-8')
const util = require('util')

process.stdin.on('data',function(text){
    console.log(`echo : ${text}`);
    if(text === 'exit\r\n'){
        process.exit()
    }
    // console.log(`echo :` + text);
})