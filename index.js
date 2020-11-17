function User(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

User.prototype.getAge = function() {
    return new Date().getFullYear() - this.age;
};

User.prototype.greeting = function() {
    return console.log(`Hello my name ${this.name}`);
};

User.prototype.married = false;

let tom = new User('Tom', 21, 'Red');
let den = new User('Den', 43, 'black');
console.log(tom);
console.log(den);