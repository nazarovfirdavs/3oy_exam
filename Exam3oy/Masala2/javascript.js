const elform = document.querySelector('.form');
const elInput = document.querySelector("#input");
const elBtn = document.querySelector('.btn');
const elResult = document.querySelector('.result');

elform.addEventListener("submit", function(evt){
    evt.preventDefault();
     
    const elValue = elInput.value;
    if (elValue % 400 == 0){
        elResult.textContent = 'Это високосный год';
        elResult.style.color = 'red';
    }
    else if (elValue % 100 == 0){
        elResult.textContent = 'Это не високосный год';
        elResult.style.color = 'red';
    }
    else if (elValue % 4 == 0){
        elResult.textContent = 'Это високосный год';
        elResult.style.color = 'green';
    }
    else {
        elResult.textContent = 'Это не високосный год';
        elResult.style.color = 'red';
    }
})