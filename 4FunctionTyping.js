/**🔹 Write a function greetUser(name: string): string that returns "Hello, [name]!". */
function greetUser(name) {
    return "Hellow ".concat(name);
}
console.log(greetUser("Yorld")); // Hellow Yorld
/**🔹 Define a function add(a: number, b: number) and return their sum. Type everything properly. */
function add(a, b) {
    return {
        sum: a + b,
    };
}
console.log(add(0, 0)); // 0
console.log(add(NaN, NaN)); //NaN
console.log(add(NaN, 1)); //NaN
console.log(add(123, 1)); //124
/**🔹 Create a function that accepts a string and a number. Return a string like: "You bought 3 apples" */
var BuyResult = function (itemName, itemCount) {
    return {
        message: "You bought ".concat(itemCount, " ").concat(itemName, "s"),
    };
};
console.log(BuyResult("pen", 5)); // { message: 'You bought 5 pens' }
