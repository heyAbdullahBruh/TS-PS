/*
 🔹1 Create an interface User with fields: name (string), age (number), and isActive (boolean). Then create a user object using it.
 🔹2 Write a function printUser(user: User): void that prints the user info.
 🔹3 Modify the User interface so age is optional.
 🔹4 Add a readonly id: number property in the User interface and test assigning a value.
 */
var User = /** @class */ (function () {
    function User(id, name, isActive, age) {
        this.id = id;
        this.name = name;
        // Only assign age if it's provided
        if (age !== undefined) {
            this.age = age;
        }
        this.isActive = isActive;
    }
    User.prototype.printUser = function () {
        //🔹2 Write a function printUser(user: User)
        console.log({
            id: this.id,
            name: this.name,
            age: this.age || NaN,
            isActive: this.isActive,
        });
    };
    return User;
}());
var user1 = new User(61235612, "Hello", true);
var user2 = new User(11674365, "Mello", false, 25);
console.log(user1); // User {id: 61235612, name: 'Hello', age: NaN, isActive: true }
user1.printUser(); // { id: 61235612,name: 'Hello', age: NaN, isActive: true }
user2.printUser(); // {  id: 11674365,name: 'Mello', age: 25, isActive: false }
