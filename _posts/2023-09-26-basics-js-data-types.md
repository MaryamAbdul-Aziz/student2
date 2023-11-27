---
title: Javascript Data Types/Lists
comments: True
hide: True
description: A Tech Talk on javascript data types and how to use with lists
type: hacks
permalink: /basics/datatypes
---

{% include nav_basics.html %}

# Hacks
Create a JavaScript snippet below with the following requirements:
- Create an object representing yourself as a person. The object should have keys for your name, age, current classes, interests, and two more of your choosing
- Your object must contain keys whose values are arrays. The arrays can be arrays of strings, numbers, or even other objects if you would like
- Print the entire object with console.log after declaring it
- Manipulate the arrays within the object and print the entire object with console.log as well as the specific changed key afterwards
- Perform mathematical operations on fields in your object such as +, -, /, % etc. and print the results with console.log along with a message contextualizing them
- Use typeof to determine the types of at least 3 fields in your object

### Object representing me with some manipulated array values

<script>
var person = {
    name: "Maryam",
    age: 16,
    ghid: "maryamabdul-aziz",
    classes: ["US History", "AP Physics: Mechanics", "AP Calc BC", "Computer Science", "AP English Language"],
    interests: ["reading", "writing", "English", "history"],
    favorites: ["color: blue", "flower: sunflower", "book: The Outsiders"],

};

console.log(person)

console.log(" ")

console.log("Modifying object...")
person.classes = "none"
person.interests = "no hobbies found"

console.log("Modification complete.")
console.log(person)
</script>


### Numerical operations

<script>
var num1 = 12
var num2 = 9

var operations = [
    "Adding",
    "Subtracting",
    "Dividing",
    "Modulus"
];

console.log("num1 = " + num1)
console.log("num2 = " + num2)
console.log("\n")

for (var i = 0; i < operations.length; i++) {
    console.log(operations[i] + " num1 and num2");
    switch (i) {
        case 0:
            console.log(num1 + num2);
            break;
        case 1:
            console.log(num1 - num2);
            break;
        case 2:
            console.log(num1 / num2);
            break;
        case 3:
            console.log(num1 % num2);
            break;
    }
    console.log("\n");
}
</script>

### typeOf function
<script>
var listofVariables = [
    "First variable",
    15,
    ["0th item", 14, "2nd item"],
    {
        variable: "fourth",
        grade: 5/5,
        percentage: "100%"
    },
    ];

for (var i = 0; i < listofVariables.length; i++){
    console.log(listofVariables[i])
    switch(i) {
        case(0):
            console.log(listofVariables[0] + " is a " + typeof listofVariables[0]);
            console.log("\n")
            break;
        case(1):
            console.log(listofVariables[1] + " is a " + typeof listofVariables[1]);
            console.log("\n")
            break;
        case(2):
            console.log(listofVariables[2] + " is a " + typeof listofVariables[2]);
            console.log("\n")
            break;
        case(3):
            console.log(listofVariables[3] + " is a " + typeof listofVariables[3]);
            console.log("\n")
            break;
    }
}
<script>