
// eventlistener for Add button
let addbutton = document.getElementById("addbtn").addEventListener("click", additem); 
// eventlistener for Delete button
let removebutton = document.getElementById("removebtn").addEventListener("click", removeitem); 

//functionality for adding new items in the list
function additem() { 
    let ul = document.getElementById('itemlist');
    let inputtext = document.getElementById('inputtext');
    let checkbox = document.createElement("input");

 
    let myList = document.createElement("li");
    myList.setAttribute('id', inputtext.value);
    myList.appendChild(document.createTextNode(inputtext.value));
    ul.appendChild(myList);
    checkbox.type = "checkbox";  // checkbox
    myList.appendChild(checkbox);

}

//functionality for delete particular item from the list
function removeitem() {
    let ul = document.getElementById('itemlist');
    let inputtext = document.getElementById('inputtext');
    let item = document.getElementById(inputtext.value);
    ul.remove(item);

}
    
   






