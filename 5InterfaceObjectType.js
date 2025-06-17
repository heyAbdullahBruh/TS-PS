/*
 *🔹 Create an interface User with fields: name (string), age (number), and isActive (boolean). Then create a user object using it.
 *🔹 Write a function printUser(user: User): void that prints the user info.
 */
var User = /** @class */ (function () {
    function User(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
    User.prototype.printUser = function () {
        console.log({
            name: this.name,
            age: this.age,
            isActive: this.isActive,
        });
    };
    return User;
}());
var user1 = new User("Hello", 121, true);
console.log(user1); // User { name: 'Hello', age: 121, isActive: true }
user1.printUser(); // { name: 'Hello', age: 121, isActive: true }
