(async function () {

    console.log('step 1');

    await (new Promise((resolve) => {
        console.log('step 2');

        setTimeout(() => {
            resolve();
        }, 3000)
    }));

    await (new Promise((resolve) => {
        console.log('step 3');

        setTimeout(() => {
            resolve();
        }, 500)
    }));

    await (new Promise((resolve) => {
        console.log('step 4');

        setTimeout(() => {
            resolve();
        }, 1000)
    }));

    console.log('step 5')

})();