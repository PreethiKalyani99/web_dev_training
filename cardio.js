const div = document.createElement('div');
div.setAttribute('class', 'wrapper');
document.body.appendChild(div);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.textContent = 'One';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'Three';
li2.appendChild(li3);

div.appendChild(ul);

const img = document.createElement('img');
img.src = 'https://picsum.photos/id/237/200/300';
img.width = 250;
img.setAttribute('class', 'cute');
img.alt = 'cute puppy';

div.appendChild(img);

const htmlString = `
<div class = "divi">
    <p> Paragraph 1 </p>
    <p> Paragraph 2 </p>
</div>`; 

// const ulElem = div.querySelector('ul');
// ulElem.insertAdjacentHTML('beforebegin',htmlString);
div.insertAdjacentHTML('afterbegin',htmlString);
const divP = div.querySelector('.divi');
divP.children[1].classList.add('warning');
divP.firstElementChild.remove();

function generatePlayerCard(name, age, height){
    return `<div class = "playerCard">
                <h2> ${name} - ${age} </h2>
                <p> They are ${height} feet and ${age} years old. In some years this person would be  ${age * 7}. That would be a tall dog.
                <div>
                <button class = "del"> &times; Remove </button>
                </div>
            </div>`;
}

const cards = document.createElement('div');
cards.setAttribute('class', 'cards');

let makeCards = generatePlayerCard('ben', 34, 156);
makeCards += generatePlayerCard('guwen', 35, 166);
makeCards += generatePlayerCard('kevin', 44, 167);
makeCards += generatePlayerCard('len', 37, 176);

cards.innerHTML = makeCards;
div.insertAdjacentElement('beforebegin', cards);

const buttons = document.querySelectorAll('.playerCard');

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        button.remove();
    });
});