console.log("JSOK");
const max = 6;
let yourNumber = Math.floor(Math.random() * (max - 1) + 1);
let cpuNumber = Math.floor(Math.random() * (max - 1) + 1);
// let numbers = [yourNumber, cpuNumber];
console.log(yourNumber);
console.log(cpuNumber);
let winner = "hai vinto!";
if (cpuNumber > yourNumber) {
  winner = "la cpu ha vinto!";
}
if (cpuNumber === yourNumber) {
  winner = "sei riuscito a pareggiare!";
}
console.log(winner);

// for (let i = 0; i < 6; i++) {
//   let cpuNumber = Math.floor(Math.random() * (max - 1) + 1);

//   if (cpuNumber === yourNumber) {
//     cpuNumber = Math.floor(Math.random() * (max - 1) + 1);
//   } else {
//     cpuNumber.push(numbers);
//   }
//   console.log(i);
// }
// console.log(cpuNumber);
// if (yourNumber > cpuNumber) {
//   winner = "hai vinto!";
// } else {
//   winner = "la cpu ha vinto!";
// }
// console.log(winner);
