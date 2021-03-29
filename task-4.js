const section = document.querySelector('#counter')
console.log(section);
const counterValue = document.getElementById("value");
counterValue.classList.add('.span')

const increment = document.getElementById("buttonMinus").onclick = function () {
    counterValue.innerHTML++;
    
};

const decrement = document.getElementById("buttonPlus").onclick = function () {
    counterValue.innerHTML--;
};

