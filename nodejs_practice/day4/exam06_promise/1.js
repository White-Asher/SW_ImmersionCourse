(new Promise((resolve)=> {
    console.log('step 1')

    setTimeout(()=> {
        console.log('step 2')
        resolve()
    },1000)

}))
.then(()=> {
    console.log('step 3')
})

console.log('step 4')

// delay(1000);
// console.log('step 2')