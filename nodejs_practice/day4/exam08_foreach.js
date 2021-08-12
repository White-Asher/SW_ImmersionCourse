const _obj = {
    a:1,
    b:2,
    c:3
}

for ( key in _obj) {
    console.log(key);
}

for ( [key,value] of Object.entries(_obj) ) {
    console.log(`${key} : ${value}`);
}