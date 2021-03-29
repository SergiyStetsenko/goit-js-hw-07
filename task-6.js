let task = document.querySelector('#validation-input');
console.log(task);
const validationFocus = () => {
    if (Number(task.dataset.length) !== task.value.length) {
        task.classList.remove('valid');
        task.classList.add('invalid');        
    } else {
        task.classList.remove('invalid');
        task.classList.add('valid');   
    }
};
task.addEventListener('blur', validationFocus);