const elForm = document.querySelector(".form");
const elInput = document.querySelector("#input")
const elBtn = document.querySelector(".btn");
const elResult = document.querySelector(".result")

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var rem, temp, final = 0;
    var number = elInput.value;

    temp = number;
    while(number > 0)
    {
      rem = number % 10;
      number = parseInt(number / 10);
      final = final * 10 + rem;
    }
    if(final==temp)
    {
            elResult.textContent = 'Это цифра является палиндромом';
            elResult.style.color = 'green';
    }else
    {
            elResult.textContent = 'Введенное число не является палиндром';
            elResult.style.color = 'red';
    }
})