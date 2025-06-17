/**🔹 Write a function greetUser(name: string): string that returns "Hello, [name]!". */
function greetUser(name: string) {
  return `Hellow ${name}`;
}

console.log(greetUser("Yorld")); // Hellow Yorld

/**🔹 Define a function add(a: number, b: number) and return their sum. Type everything properly. */
function add(a: number, b: number) {
  return {
    sum: a + b,
  };
}

console.log(add(0, 0)); // 0
console.log(add(NaN, NaN)); //NaN
console.log(add(NaN, 1)); //NaN
console.log(add(123, 1)); //124

/**🔹 Create a function that accepts a string and a number. Return a string like: "You bought 3 apples" */
const BuyResult = (itemName: string, itemCount: number) => {
  return {
    message: `You bought ${itemCount} ${itemName}s`,
  };
};

console.log(BuyResult("pen", 5)); // { message: 'You bought 5 pens' }
