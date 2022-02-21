function myFunction(){
  let textInput = document.getElementById("myText").value;
  let dateInput = document.getElementById("myDate").value;
  let expenseInput = document.getElementById("myExpense").value;

  let expenseTable = document.getElementById("expenseTable");

  if (textInput != "" && expenseInput != "" && dateInput != ""){
    const newRow = document.createElement("tr");
    newRow.setAttribute("class", "border_bottom");

    const cellOne = document.createElement("td");
    cellOne.innerHTML = (textInput);

    const cellTwo = document.createElement("td");
    cellTwo.innerHTML = (dateInput);

    const cellThree = document.createElement("td");
    cellThree.innerHTML = ("$" + expenseInput);

    const deleteButton = document.createElement("button");
    const cellFour = document.createElement("td");
    cellFour.appendChild(deleteButton);

    cellFour.innerHTML = ("X");
    cellFour.setAttribute("onclick", "deleteRow(this)");
    cellFour.setAttribute("class", "deleteButton");

    newRow.appendChild(cellOne);
    newRow.appendChild(cellTwo);
    newRow.appendChild(cellThree);
    newRow.appendChild(cellFour);

    expenseTable.appendChild(newRow);
  }
}

function deleteRow(elem){
  elem.parentNode.remove()
}
