const conta = document.querySelector('#container')
let input = document.querySelector('#name-input');
const newNot = 'незнакомец'
input.addEventListener('input', inputChange);
let span = document.querySelector('#name-output');


function inputChange (e)  {
    if (e.target.value.length > 0) {
        span.textContent = e.target.value;
    } else{
     span.textContent = newNot;
    }
};

    
