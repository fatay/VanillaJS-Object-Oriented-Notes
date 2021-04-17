// Object.Create Method and Implementation
const personPrototypes = {
    greeting : function () {
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName  = 'Williams';
mary.age = 30;
mary.getsMarried('Hoodie');

console.log(mary.greeting());  // Hello there Mary Williams
// In __proto__ object, greeting method will be created automatically from an Object.create() method.


