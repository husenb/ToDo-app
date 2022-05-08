const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

//>>>>>>>>>>>>>>>>>>>>>>>Adding New TOdo Task<<<<<<<<<<<<<<<<<<<<<<
const generatelist = task => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-item-center">
    <span>${task}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const task = addForm.add.value.trim().toLowerCase();
    if (task.length) {
        generatelist(task);
        addForm.reset();

    }
})


//>>>>>>>>>>>>>>>>>>>>>>Deleting todo<<<<<<<<<<<<<<<<<<<<<<<<<
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();

    }
})

//\>>>>>>>>>>>>>>>>>>>>>>>SEarching list..........................>
const searchList = (query) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(query))
        .forEach((todo) => todo.classList.add('filtered'))
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(query))
        .forEach((todo) => todo.classList.remove('filtered'))
}

search.addEventListener('keyup', () => {
    const query = search.value.trim().toLowerCase();
    searchList(query);


})