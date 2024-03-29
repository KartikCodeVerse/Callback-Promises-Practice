// console.log("Kartik is superman");
// console.log("king is king");

// setTimeout(() => {
//   console.log("i am slow");
// }, 2000);

// console.log("i am last but not least");

// setInterval(() => {
//   console.log("i am always with you");
// }, 2000);

// console.log("now i am last");

// console.log("This is Callback");
// const callback2 = () => {
//   console.log("kartik bhai callback2 bhi chl gaya ..");
// };

// const calback = (arg, callback2) => {
//   console.log(arg);
//   callback2();
// };

// const loadScript = (src, callback) => {
//   let sc = document.createElement("script");
//   sc.src = src;
//   sc.onload = callback("Kartik bhai chl gaya tumara calback...", callback2);
//   document.head.append(sc);
// };

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
//   calback
// );

console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    console.log("I am not Working");
    reject("No Random Number was not Supporting You...");
  } else {
    setTimeout(() => {
      console.log("Yes I am Working");
      resolve("Random Number is Supporting You...");
    }, 2000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    console.log("I am not Working2");
    reject("No Random Number was not Supporting You2...");
  } else {
    setTimeout(() => {
      console.log("Yes I am Working2");
      resolve("Random Number is Supporting You2...");
    }, 2000);
  }
});

let p = Promise.all([prom1, prom2]);

p.then((a) => {
  console.log(a);
}).catch((e) => {
  console.log(e);
});
