// ES6 Modern Javascript Classes
/*
* Javascript ES6+ released;
*       1. Creating constructor method in classes for initialization is more usable,
*       2. Defining objects are more easier,
*       3. Writing more cleaner code is possible.
*/

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.birthday  = new Date(dob);
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    static addNumbers(x,y) {
        return x + y;
    }
}

const fatih = new Person('Fatih', 'Aydin', '11-12-1996');
console.log(fatih);
console.log(fatih.greeting());


//Static methods ARE NOT parts of the instance.
//So we can only access using a class name.
console.log(Person.addNumbers(1,2));


