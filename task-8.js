const input = document.getElementById("nameInp")
const buttonOne = document.getElementById("name-button")
const buttonClin = document.getElementById("clin-button")
const boxDiv = document.querySelector('#boxes');
    


    buttonOne.addEventListener('click', () => {
        console.log(`Рендериться коллекцией ${input.value} элементов.`);        
        let size = 30;
        
        for (let i = 1; i <= +input.value; i++) {
            const stul = document.createElement('div');
            stul.style.cssText = `width:${size}px; height:${size}px;`
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            stul.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            boxDiv.append(stul)
            size = size + 10;
            
        }
   });

buttonClin.addEventListener('click',  () => {
    boxDiv.innerHTML = '';  
})
        
const createBoxes = function (amount) { 
}
