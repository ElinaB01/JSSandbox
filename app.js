const name = "Elina";
const age = 20;
const city = "Tallinn";
const job = "Junior Software Developer";

//console.log("Name: " + name, typeof(name));
//console.log("Age: " + age, typeof(age));

function hello(){
    alert("Hello, " + name + "!");
}
//hello();

//create an unordered list ES5
//let html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>City: ' + city + '</li><li>Job: ' + job + '</li></ul>';

//Template Literal ES6
let html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>Occupation: ${job}</li>
    </ul>
`;
document.body.innerHTML = html;

//Arrays
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1); //output: Array(5) [ 1, 2, 3, 4, 5 ]
console.log(typeof(numbers1)); //output: object

//add element to the end of an array
numbers1.push(6);
console.log(numbers1); //output: Array(6) [ 1, 2, 3, 4, 5, 6 ]

//add element to the beginning
numbers1.unshift(0);
console.log(numbers1); //output: Array(7) [ 0, 1, 2, 3, 4, 5, 6 ]

//remove last element and return it
let removedElement = numbers1.pop();
console.log(numbers1); //output: Array(6) [ 0, 1, 2, 3, 4, 5 ]
console.log("Removed element: ", removedElement);

//remove first element
numbers1.shift();
console.log(numbers1); //output: Array(5) [ 1, 2, 3, 4, 5 ]

//remove element from certain position using SPLICE()
//start position, how many elements; returns removed elements as an array
let splicedElements = numbers1.splice(2, 2);
console.log(numbers1); //output: Array(3) [ 1, 2, 5 ]
console.log("Spliced elements: ", splicedElements);

//search for an element with certain value
let index = numbers1.indexOf(5); //if 10, output is -1
console.log(index); //output: 2 //if search result > -1, do something


let mixedArray = [22, "banana", true];
mixedArray.forEach(element => {
    console.log(element, typeof(element));
    if (element === "banana")
        console.log("Length of banana: ", element.length);
});
//console.log(mixedArray[1].length);

//Objects
let johnName = "John";
let johnAge = 30;
let steveName = "Steve";
let steveAge = 100;

//Constructor for object, not class
let person1 = {
    name: johnName,
    age: johnAge
}
let person2 = {
    name: steveName,
    age: steveAge
}
let people = [person1, person2];
console.log(people);

//display people's name and age
people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old.`);
});