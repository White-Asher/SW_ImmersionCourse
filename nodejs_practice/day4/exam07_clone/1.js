let obja = {
    a: 1,
    b: 2,
    k : [12,3,4,5]
}
//별명
let objb = obja

//새로운 오브잭트 만들어짐 
let objc = JSON.parse(JSON.stringify(obja)) 

console.log(obja === objb)

console.log(objb.a);

obja.a = 3;

console.log(objb.a);