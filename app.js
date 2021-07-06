let buttonPlus = document.getElementById('button_plus');
let buttonMinus = document.getElementById('button_minus');
let countPlus = 0;
let CountMinus = 0; 

buttonPlus.addEventListener('click', ()=>{
    countPlus++;
    buttonPlus.innerHTML = "SUBMIT : " + countPlus;
})

buttonMinus.addEventListener('click', ()=>{
    CountMinus--;
    buttonMinus.innerHTML = "SUBMIT : " + CountMinus;
})