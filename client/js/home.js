'use strict';

localStorage.removeItem("mID");

// Posts
const url = 'http://10.114.32.78/app';

const postContainer = document.querySelector('#postContainer');
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

/*  // Goes through 10 posts and gives them style
  for (let i = 0; i < 10; i++) {

    // Sets style to shown posts
    let currentPost = document.getElementById("popularPost" + i);
    Object.assign(currentPost.style, postStyle);
  }*/
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