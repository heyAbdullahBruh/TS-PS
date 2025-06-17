/*
 🔹1 Create an interface User with fields: name (string), age (number), and isActive (boolean). Then create a user object using it.
 🔹2 Write a function printUser(user: User): void that prints the user info.
 🔹3 Modify the User interface so age is optional.
 🔹4 Add a readonly id: number property in the User interface and test assigning a value.
 */

class User {
  // 🔹1 Create User
  readonly id: number; // 🔹4 Add a readonly id: number property
  name: string;
  age?: number; // 🔹3 age make optional
  isActive: boolean;
  constructor(id: number, name: string, isActive: boolean, age?: number) {
    this.id = id;
    this.name = name;
    // Only assign age if it's provided
    if (age !== undefined) {
      this.age = age;
    }
    this.isActive = isActive;
  }

  printUser(): void {
    //🔹2 Write a function printUser(user: User)
    console.log({
      id: this.id,
      name: this.name,
      age: this.age || NaN,
      isActive: this.isActive,
    });
  }
}

const user1 = new User(61235612, "Hello", true);
const user2 = new User(11674365, "Mello", false, 25);
console.log(user1); // User {id: 61235612, name: 'Hello', age: NaN, isActive: true }
user1.printUser(); // { id: 61235612,name: 'Hello', age: NaN, isActive: true }
user2.printUser(); // {  id: 11674365,name: 'Mello', age: 25, isActive: false }
