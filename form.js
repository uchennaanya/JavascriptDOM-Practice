let ul = document.querySelector('#ul')
let filter = document.querySelector('#filter')
let form1 = document.querySelector('#form1')

form1.addEventListener('submit', addItem)

ul.addEventListener('click', deleteItem)

filter.addEventListener('keyup', filterItem)

function addItem(e) {
    e.preventDefault();

    // Creating new item
    let newItem = document.querySelector('#formInput').value
    let li = document.createElement('li')
    let liText = document.createTextNode(newItem)
    li.append(liText)

    ul.append(li)

    // Adding delete button
    let deleteBtn = document.createElement('button')
    deleteBtn.id = 'delete'
    deleteBtn.appendChild(document.createTextNode(' x '))
    li.appendChild(deleteBtn)

    form1.reset()

}

function deleteItem(e) {

    if (e.target.id == 'delete') {
        if (confirm('Press OK to delete item')) {
            let li = e.target.parentElement
            ul.removeChild(li)
        }
    }
}

function filterItem(e) {
    e.preventDefault()
    let text = e.target.value.toLowerCase()
    let items = ul.querySelectorAll('li')

    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent
        if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
document.body.append(document.createElement('p').textContent = 'Try this and please feel free to reach out')