console.log("JSOK");
const emails = [
  "gianni@yahoo.com",
  "genoveffo@yahoo.com",
  "ciccio@yahoo.com",
  "pippo@yahoo.com",
];
console.table(emails);
let email = prompt("qual'è la tua email?", "").trim();
console.log(email);
for (let i = 0; i < email.length; i++) {
  if (email === emails[0]) {
    console.log("benvenuto utente");
  } else if (email === emails[1]) {
    console.log("benvenuto utente");
  } else if (email === emails[2]) {
    console.log("benvenuto utente");
  } else if (email === emails[3]) {
    console.log("benvenuto utente");
  } else {
    console.log("mi dispiace informazioni fornite non valide");
  }
}
