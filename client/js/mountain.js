'use strict';

const url = 'http://localhost:3030';

const mountainImgContainer = document.querySelector('#mountain-image-container');
const mountainInfoContainer = document.querySelector('#mountain-info-container');


// Gets the data of the current mountain
const getCurrentMountain = async () => {

  // Mountain ID is got from localStorage and placed to variable
  const mountainID = localStorage.getItem('mID');
  console.log('mountain id: ', mountainID);
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


const renderCurrentMountainImg = async () => {
  let currentMountain = await getCurrentMountain();
  let html = '';

  let imageElement = `<img src="./media/${currentMountain.Name}.jpg" id="mountain-image">`;
  html += imageElement;
  mountainImgContainer.innerHTML = html;
};

const renderCurrentMountainInfo = async () => {
  let currentMountain = await getCurrentMountain();
  let html = '';

  let infoElement = `<li id="latestPost">
    <h2 id="mountain-name">${currentMountain.Name}</h2>
    <h2 id="mountain-difficulty">${currentMountain.Difficulty}</h2>
    <h2 id="mountain-height">${currentMountain.Height}</h2>
    <h2 id="mountain-location">${currentMountain.Location}</h2>
  </li>`;
  html += infoElement;

  mountainInfoContainer.innerHtml = html;
}


const popularList = document.querySelector('#postList');
const recentList = document.querySelector('#postList');

const getMostPopular = async () => {
  try {
    const res = await fetch(`${url}/popular`);

    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

const getLatest = async () => {
  try {
    const res = await fetch(`${url}/latest`);

    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

const renderPopularPosts = async () => {
  let popularPosts = await getMostPopular();
  let html = "";

  /*
  Creates shown element containing little of post data
  Creates also bigger hidden element inside the shown element which contains much more data
 */
  let header = `<h2>Most popular journeys</h2>`;
  html += header;

  popularPosts.forEach(userPost => {
    let segment = `<li id="popularPost">
      <div id="post-figure">
        <img src="../../server/uploads/${userPost.Imagename}" id="post-image">
        <div id="post-titleContainer">
          <h4 id="post-title">${userPost.Title}</h4>
          <h4 id="post-username">${userPost.Username}</h4>
        </div>
      </div> 
      <article id="post-article">          
        <p id="post-equipment">${userPost.Equipment}</p>
        <p id="post-description">${userPost.Description}</p>
        <div id="post-likes-and-dislikes">
          <h4 id="post-likes">Likes: ${userPost.Likes}</h4>
          <h4 id="post-dislikes">Dislikes: ${userPost.Dislikes}</h4>
        </div>
      </article>
    </li>`;

    html += segment;
  });

  popularList.innerHTML = html;
};

const renderLatestPosts = async () => {
  let latestPosts = await getLatest();
  let html = "";

  /*
  Creates shown element containing little of post data
  Creates also bigger hidden element inside the shown element which contains much more data
   */
  let header = `<h2>Most recent journeys</h2>`;
  html += header;

  latestPosts.forEach(userPost => {
    let segment = `<li id="latestPost">
      <div id="post-figure">
        <img src="../../server/uploads/${userPost.Imagename}" id="post-image">
        <div id="post-titleContainer">
          <h4 id="post-title">${userPost.Title}</h4>
          <h4 id="post-username">${userPost.Username}</h4>
        </div>
      </div> 
      <article id="post-article">          
        <p id="post-equipment">${userPost.Equipment}</p>
        <p id="post-description">${userPost.Description}</p>
        <div id="post-likes-and-dislikes">
          <h4 id="post-likes">Likes: ${userPost.Likes}</h4>
          <h4 id="post-dislikes">Dislikes: ${userPost.Dislikes}</h4>
        </div>
      </article>
    </li>`;

    html += segment;
  });

  recentList.innerHTML = html;
};

renderLatestPosts();


// Handler for most recent/most popular posts slider.
let checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    renderLatestPosts();
  } else {
    renderPopularPosts();
  }
});


// const uID = sessionStorage.getItem("user.ID");
// console.log(uID);

// Place existing html form element to variable
const postForm = document.querySelector('#postForm');

// Sends the post data to the backend
postForm.addEventListener('submit', async (event) => {

  const mID = localStorage.getItem("mID");

  console.log('jimage content in front js file: ', document.querySelector('#jimage'));

  const formData = new FormData(postForm);
  const fetchOptions =  {
    method: 'POST',
    headers:  {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  body: mID, formData,
  };

  const response = await fetch(url + '/mountain', fetchOptions); // ...tain, fetchOptions
  const json = await response.json();
  alert(json.message);

  location.href = 'mountain.html';
});

renderCurrentMountainImg();
renderCurrentMountainInfo();