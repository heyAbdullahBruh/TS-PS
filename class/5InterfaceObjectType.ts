/*
 *🔹 Create an interface User with fields: name (string), age (number), and isActive (boolean). Then create a user object using it.
 *🔹 Write a function printUser(user: User): void that prints the user info.
 */

class User {
  name: string;
  age: number;
  isActive: boolean;
  constructor(name: string, age: number, isActive: boolean) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
  }

  printUser(): void {
    console.log({
      name: this.name,
      age: this.age,
      isActive: this.isActive,
    });
  }
}

const user1 = new User("Hello", 121, true);
console.log(user1); // User { name: 'Hello', age: 121, isActive: true }
user1.printUser() // { name: 'Hello', age: 121, isActive: true }
