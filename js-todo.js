function removeCheked() {
    let arrOfChecked = document.querySelectorAll('.todo-item__checkbox');
    arrOfChecked.forEach(el => {
        if (el.children[0].checked) {
            el.parentElement.classList.add('disabled');            
        }
    })
    console.log(arrOfChecked);
}
function pressBtn() {    
    let inptTasks = document.querySelector('.todo-input');
    if (!btnPlus.classList.contains('todo-save-button')) {     
        inptTasks.classList.add('active-inline');
        btnPlus.innerText = 's';
        btnPlus.classList.add('todo-save-button');
    }
    else {        
        let nameNewTask = inptTasks.children[0].value;
        createMyTasks(nameNewTask);        
        arrOfTasks.push(nameNewTask);
        localStorage.setItem('tasks', JSON.stringify(arrOfTasks));
        inptTasks.children[0].value = '';
        inptTasks.classList.remove('active-inline');
        btnPlus.innerText = '+';
        btnPlus.classList.remove('todo-save-button');
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
let arrOfTasks = JSON.parse(localStorage.getItem('tasks'));
if (arrOfTasks===null) {
    arrOfTasks = [];
}
else {
    arrOfTasks.forEach(el => createMyTasks(el));
}
let btnPlus = document.querySelector('.todo-add-button');
btnPlus.addEventListener('click', pressBtn);
let btnTrash = document.querySelector('#trash');
btnTrash.addEventListener('click', removeCheked);