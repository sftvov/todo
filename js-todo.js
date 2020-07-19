let gameField = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
let i = 1;
$('.row button').on('click', event => {
    let x = event.target.dataset.btn;
    let y = event.target.parentElement.dataset.row;
    let activeButton = $(`[data-row="${y}"] [data-btn="${x}"]`);
    if (activeButton[0].innerText == "") {
        if (i%2 == 1 ) {
            gameField[x][y] = 'x';
            i++;
        }
        else {
            gameField[x][y] = 'o';
            i++;
        }    
        activeButton.text(gameField[x][y]);
    }
    else {
        alert('error');
    }
    
    for (let i = 0; i < gameField.length; i++) {
        const row = gameField[i];    
        let arrBtn = [];    
        for (let j = 0; j < row.length; j++) {
            arrBtn.push(row[j]);
        }
        if (arrBtn[0] !== null && arrBtn[0] == arrBtn[1] && arrBtn[1] == arrBtn[2] ) {
            alert(`${arrBtn[0]} win`);
        }        
    }
});

// Сделали крестики нолик для одного с победой в случае вертикального совпадения