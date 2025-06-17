/* Declare TS type & variable ---> */
const userName: string = "Hellow World";
// userName = 'Gellow Borld'  //This isn't editable .Bcz, userName is constant variable

console.log(userName); // Hellow World

let age: string | number; // <--- unions type

age = 12;
console.log(age); //12
age = 24.4;
console.log(age); //24.5
age = 34;
console.log(age); //34
age = "Chourannobboi";
console.log(age); //Chourannobbois

/**🔹 Create a variable isAdmin of type boolean. Assign a true value. */
let isAdmin: boolean;
isAdmin = true;
console.log(isAdmin);

/* Make Square Function ---> */
const squareFunc = (num: number) => {
  return num ** 2;
};

const threeSqr = squareFunc(1000);
console.log(threeSqr);

/**🔹 Create an array of numbers and write a function that returns the sum of all numbers. */

function arraySum(array: number[]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum;
}

const numArr = [
  1, 2, 3, 4, 5, 6, 29323, 4234, 23, 4, 2, 34, 235, 4, 34, 23, 4, 2342,
];
console.log(arraySum(numArr)); //36283
