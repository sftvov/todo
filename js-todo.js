function removeCheked() {
    let arrOfChekbox = document.querySelectorAll('.todo-item__checkbox');
    arrOfChekbox.forEach(el => {
        if (el.children[0].checked) {
            el.parentElement.classList.add('disabled');
            let todoItems = document.querySelector('.todo-items');
            for (let i = 0; i < todoItems.childElementCount; i++) {
                if (todoItems.children[i] === el.parentElement) {
                    delete arrOfTasks[i];
                    setToLocalStorage();
                }          
            }            
        }
    })
}
function saveCurrentTask() {
    let nameNewTask = inptTasks.children[0].value;
    createMyTasks(nameNewTask);        
    arrOfTasks.push(nameNewTask);
    setToLocalStorage();
    inptTasks.children[0].value = '';
    inptTasks.classList.remove('active-inline');
    btnPlus.innerText = '+';
    btnPlus.classList.remove('todo-save-button');
}
function pressBtn() {
    if (!btnPlus.classList.contains('todo-save-button')) {     
        inptTasks.classList.add('active-inline');
        inptTasks.children[0].focus();
        btnPlus.innerText = 's';
        btnPlus.classList.add('todo-save-button');
    }
    else {        
        saveCurrentTask();
    }
}
function createMyTasks(task) {
    let newItem = document.createElement('div');
        newItem.classList.add('todo-item');
        newItem.innerHTML = `
        <div class="todo-item__checkbox">
            <input type="checkbox">
        </div>
        <div class="todo-item__description">
            <div class="todo-item__title">
                ${task}
            </div>
        </div>
        `;
        document.querySelector('.todo-items').append(newItem);
}
function setToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(arrOfTasks));
}
let arrOfTasks = JSON.parse(localStorage.getItem('tasks'));
if (arrOfTasks===null) {
    arrOfTasks = [];
}
else {
    arrOfTasks = arrOfTasks.filter(el => el !== null);
    setToLocalStorage();
    arrOfTasks.forEach(el => createMyTasks(el));
}
let btnPlus = document.querySelector('.todo-add-button');
btnPlus.addEventListener('click', pressBtn);
let btnTrash = document.querySelector('#trash');
btnTrash.addEventListener('click', removeCheked);
let inptTasks = document.querySelector('.todo-input');
inptTasks.addEventListener('keydown',(e) => {
    if (e.keyCode === 13) {
        saveCurrentTask();
    }
})