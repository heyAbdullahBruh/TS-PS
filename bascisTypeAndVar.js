/* Declare TS type & variable ---> */
var userName = "Hellow World";
// userName = 'Gellow Borld'  //This isn't editable .Bcz, userName is constant variable
console.log(userName); // Hellow World
var age; // <--- unions type
age = 12;
console.log(age); //12
age = 24.4;
console.log(age); //24.5
age = 34;
console.log(age); //34
age = "Chourannobboi";
console.log(age); //Chourannobbois
/**🔹 Create a variable isAdmin of type boolean. Assign a true value. */
var isAdmin;
isAdmin = true;
console.log(isAdmin);
/* Make Square Function ---> */
var squareFunc = function (num) {
    return Math.pow(num, 2);
};
var threeSqr = squareFunc(1000);
console.log(threeSqr);
/**🔹 Create an array of numbers and write a function that returns the sum of all numbers. */
function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
var numArr = [
    1, 2, 3, 4, 5, 6, 29323, 4234, 23, 4, 2, 34, 235, 4, 34, 23, 4, 2342,
];
console.log(arraySum(numArr)); //36283
