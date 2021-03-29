const el = document.querySelector('body');
el.classList.add('title__categoria');

const categor = document.querySelector('ul');
const categorItem = categor.children;
console.log(`В списке ${categorItem.length} категории.`);

const childItem = document.querySelectorAll('li.item');
 childItem.forEach(el => {
      
     const catNumber = el.querySelector('h2').textContent;
     console.log(catNumber);

     const lengEl = el.querySelectorAll('li').length;
     console.log(lengEl);
 });
 
const listElement = document.querySelectorAll('li');
console.log(`В списке ${categorItem.length} категории, и ${listElement.length} всех строк списка .`);
