//Creating string(primitive type) as an object
const name1 = 'Jeff';
const name2 = new String('Jeff');
console.log(typeof name2); //it returns object.

if (name1 === 'Jeff') {
    console.log("YES, 'Jeff' String is Equal To 'Jeff' Object!");
} else {
    console.log("NO, Object type is different from a string type.");
} // Answer is : "NO , Object type is different from a string type."

//Creating number(primitive type) as an object
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2); // it returns object

//Creating boolean(primitive type) as an object
const bool1 = true;
const bool2 = new Boolean(true);
console.log(typeof  bool2); //it returns object

//Creating function(reference type) as an object
const getSum1 = function (x,y) {
    return x+y;
}
const getSum2 = new Function('x', 'y', 'return 1+1')

//Creating arrays(reference type) as an object
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

//Regular Expressions as an object
const re1 = /\w+/;
const re2 = new RegExp( '\\w+/');

//Creating objects directly
const john = {name: "John"};
console.log(john.name);