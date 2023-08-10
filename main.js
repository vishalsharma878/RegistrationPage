console.dir(document);
console.log(document.domain);

console.log(document.links)
//
const headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerHTML ='<h3>Hello</>'; 
//headerTitle.style.borderBottom = 'solid 3px black';

// const addItem = document.querySelector('.title');

// addItem.style.fontFamily = 'bold';
// addItem.style.color ='green';

// const li = document.getElementsByTagName('li');

// li[1].style.backgroundColor = "green";

// for(let i =0; i<li.length; i++){
//     li[i].style.fontWeight = "bold";
// }

const item = document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor = 'green';
const itemInvi = document.querySelector('.list-group-item:nth-child(3)');
itemInvi.style.display = 'none';
const items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';

const odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}






