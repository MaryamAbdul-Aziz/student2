---
toc: true
title: JS Input Grade Calculator
layout: post
description: JS Input 'Grade Calculator' Calculator and Modifications
type: hacks
courses: { compsci: {week: 4} }
---

<!-- Heading -->
<h2>Calculator</h2>

<!-- Help Message -->
<h3>Input scores, press enter or tab to add each new number.</h3>
<!-- Totals -->
<ul>
<li>
    Total : <span id="total">0.0</span>
    Count : <span id="count">0.0</span>
    Average : <span id="average">0.0</span>
</li>
</ul>
<!-- Table for displaying inputs -->
<table>
    <thead>
      <tr>
        <th>#</th>
        <!-- added 'category' column, formatted inputs into table -->
        <th>Category</th>
        <th>Score</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody id="scoreTable">
    
<!-- Rows added using scores ID -->
<div id="scores">
    <!-- javascript generated inputs -->
</div>

<script>
var currentIndex = 1;

// Executes on input event and calculates totals
function calculator(event) {
    var key = event.key;
    // Check if the pressed key is the "Tab" key (key code 9) or "Enter" key (key code 13)
    if (key === "Tab" || key === "Enter") { 
        event.preventDefault(); // Prevent default behavior (tabbing to the next element)
   
        var array = document.getElementsByName('score'); // setup array of scores
        var total = 0;  // running total
        var count = 0;  // count of input elements with valid values

        for (var i = 0; i < array.length; i++) {  // iterate through array
            var value = array[i].value;
            if (parseFloat(value)) {
                var parsedValue = parseFloat(value);
                total += parsedValue;  // add to running total
                count++;
            }
        }

        // update totals
        document.getElementById('total').innerHTML = total.toFixed(2); // show two decimals
        document.getElementById('count').innerHTML = count;

        if (count > 0) {
            document.getElementById('average').innerHTML = (total / count).toFixed(2);
        } else {
            document.getElementById('average').innerHTML = "0.0";
        }
        
        // Check if we need to add a new input line
        if (count === document.getElementsByName('score').length && key === "Enter") {
            currentIndex++;
            newInputLine(currentIndex);
        }
    }
}

// Function to delete a row
function deleteRow(button) {
var row = button.parentElement.parentElement; // Get the row containing the button
var tableBody = document.getElementById('scoreTable');
tableBody.removeChild(row); // Remove the row from the table
updateTotals(); // Update the totals
}

// Updates the total, count, and average
function updateTotals() {
    var array = document.getElementsByName('score');
    var total = 0;
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        var value = array[i].value;
        if (parseFloat(value)) {
            var parsedValue = parseFloat(value);
            total += parsedValue;
            count++;
        }
    }

    document.getElementById('total').innerHTML = total.toFixed(2);
    document.getElementById('count').innerHTML = count;

    if (count > 0) {
        document.getElementById('average').innerHTML = (total / count).toFixed(2);
    } else {
        document.getElementById('average').innerHTML = "0.0";
    }
}


// Creates a new input box and adds a row to the table
function newInputLine(index) {
    // Create a new table row
    var newRow = document.createElement('tr');

    // Add a table cell for the index
    var indexCell = document.createElement('td');
    indexCell.textContent = index;
    newRow.appendChild(indexCell);
    
    // Table cell for category input
    var categoryCell = document.createElement('td');
    var category = document.createElement("input"); // input element for category
    category.type = "text"; // Text input for category
    category.name = "category"; // name for category input
    categoryCell.appendChild(category);
    newRow.appendChild(categoryCell);

    // Add a label for each score element
    var title = document.createElement('label');
    title.htmlFor = index;
    // title.innerHTML = index + ". ";    
    document.getElementById("scores").appendChild(title); // add to HTML
    
    // Setup score element and attributes
    var scoreCell = document.createElement('td');
    var score = document.createElement("input"); // input element
    score.onkeydown = calculator // Each key triggers event (using function as a value)
    score.type = "number"; // Use text type to allow typing multiple characters
    score.name = "score";  // name is used to group all "score" elements (array)
    score.style.textAlign = "right";
    score.style.width = "5em";
    scoreCell.appendChild(score);
    newRow.appendChild(scoreCell);

    // Add a cell for the delete button
    var deleteCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.onclick = function () {
    deleteRow(deleteButton);
    };
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    // Append the row to the table
    document.getElementById("scoreTable").appendChild(newRow);


    // Set focus on the new input line
    score.focus();
}
// Creates 1st input box on Window load
newInputLine(1);  // Start with index 1

</script>