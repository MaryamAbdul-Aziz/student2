---
title: Using Javascript with HTML DOM
comments: True
hide: True
description: A Tech Talk on how javascript can interact with HTML DOM
type: hacks
permalink: /basics/dom
---

{% include nav_basics.html %}

# Hacks
- Copy your HTML code from the HTML hacks. Write a Javascript snippet to switch the links of the two a tags when a button is pressed. Once they are switched, change the inner HTML of the top p tag to the word "switched!"

### Basic: Switches links and changes p to "Switched!"

<button id="buttonID" onclick="switchLinks()">Click here to change something</button>
<br>
<br>
<a id="link1" href="https://www.wikihow.com/Change-the-Button-Color-in-HTML">WikiHow To Change Button Color in HTML</a><br>
<a id="link2" href="https://stackoverflow.com/questions/12471132/how-to-set-text-color-in-submit-button">StackOverflow Button Text Color Change</a><br>

<div id="divContainerIDbutton">
<p id="para">Above are some links to help you get started on your JS Basics Test journey!</p>
</div>

<script>
var link1 = document.getElementById("link1")
var link2 = document.getElementById("link2")
var para = document.getElementById("para")
  
var og1 = link1.href
var og2 = link2.href

function switchLinks(){
  link1.href = og2
  link2.href = og1
  
  para.innerHTML = "Switched!";
  
}
</script>

<button id="buttonID" onclick="switchLinks()">Click here to change something</button>
<br>
<br>
<a id="link1" href="https://www.wikihow.com/Change-the-Button-Color-in-HTML">WikiHow To Change Button Color in HTML</a><br>
<a id="link2" href="https://stackoverflow.com/questions/12471132/how-to-set-text-color-in-submit-button">StackOverflow Button Text Color Change</a><br>

<div id="divContainerIDbutton">
<p id="para">Above are some links to help you get started on your JS Basics Test journey!</p>
</div>

<script>
var link1 = document.getElementById("link1")
var link2 = document.getElementById("link2")
var para = document.getElementById("para")

var og1 = link1.href
var og2 = link2.href

function switchLinks(){
  link1.href = og2
  link2.href = og1

  para.innerHTML = "Switched!";

}
</script>

### Advanced code: Switches link text too

<button id="buttonID", onclick="switchLinks()">Click here to change something</button>
<br>

<a id="link1" href="https://www.wikihow.com/Change-the-Button-Color-in-HTML">WikiHow To Change Button Color in HTML</a>
<br>
<a id="link2" href="https://stackoverflow.com/questions/12471132/how-to-set-text-color-in-submit-button">StackOverflow Button Text Color Change</a>

<br>
<div id="divContainerIDbutton">

<p id="para">Above are some links to help you get started on your JS Basics Test journey!</p>
</div>

<script>
var link1 = document.getElementById("link1")
var link2 = document.getElementById("link2")
var para = document.getElementById("para")

var og1 = link1.href
var og2 = link2.href
var text1 = link1.innerText
var text2 = link2.innerText

function switchLinks(){
    link1.href = og2
    link2.href = og1
    buttonID.innerHTML = "Working...";
    
    setTimeout(function() {       
        link1.innerText = text2;
        link2.innerText = text1;
        para.innerHTML = "Switched!";
        buttonID.innerHTML = "Click here to change something";
    }, 500);
}
</script>

<button id="buttonID", onclick="switchLinks()">Click here to change something</button>
<br>

<a id="link1" href="https://www.wikihow.com/Change-the-Button-Color-in-HTML">WikiHow To Change Button Color in HTML</a>
<br>
<a id="link2" href="https://stackoverflow.com/questions/12471132/how-to-set-text-color-in-submit-button">StackOverflow Button Text Color Change</a>

<br>
<div id="divContainerIDbutton">

<p id="para">Above are some links to help you get started on your JS Basics Test journey!</p>
</div>

<script>
var link1 = document.getElementById("link1")
var link2 = document.getElementById("link2")
var para = document.getElementById("para")

var og1 = link1.href
var og2 = link2.href
var text1 = link1.innerText
var text2 = link2.innerText

function switchLinks(){
    link1.href = og2
    link2.href = og1
    buttonID.innerHTML = "Working...";

    setTimeout(function() {       
        link1.innerText = text2;
        link2.innerText = text1;
        para.innerHTML = "Switched!";
        buttonID.innerHTML = "Click here to change something";
    }, 500);
}
</script>