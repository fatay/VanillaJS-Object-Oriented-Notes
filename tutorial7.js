//ES6+: Inheriting classes in Javascript ES6 + using "extends and super()"
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Persons {
    constructor(firstName, lastName, phone, membership) {
        super(firstName,lastName);      //inherited properties
        this.phone = phone;             //new properties
        this.membership = membership;   //..new "
    }
}
const john = new Customer('John', 'Doe', '555-555-4555', 'Standart');
console.log(john.greeting());

//john is a Customer object but we can use greeting function.
//We can use any method which is defined in "Persons" class.