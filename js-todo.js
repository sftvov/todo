function pressBtn() {
    if (!btnPlus.classList.contains('todo-save-button')) {     
        inptTasks.classList.add('active-inline');
        btnPlus.innerText = 's';
        btnPlus.classList.add('todo-save-button');
    }
    else {
        inptTasks.classList.remove('active-inline');
        btnPlus.innerText = '+';
        btnPlus.classList.remove('todo-save-button');
    }
}
let btnPlus = document.querySelector('.todo-add-button');
btnPlus.addEventListener('click', pressBtn);
let inptTasks = document.querySelector('.todo-input');