const color = document.getElementById('changeColor');
color.addEventListener ('click',function(){
    document.body.style.backgroundColor = 'yellow';
});



const addItemButton = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

addItemButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    itemList.appendChild(newItem);
});

const removeItemButton = document.getElementById('removeItem');

removeItemButton.addEventListener('click', function() {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem);
    }
});

const displayMessageButton = document.getElementById('displayMessage');
const outputDiv = document.getElementById('output');

displayMessageButton.addEventListener('click', function() {
    outputDiv.textContent = "Hello, this is your message!";
});



const userInput = document.getElementById('userInput');

userInput.addEventListener('keyup', function() {
    outputDiv.textContent = userInput.value;
});
