'use strict';

// Posts
const url = 'http://localhost:3030';

const postContainer = document.querySelector('#postContainer');
const popularList = document.querySelector('#postList');
const recentList = document.querySelector('#postList');

// Applied to posts
const postStyle = {
  'border': '1px solid #1E1E24',
  'border-radius': '5px',
  'padding': '5px',
  'margin': '10px',
  'background-color': '#dde0e7',
  'box-shadow': '9px 10px 5px -5px rgba(0,0,0,0.22)',
  'display': 'flex',
  'gap': '2vh',
  'flex-direction': 'column'
};

const hiddenPostStyle = {
  'z-index': '3',
  'position': 'fixed',
  'top': '50%',
  'left': '50%',
  'border-radius': '12px',
  'width': '94vh',
  'height': '66vh',
  'background-color': 'crimson',
  'color': '#1E1E24',
  'margin-top': '-33vh',  /* Negative half of height. */
  'margin-left': '-47vh'  /* Negative half of width. */
}

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
  let i = 0;

  /*
  Creates shown element containing little of post data
  Creates also bigger hidden element inside the shown element which contains much more data
 */
  let header = `<h2>Most popular journeys</h2>`;
  html += header;

  popularPosts.forEach(userPost => {
    let segment = `<li id="popularPost${i}">
      <img src="../../server/uploads/${userPost.Imagename}" id="post-image">
      <div id="post">
        <article id="post-article">
          <h4 id="post-username">${userPost.Username}</h4>
          <h4 id="post-title">${userPost.Title}</h4>
          <p id="post-equipment">${userPost.Equipment}</p>
          <p id="post-description">${userPost.Description}</p>
        </article>
        <div id="post-likes-and-dislikes">
          <h4 id="post-likes">Likes: ${userPost.Likes}</h4>
          <h4 id="post-dislikes">Dislikes: ${userPost.Dislikes}</h4>
        </div>
      </div>
    </li>`;

    html += segment;
    i++;
  });

  popularList.innerHTML = html;

  // Goes through 4 posts and gives them style
  for (let i = 0; i < 4; i++) {

    // Sets style to shown posts
    let currentPost = document.getElementById("popularPost" + i);
    Object.assign(currentPost.style, postStyle);
  }
};

const renderLatestPosts = async () => {
  let latestPosts = await getLatest();
  let html = "";
  let i = 0;

  /*
  Creates shown element containing little of post data
  Creates also bigger hidden element inside the shown element which contains much more data
   */
  let header = `<h2>Most recent journeys</h2>`;
  html += header;

  latestPosts.forEach(userPost => {
    let segment = `<li id="latestPost${i}">
      <div id="post-figure">
        <img src="../../server/uploads/${userPost.Imagename}" id="post-image">
        <div id="post-titleContainer"
          <h4 id="post-username">${userPost.Username}</h4>
          <h4 id="post-title">${userPost.Title}</h4>
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
    i++;
  });

  recentList.innerHTML = html;

  //Goes through 4 posts and gives them style
  //Could be developed better
  for (let i = 0; i < 4; i++) {

    let currentPost = document.getElementById("latestPost" + i);

    Object.assign(currentPost.style, postStyle);
  };
};

/*const postContent = document.querySelector("#post-content");
console.log(postContent);
postContent.className = "inactive";

const onClick = () => {
  if (postContent.className === "active") {
    postContent.className === "inactive";
  } else {
    postContent.className === "active"
  }
}

postContent.addEventListener("click", onClick());*/

renderLatestPosts();


/*
// ---- Checks if admin ----
// ---- User backend must be made !!! or not :D
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


/** Hidden elements handling
 */

let profileIsVisible = false;
let profileElement = document.getElementById('profile');

// Adds eventListener to profilePicture and listens for clicks.
// If statement sets profileElement visible or hidden depending of isVisible variable.
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


let checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    renderLatestPosts();
  } else {
    renderPopularPosts();
  }
});



/*
* Tried to fetch the number of post and check which one of the post were clicked
* so that we could make the bigger post unhidden
* didn't work.

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




// HANDLER TO OPEN SIDEBAR WITH HAMBURGER ICON
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