const elList = document.querySelector('#ingredients');
 console.log(elList);
 
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const addIngred = ingredients.map(el => {
  const li = document.createElement('li');
    li.textContent = el;
    elList.appendChild(li);
    return li;
})

 