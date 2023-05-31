console.log("JSOK");
/*************************************EMAILS**************************************/
// FASE 0
// ARRAY DELLE EMAILS
const emails = [
  "gianni@yahoo.com",
  "genoveffo@yahoo.com",
  "ciccio@yahoo.com",
  "pippo@yahoo.com",
];
console.table(emails);
// PROMPT EMAIL UTENTE
let email = prompt("qual'è la tua email?", "").trim();
console.log(email);
// FASE 1
// CICLO CHE CONTROLLA
for (let i = 0; i < email.length; i++) {
  //FASE 2
  // IF LA MAIL CORRISPONDE A UNA NELL'ARRAY
  if (email === emails[i]) {
    console.log("benvenuto utente");
  }
  // FASE 3
  // SE NON CORRISPONDE A NIENTE
  else {
    console.log("mi dispiace informazioni fornite non valide");
  }
}
