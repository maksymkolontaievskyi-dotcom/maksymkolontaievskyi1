
/*  1. CALLBACK  */

// const win = window.open("", "_blank", "popup,width=300,height=300");

// if (win) {
//   setTimeout(() => {
//     win.resizeTo(500, 500);

//     setTimeout(() => {
//       win.moveTo(200, 200);

//       setTimeout(() => {
//         win.close();
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }


/*  2. PROMISES 

// const delay = (ms) =>
//   new Promise((resolve) => setTimeout(resolve, ms));

// const win = window.open("", "_blank", "popup,width=300,height=300");

// if (win) {
//   delay(2000)
//     .then(() => {
//       win.resizeTo(500, 500);
//       return delay(2000);
//     })
//     .then(() => {
//       win.moveTo(200, 200);
//       return delay(2000);
//     })
//     .then(() => {
//       win.close();
//     });
// }


/* 3. ASYNC / AWAIT*/

// const delay = (ms) =>
//   new Promise((resolve) => setTimeout(resolve, ms));

// async function manageWindow() {
//   const win = window.open("", "_blank", "popup,width=300,height=300");

//   if (!win) return;

//   await delay(2000);
//   win.resizeTo(500, 500);

//   await delay(2000);
//   win.moveTo(200, 200);

//   await delay(2000);
//   win.close();
// }

// manageWindow();

