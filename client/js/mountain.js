'use strict';

const url = 'http://localhost:3030';

const mountainImgContainer = document.querySelector('#mountain-image-container');
const mountainInfoContainer = document.querySelector('#mountain-info-container');


// Gets the data of the current mountain
const getCurrentMountain = async () => {

  // Mountain ID is got from localStorage and placed to variable
  const mountainID = localStorage.getItem('mID');
  console.log(mountainID)
  try {
    const fetchOptions =  {
      headers:  {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    };

  const res = await fetch(`${url}/mountains/${mountainID}`, fetchOptions);

  return await res.json();
  } catch (error) {
  console.log(error);
  }
};


const renderCurrentMountain = async () => {
  let currentMountain = await getCurrentMountain();
  let html = '';

  let imageElement = `<img src="./media/${currentMountain.Name}.jpg" id="mountain-image">`;

  html += imageElement;
  mountainImgContainer.innerHTML = html;
};





// Place existing html form element to variable
const postForm = document.querySelector('#postForm');

// Sends the post data to the backend
postForm.addEventListener('submit', async (event) => {

  console.log('jimage content in front js file: ', document.querySelector('#jimage'));

  const formData = new FormData(postForm);
  const fetchOptions =  {
    method: 'POST',
    headers:  {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  body: formData,
  };

  const response = await fetch(url + '/mountain', fetchOptions); // ...tain, fetchOptions
  const json = await response.json();
  alert(json.message);

  location.href = 'mountain.html';
});

renderCurrentMountain();