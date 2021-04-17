//Creating Constructors and Using 'this' keyword
// --> 'this' keyword means 'inside of method'
function Person(name, age) {
    this.name = name;
    this.age  = age;
}

//use this Constructor for creating a new object (reference type)
const fatih = new Person('Fatih',24);
const aydin = new Person('Aydin',36);

console.log(fatih);
console.log(aydin);

/*
Quick Note: If we try to use this keyword in a global scope,
we'll get "Window" object. Also, we can use derived variables.
*/

function NPerson(name, date) {
    this.name = name;
    this.birthday = new Date(date);  // Derived Type
    this.age = function () {
        const diff = Date.now() - this.birthday;
        const ageDate = new Date(diff);
        return ageDate.getUTCFullYear();
    }
}

const refik = new NPerson('Refik', '01-01-1962');








