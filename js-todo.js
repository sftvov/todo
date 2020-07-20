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
        nameNewTask = inptTasks.children[0].value;
        let newItem = document.createElement('div');
        newItem.classList.add('todo-item');
        newItem.innerHTML = `<div class="todo-item__checkbox">
        <input type="checkbox">
    </div>
    <div class="todo-item__description">
        <div class="todo-item__title">
            ${nameNewTask}
        </div>
    </div>`;
        document.querySelector('.todo-items').append(newItem);
        console.log(nameNewTask);
    }
}

let btnPlus = document.querySelector('.todo-add-button');
btnPlus.addEventListener('click', pressBtn);
let inptTasks = document.querySelector('.todo-input');
let nameNewTask;