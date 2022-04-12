'use strict';

// ArrayList for shown cards
// const cardsArray = [Username, Role, Title, Posted, Likes, Dislikes];

// ArrayList for hidden cards
// const hiddenCardsArray = [
// Username, Role,
// MountainName Difficulty, Height, Location,
// Title, Description, Equipment, Imagename, Posted, Likes, Dislikes
// ];


function leftArticleAssembly() {

  const leftArticleElement = document.createElement('left');
  leftArticleElement.innerText = cardsArray[i].title;

  return leftArticleElement;
}


function rightArticleElement() {

  const rightArticleElement = document.createElement('right');
  rightArticleElement.innerText = cardsArray[i].title;

  return rightArticleElement;
}


const leftElement = document.querySelector('.leftArticle');
const rightElement = document.querySelector('.rightArticle');


for (let i = 0; i <= 10; i++) {
  // document.getElementById("mainContent").appendChild(p);

  leftElement.appendChild(leftArticleAssembly());
  rightElement.appendChild(rightArticleElement());
}