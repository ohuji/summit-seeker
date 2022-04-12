'use strict';

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