// ? Async functions are a way to work with asynchronous code in a more sycchronous way. They are built on top of promises an are syntatic sugar or promises.

console.log("Ordering Pizza...");

// Creating a promise 
const pizzaPromise = () => {
    return new  Promise((resolve, reject)) => {
        // resolve  and reject are callback functions
        // what  ia callback function?
        // A callback function is a function that is passed as an argument to another function.
        // to be "called" back at a later time
        let order = true;
        
        if (order){
            setTimeout(() => {// setTimeout is used to simulate a delay
                resolve("after 5 seconds, pizza delivered!");
        }, 5000);

    }
        else{
            setTimeout(() => { // setTimeout is used  to simulate  a delay
                reject("after 5 seconds, Pizza not delivered!");
            },5000);
        }
}

// calling the function with a  promise 
// use .then() to handle the resolved promise
// use .catch() to handle the rejected promise
pizzaPromise()
.then((result)=>{
    console.log(result);
}) 
.catch((eror) =>{
    console.log(error);
});
console.log("Waiting for your pizza... ");

// Terminology 
// Promise: An  object that represents  the eventual  completion (or failure) of an asychronous  operation and its resulting value.
// Resolve: A callback function that is used  when the promise is fulfilled.
// Reject: A calback function that is used when the promise is rejected.
// .then(): A method that is used to handle the resolved promise.
// .catch(): A method that is used to handle the rejected promise.