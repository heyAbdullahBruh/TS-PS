/* Declare TS type & variable ---> */
const userName: string = "Hellow World";
// userName = 'Gellow Borld'  //This isn't editable .Bcz, userName is constant variable

console.log(userName); // Hellow World

let age: string | number;

age = 12;
console.log(age); //12
age = 24.4;
console.log(age); //24.5
age = 34;
console.log(age); //34
age = "Chourannobboi";
console.log(age); //Chourannobbois

/* Make Square Function ---> */
const squareFunc = (num: number) => {
  return num ** 2;
};

const threeSqr = squareFunc(1000);
console.log(threeSqr);

