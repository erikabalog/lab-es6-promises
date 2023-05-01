// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...
obtainInstruction(`steak`, 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction(`steak`, 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction(`steak`, 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction(`steak`, 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction(`steak`, 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction(`steak`, 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction(`steak`, 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction(`steak`, 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction(`steak`, 8);
  })

  .catch((error) => {
    console.log(error);
  });
// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    let step0 = await obtainInstruction(`broccoli`, 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    let step1 = await obtainInstruction(`broccoli`, 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    let step2 = await obtainInstruction(`broccoli`, 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    let step3 = await obtainInstruction(`broccoli`, 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    let step4 = await obtainInstruction(`broccoli`, 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    let step5 = await obtainInstruction(`broccoli`, 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    let step6 = await obtainInstruction(`broccoli`, 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    let step7 = await obtainInstruction(`broccoli`, 7);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();
// Bonus 2 - Promise all
// ...
Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])

const p1= new Promise((resolve, reject)=>{
 setTimeout(()=> resoleve("wash brussels sprouts"), 1000);
 return obtainInstruction(`brusselsSprouts`, 0);
});

const p2= new Promise((resolve, reject)=>{
  setTimeout(()=> resoleve("cut off base and chop in half"),1000);
  return obtainInstruction(`brusselsSprouts`, 1);
 });

 const p3= new Promise((resolve, reject)=>{
  setTimeout(()=> resoleve("toss in bowl with olive oil, balsamic vinegar and salt"), 1000);
  return obtainInstruction(`brusselsSprouts`, 2);
 });

 const p4= new Promise((resolve, reject)=>{
  setTimeout(()=> resoleve("preheat oven to 500 F"), 1000);
  return obtainInstruction(`brusselsSprouts`, 3);
 });

 const p5= new Promise((resolve, reject)=>{
  setTimeout(()=> resoleve("coat baking sheet with olive oil"), 1000);
  return obtainInstruction(`brusselsSprouts`, 4);
 });

 const p6= new Promise((resolve, reject)=>{
  setTimeout(()=> resoleve("roast in the oven for 20 minutes"),1000);
  return obtainInstruction(`brusselsSprouts`, 5);
 });

 const p7= new Promise((resolve, reject)=>{
  setTimeout(()=> resoleve("place back in bowl and add salt and pepper"), 1000);
  return obtainInstruction(`brusselsSprouts`, 6);
 });

 const p8= new Promise((resolve, reject)=>{
  setTimeout(()=> resoleve("enjoy"), 1000);
  return obtainInstruction(`brusselsSprouts`, 7);
 });

//   .then((promise.all)=> {
//    consle.log(Promise.all);
// })
//  .catch((error)=> {
//    console.log(error);
//  })

 




