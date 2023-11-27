---
title: Basics of Javascript
comments: True
hide: True
description: A Tech Talk on how to use javascript
type: hacks
permalink: /basics/javascript
author: Rohan Juneja
---

{% include nav_basics.html %}

# Hacks
- Write a JavaScript program that compares two variables, a and b. Log "a is greater" if a is greater than b, "b is greater" if b is greater than a, and "both are equal" if a and b are equal. Make sure to use if statements and console.log

### Pre-defined values of a and b


<script>
console.log("Comparing a and b")

var a = 68
var b = 37
console.log("a = " + a)
console.log("b = " + b)

if (a > b) {
    console.log("a is greater")
} else if (b > a) {
    console.log("b is greater")
} else {
    console.log("a and b are the same")
}
</script>

### User-inputted values of a and b
<script>
console.log("Comparing a and b")

var a = prompt("Enter a number:")
var b = prompt("Enter another number:")
a = parseFloat(a)
b = parseFloat(b)

console.log("a = " + a)
console.log("b = " + b)

if (a > b) {
    console.log(a + " is greater than " + b)
} else if (b > a) {
    console.log(b + " is greater than " + a)
} else {
    console.log("a and b are the same")
}
</script>