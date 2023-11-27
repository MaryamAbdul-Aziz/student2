---
layout: post
comments: True
title: 1.4 Correcting errors
description: Practice with identifying and correcting code blocks
type: hacks
permalink: /basics/js-debug
hide: True
---

{% include nav_basics.html %}

# Hacks
- Fix the errors in the first three segments in this notebook and say what you changed in the code cell under "What I Changed" (Challenge is optional)

## Segment 1: Alphabet List

Intended behavior: create a list of characters from the string contained in the variable `alphabet`

### Code:


<script>
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetList = [];

for (var i = 0; i < alphabet.length; i++) {
	alphabetList.push(alphabet[i]);
}

console.log(alphabetList);
</script>

### What I Changed

I changed `alphabetList.push(i);` to `alphabetList.push(alphabet[i])` so that the console would print characters from the variable alphabet and changed `10` to `alphabet.length` to print every character in the variable.

## Segment 2: Numbered Alphabet

Intended behavior: print the number of a given alphabet letter within the alphabet. For example:
```
"_" is letter number _ in the alphabet
```

Where the underscores (_) are replaced with the letter and the position of that letter within the alphabet (e.g. a=1, b=2, etc.)

### Code:


<script>
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetList = [];

for (var i = 0; i < alphabet.length; i++) {
	alphabetList.push(alphabet[i]);
}

let letterNumber = 5

for (var i = 0; i < alphabetList.length; i++) {
	if (i === letterNumber) {
		console.log(alphabet[letterNumber - 1] + " is letter number 5 in the alphabet")
	}
}

// Should output:
// "e" is letter number 5 in the alphabet
</script>


### What I Changed

I changed `for (var i = 0; i < alphabetList; i++)` to `for (var i = 0; i < alphabetList.length; i++)` to make sure that i was changing with regards to the length of `alphabetList`. Then I changed `console.log(letterNumber)` to `console.log(alphabet[letterNumber])` so that the number 5 would correspond to the numbered character in the variable alphabet. After that I changed it to `console.log(alphabet[letterNumber - 1]` so it would return e and not f, since computers start counting from 0.

## Segment 3: Odd Numbers

Intended behavior: print a list of all the odd numbers below 10

### Code:

<script>
let odds = []
let i = 1

while (i <= 10) {
  odds.push(i);
  i += 2;
}

console.log(odds)
</script>

### What I Changed

I changed `let i = 0` to `let i = 1` so that for every while loop, 2 is added to 1 instead of 0 so that the function prints odd numbers instead of even.

# BELOW NOT EDITED

The intended outcome is printing a number between 1 and 100 once, if it is a multiple of 2 or 5 
- What values are outputted incorrectly. Why?
- Make changes to get the intended outcome.


<script>
var numbers = []
var newNumbers = []
var i = 0

while (i <= 100) {
    numbers.push(i)
    i += 1
}

for (var i of numbers) {
    if (i % 5 === 0 || i % 2 === 0){
        if(!newNumbers.includes(i)) {
            newNumbers.push(i);
        }
    }
}
console.log(newNumbers) 
</script>


### What I Changed

I changed the for loop to include both conditions in the same parameter, then wrote code to only push the number if not already included in the array.

# Challenge

This code segment is at a very early stage of implementation.
- What are some ways to (user) error proof this code?
- The code should be able to calculate the cost of the meal of the user

Hint:
- write a “single” test describing an expectation of the program of the program
- test - input burger, expect output of burger price
- run the test, which should fail because the program lacks that feature
- write “just enough” code, the simplest possible, to make the test pass

Then repeat this process until you get program working like you want it to work.


<script>
var total = 0;
var menu = {
    "burger": 3.99,
    "fries": 1.99,
    "drink": 0.99
}

console.log("Menu")
for (var item in menu) {
    console.log(item + "  $" + menu[item].toFixed(2))
}

function waiter() {
    var order = prompt("What would you like to order? Enter 'cancel' to cancel.");
        if (order.trim().toLowerCase() === "cancel")
        console.log("Order cancelled.")

    var orderItems = order.split(',');

    for (var i = 0; i < orderItems.length; i++) {
        var item = orderItems[i].trim().toLowerCase(); // removes trailing spaces, converts to lowercase to match menu
        if (menu.hasOwnProperty(item)) { // Check if the item exists in the menu
            total += menu[item];
        }
        while (item !== "cancel" && !menu.hasOwnProperty(item)){
            var order = prompt("I'm sorry. The item '" + item + "' is not on our menu. What would you like to order?");
            item = order.trim().toLowerCase();
            if (order.trim().toLowerCase() === "cancel")
            console.log("Order cancelled.")
        }
    }
    alert("Total cost: $" + total.toFixed(2));
    console.log("Total cost: $" + total.toFixed(2));
}

waiter();
</script>