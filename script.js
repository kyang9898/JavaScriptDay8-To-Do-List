const addButton = document.getElementById('addButton');
addButton.addEventListener('click' , function(event){
    let addItem = document.getElementById('addItem').value;
    const addNewItem = document.createElement('li');
    addNewItem.innerHTML = addItem;
    const list = document.querySelector('ul');
    list.appendChild(addNewItem);
    document.getElementById('addItem').value = '';

    removeEventListener(addNewItem);
})

const removeItem = document.getElementsByTagName('li');
for(let i = 0; i < removeItem.length; i++)
{
    removeEventListener(removeItem[i]);
}

function removeEventListener(el)
{
    el.addEventListener('click' , function(event){
        event.target.classList.add('crossOut');
        setTimeout(()=> {event.target.remove()}, 1000);
    })
}



