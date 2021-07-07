const buttonPlus = document.getElementById('button_plus');
const buttonMinus = document.getElementById('button_minus');
let countPlus = 0;
let countMinus = 0; 

buttonPlus.addEventListener('click', ()=>{
    countPlus++;
    buttonPlus.innerHTML = "SUBMIT : " + countPlus;
})

buttonMinus.addEventListener('click', ()=>{
    countMinus--;
    buttonMinus.innerHTML = "SUBMIT : " + countMinus;
})