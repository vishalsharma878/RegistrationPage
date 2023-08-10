console.dir(document);
console.log(document.domain);

console.log(document.links)
//
const headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerHTML ='<h3>Hello</>'; 
//headerTitle.style.borderBottom = 'solid 3px black';

const addItem = document.querySelector('.title');

addItem.style.fontFamily = 'bold';
addItem.style.color ='green';

const li = document.getElementsByTagName('li');

li[1].style.backgroundColor = "green";

for(let i =0; i<li.length; i++){
    li[i].style.fontWeight = "bold";
}




