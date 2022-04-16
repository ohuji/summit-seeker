'use strict';


// Hidden elements handling
let profileIsVisible = false;
let profileElement = document.getElementById('profile');

// Adds eventListener to profilePicture and listens for clicks.
// If statement sets profileElement visible or hidden depending of isVisible variable.
document.getElementById('profilePicture')
.addEventListener("click", function() {

  if (profileIsVisible === false) {
    profileElement.style.display = 'block';
    profileIsVisible = true;
  } else {
    profileElement.style.display = 'none';
    profileIsVisible = false;
  }
});
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


/*
// Posts
const url = 'http://localhost:3030';

const popularList = document.querySelector('#popularList');
const recentList = document.querySelector('#recentList');

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

  popularPosts.forEach(userPost => {
    let segment = `<li id="post">
      <h4 id="post-username">${userPost.Username}</h4>
      <h4 id="post-title">${userPost.Title}</h4>
      <div id="post-content" class="">
        <p>${userPost.Description}</p>
      </div>
    </li>`;

    html += segment;
  });

  popularList.innerHTML = html;
};

const renderLatestPosts = async () => {
  let latestPosts = await getLatest();
  let html = "";

  latestPosts.forEach(userPost => {
    let segment = `<li id="post">
      <h4 id="post-username">${userPost.Username}</h4>
      <h4 id="post-title">${userPost.Title}</h4>
      <div id="post-content" class="">
        <p>${userPost.Description}</p>
      </div>      
    </li>`;

    html += segment;
  });

  recentList.innerHTML = html;
};

renderPopularPosts();
renderLatestPosts();

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