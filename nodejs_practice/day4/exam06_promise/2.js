console.log('step1');

// setTimeout(() => { //맨 나중에
//     console.log('step2');
//     setTimeout(() => {
//         console.log('step3');
//         setTimeout(() => {
//             console.log('step4');
//         },500)
//     }, 1000)
// }, 3000)

//waterfall
(new Promise((resolve)=> {
    console.log('step2');

    setTimeout(()=>{
        resolve()
    },3000)
})).then(()=> {
    return new Promise((resolve)=> {
        console.log('step3');
        setTimeout(()=>{
            resolve()
        },1000)

    });

}).then(()=> {
    return new Promise((resolve)=> {
        console.log('step4');
        setTimeout(()=>{
            resolve()
        },500)
    })
}).then(()=> {
    console.log('step 5')
})