const addForm = document.querySelector('.add');
const todosList = document.querySelector('.todos');
//creating the todo generate function
const generateTodos = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    todosList.innerHTML += html
};
//adding todos on submit
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length > 0) {
        generateTodos(todo);
        addForm.reset();
    }
})
//deleting todos
todosList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})
//creating the todo filter function
const filteredTodos = term => {
    Array.from(todosList.children)
        .filter(todo =>
            !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(todosList.children)
        .filter(todo =>
            todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));

}
//filtering todos search on keyup
const search = document.querySelector('.search input');
search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase().trim();
    filteredTodos(term);
})