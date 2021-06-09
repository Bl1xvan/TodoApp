let addToDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let contList = document.getElementById('contlist');

addToDoButton.addEventListener('click', function(){
    var listItem = document.createElement('li');
    var paragraph = document.createElement ('p');
    var crossOut = document.createElement('button');
    var takeOut = document.createElement ('button');

    listItem.classList.add('list-styling');
    paragraph.classList.add('list-item-styling');
    crossOut.classList.add('list-item-styling');
    takeOut.classList.add('list-item-styling');

    contList.appendChild(listItem);
    listItem.appendChild(paragraph);
    listItem.appendChild(crossOut);
    listItem.appendChild(takeOut);

    paragraph.innerText = inputField.value;
    crossOut.innerText = "check";
    takeOut.innerText = "delete";

    inputField.value = "";

    crossOut.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    takeOut.addEventListener('click', function(){
        contList.removeChild(listItem);
 
    })
});