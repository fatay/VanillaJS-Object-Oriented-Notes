// PROTOTYPAL INHERITANCE
//In object oriented programming, we can inherit properties an object from another object.


//Person Constructor Method
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting Function
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('Jonh', 'Doe');

//Customer Constructor Method
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);  //calling a function
    this.phone = phone;
    this.membership = membership;
}

//Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Changing greeting for a customer or registered to company
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} *
    Welcome to our company.`
}

const customer1 = new Customer('Tom', 'Lindaman', '555-555-5555', 'Standart');
console.log(customer1.greeting());