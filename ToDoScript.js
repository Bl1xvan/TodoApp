let addToDoButton = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");

addToDoButton.addEventListener('click', function(){
    var listItem = document.createElement('p');
    listItem.classList.add('list-styling');
    toDoContainer.appendChild(listItem);
    listItem.innertext = inputField.value;
    inputField.value = "";
    listItem.addEventListener('click', function(){
        listItem.style.texDecoration = "line-through";
    })
    listItem.addEventListener('dblclick', function(){
        toDoContainer.removeChild(listItem);
    })
})