'use strict';

const url = 'http://localhost:3030';

const popularList = document.querySelector('#popularList');
const recentList = document.querySelector('#recentList');


const popularCardsAssembly = (mostPopular) => {

  // Clears the popularList
  popularList.innerHTML = '';

  mostPopular.forEach((Userposts) => {

    // Post title
    const h2Element = document.createElement('h2');
    h2Element.innerHTML = Userposts.Title;

    // Description
    const para1Element = document.createElement('p');
    para1Element.innerHTML = `Description: ${Userposts.Description}`;

    // Equipment
    const para2Element = document.createElement('p');
    para2Element.innerHTML = `Equipment: ${Userposts.Equipment}`;// Equipment

    // Image
    const imgElement = document.createElement('img');
    imgElement.src = url + '/' + Userposts.Imagename;
    imgElement.alt = Userposts.Title;
    const figureElement document.createElement('figure').appendChild(imgElement);

    // Timestamp
    const para3Element = document.createElement('p');
    para3Element.innerHTML = `Posted: ${Userposts.Posted}`;

    // Likes
    const para4Element = document.createElement('p');
    para4Element.innerHTML = `Likes: ${Userposts.Likes}`;

    // Dislikes
    const para5Element = document.createElement('p');
    para5Element.innerHTML = `Dislikes: ${Userposts.Dislikes}`;


    // li elements inside the ul
    const li = document.createElement('li');
    li.classList.add('light-border');

    li.appendChild(h2Element);
    li.appendChild(para1Element);
    li.appendChild(para2Element);
    li.appendChild(figureElement);
    li.appendChild(para3Element);
    li.appendChild(para4Element);
    li.appendChild(para5Element);

    // Prints out everything
    popularList.appendChild(li);
  });
};


// Main function
function getCards() {

  // AJAX call which gets most popular journeys
  const getMostPopular = async () => {
    try {
      const response = await fetch(url + '/popular');
      const mostPopular = await response.json();
      popularCardsAssembly(mostPopular);
    } catch (e) {
      console.log(e.message);
    }
  };



  // AJAX call which gets most recent journeys
  const getMostRecent = async () => {
    try {
      const response = await fetch(url + '/recent');
      const mostRecent = await response.json();
      createMostRecentCards(mostRecent);
    } catch (e) {
      console.log(e.message);
    }
  };

}

getCards();





