'use strict';

localStorage.removeItem("mID");

// Posts
const url = 'http://localhost:3030';

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


/*
// ---- Checks if admin ----
// maybe useless

const checkIfAdmin = (user) => {

  if (user.role === 2)  {
    let adminElement = document.getElementById('admin');
    adminElement.style.display = 'block';
  }
}

const getUser = async () => {
  try {
    const response = await fetch(`${url}/user`);
    const user = await response.json();
    checkIfAdmin(user);
  } catch (error) {
    console.log(error.message);

    return
  }
};
*/



// Hidden elements handling.

/*
// Adds eventListener to profilePicture and listens for clicks.
// If statement sets profileElement visible or hidden depending of isVisible variable.
let profileIsVisible = false;
let profileElement = document.getElementById('profile');

document.getElementById('profilePicture')
.addEventListener('click', function() {

  if (profileIsVisible === false) {
    profileElement.style.display = 'block';
    profileIsVisible = true;
  } else {
    profileElement.style.display = 'none';
    profileIsVisible = false;
  }
});
*/


// Handler for most recent/most popular posts slider.
let checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    renderLatestPosts();
  } else {
    renderPopularPosts();
  }
});



/*
* !! UNFINISHED !!
* onClick handler for hidden posts
*
* Tried to fetch the number of post and check which one of the post were clicked
* so that we could make the bigger post unhidden
* didn't work

const onClick = (event) =>  {
  const clickedPost = event.target.id;

  console.log(clickedPost);

  if (clickedPost.includes('popularPost' || 'latestPost'))  {
    const child = event.target.document.getElementById('post-content');
    console.log('Child elem', child);

    if (child.className = 'inactive')  {
      child.className = 'active';
    } else  {
      child.className = 'inactive';
    }
  }
};
window.addEventListener('click', onClick);
 */




/*
!! UNFINISHED !!
HANDLER TO OPEN SIDEBAR WITH HAMBURGER ICON
 */
/*
let sidebarIsVisible = false;
let sidebarElement = document.getElementById('slide');

// Adds eventListener to hamburgerIcon and listens for clicks.
document.getElementById('hamburgerIcon')
.addEventListener("click", function() {

  if sidebarIsVisible === false) {
    sidebarElement.style.display = 'block';
    sidebarElement.toggle('clicked');
    sidebarIsVisible = true;
  } else {
    sidebarElement.style.display = 'none';
    sidebarElement.toggle('clicked');
    sidebarIsVisible = false;
  }
});
 */