"use strict";

const url = "http://localhost:3030/";

const getMountains = async () => {
    try {
      const res = await fetch(`${url}mountains/`);
  
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  };

const content = document.querySelector("#mountains");

const renderMountains = async () => {
    let latestPosts = await getMountains();
    let html = "";
  
    latestPosts.forEach(mountain => {
      let segment = `<div class="mountain-card">
        <img src="./media/${mountain.Name}.jpg"
        alt="picture of a mountain"></img>
        <div class="mountain-card-info">
          <h2>${mountain.Name}</h2>
          <p>Difficulty: ${mountain.Difficulty}/10</p>
          <p>Height: ${mountain.Height}m</p>
          <p>Location: ${mountain.Location}</p>
        </div>
      </div>`;
  
      html += segment;
    });
  
    content.innerHTML = html;
  };

renderMountains();