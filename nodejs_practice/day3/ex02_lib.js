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