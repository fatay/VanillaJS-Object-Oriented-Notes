/*
* Actually prototype objects are not defined mainly.
* When we need to add additional functionality (anonymous);
*           we can use __proto__ objects which is defined in object already.
*/

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.birthday  = new Date(dob);
}

// Adding Calculate Age Method
Person.prototype.calculateAge =  function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
const fatih = new Person('fatih', 'aydin',   'August 22 1996');
const mary  = new Person('Mary',  'Johnson', 'March 20 1978');
console.log(fatih.calculateAge());  //returns true value because we injected in a __proto__ object

//-----------------------------------------------------------------------------------------------------------//

//For instance, we can get the Full Name with using prototype.
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;  // template literals ES6+
}
console.log(fatih.getFullName()); // Fatih Aydin

//-----------------------------------------------------------------------------------------------------------//

// Example 2 : Change lastName when person has married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;  //person takes new lastname
}
mary.getsMarried('Smith');
console.log(mary.getFullName()); //Mary Smith

//-----------------------------------------------------------------------------------------------------------//

