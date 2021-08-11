import repl from 'repl';
let repl_context = repl.start(
    {
        prompt: '>',
        input: process.stdin,
        output: process.stdout
    }
).context;

// 타이밍이 아주 중요한 함수
function foo(){
    console.log('hello world');
};
repl_context.foo = foo;

// 이걸 도데체 왜짤까?? >> 함수를 만드는데 타이밍을 잡고, 디버깅을 해야함> 어느 상황에서 뻗는지 알아야 한다..
// 그 때 이 방법을 이용하여 해결을 한다..?????
// 중대한 프로젝트에서 난해한 오류를 이걸로 잡을 수 있다. 