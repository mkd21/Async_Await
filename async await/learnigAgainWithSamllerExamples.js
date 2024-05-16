// function delay1()
// {
//     let p1 = new Promise( (res , rej) =>{
//         setTimeout(() => {
//             res("resolved after 3 sec");
//         }, 3000);
//     })

//     return p1;
// }

// function delay2()
// {
//     let p2 = new Promise( (res , rej) =>{
//         setTimeout(() => {
//             res("resolved after 3 sec");
//         }, 3000);
//     })

//     return p2;
// }

// function delay3()
// {
//     return new Promise( (resolve , reject)=>{
//         setTimeout( ()=>{
//             reject("rejected for testing purpose");
//         } , 1000);
//     })
// }

// try 
// {
//     async function exec()
//     {
//         let res1 = await delay1();
//         console.log(res1);

//         let res2 = await delay2();
//         console.log(res2);

//         let res3 = await delay3();
//         console.log(res3);
//     }
//     exec();
// }
// catch(err)
// {
//     console.log(err);
// }




// // global piece of code 

// console.log("global 1")
// console.log("global 2")
// console.log("global 3")
// console.log("global 4")


                    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



async function exec()
{
    let url =  "https://fakestoreapi.com/products";

    let res = await fetch(url);
    let result = await res.json();

    return result;
}

exec().then( (response) => console.log(response));