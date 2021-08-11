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