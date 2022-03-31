const addButton = document.getElementById('addButton'); //dom element to enter a new to-do
addButton.addEventListener('click' , function(event){ //event listener function on the button to add a new to-do when button is clicked
    let addItem = document.getElementById('addItem').value; // the value of addItem 
    const addNewItem = document.createElement('li'); //creates html <li> tag
    addNewItem.innerHTML = addItem; //sets element in <li> to addItem value
    const list = document.querySelector('ul'); //gets the ul (parent value of <li>)
    list.appendChild(addNewItem); ////add list item to the bototm of the list
    document.getElementById('addItem').value = ''; //sets the value of addItem to a empty string

    removeEventListener(addNewItem); //creates event listener for addNewItem
})

const removeItem = document.getElementsByTagName('li'); //removes item from list when clicked on 
for(let i = 0; i < removeItem.length; i++) //add removeEventListener to each <li> bc we can't bind it to getElementsByTagName
{
    removeEventListener(removeItem[i]); //add removeEventListener to each <li>
}

function removeEventListener(el) 
{
    el.addEventListener('click' , function(event){ ////removes the <li> element
        event.target.classList.add('crossOut'); //adds class crossOut, class will inherit crossOut css
        setTimeout(()=> {event.target.remove()}, 1000); //when user clicks on list, item is crossed out and removes item after 1 second
    })
}



