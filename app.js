firstBtn = document.getElementById('button_plus');
secondBtn = document.getElementById('button_minus');

let count = 0; 

document.onclick = function (e) {
    if (e.target.className == 'firstBtn') {
        count++;
        
        firstBtn.innerHTML = "SUBMIT : " + count;
    }
    if (e.target.className == 'secondBtn'){
        count--
        secondBtn.innerHTML = "SUBMIT : " + count
    }
}