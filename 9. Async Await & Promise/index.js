// Promise

let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

promise
  .finally(() => console.log("Promise ready"))
  .then(result => console.log(result)) // shows "done!" after 1 second
  .catch(alert);

// async
let asyncFunc = async function () {
  return "done async!";
};

asyncFunc().then(result => console.log(result));

// await
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done await!"), 1000)
  });

  let result = await promise; // wait till the promise resolves (*)

  console.log(result); // "done!"
};

f();