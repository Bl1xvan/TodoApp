let addToDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let contList = document.getElementById('contlist');

addToDoButton.addEventListener('click', function(){
    var listItem = document.createElement('li');
    listItem.classList.add('paragraph-styling');
    contList.appendChild(listItem);
    listItem.innerText = inputField.value;
    inputField.value = "";
    listItem.addEventListener('click', function(){
        listItem.style.textDecoration = "line-through";
    })
    listItem.addEventListener('dblclick', function(){
        contList.removeChild(listItem);
    })
});