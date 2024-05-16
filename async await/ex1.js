let p1 = new Promise( (res ,rej) => {
    setTimeout(() => {
        res("resolved after 10 sec");
    }, 10000);
})

let p2 = new Promise( (res ,rej) => {
    setTimeout(() => {
        res("resolved after 5 sec");
    }, 5000);
})

async function resolveCaller()
{
    console.log("p1 promise called");

    const res1 = await p1;

    console.log("got the p1 resolved");
    console.log(res1);


    console.log("p2 promise called");
    const res2 = await p2;

    console.log("got the p2 resoved");
    console.log(res2);
}   


resolveCaller();

// console.log("global piece of code");