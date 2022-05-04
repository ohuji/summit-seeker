'use strict';

const url = 'http://localhost:3030';

// Place existing html form element to variable
const postForm = document.querySelector('#postForm');

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

