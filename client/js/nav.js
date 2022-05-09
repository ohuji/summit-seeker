"use strict";

const logIcon = document.querySelector("#log-icon");

let user = sessionStorage.getItem("user");

console.log(!user);

if (!user) {
    logIcon.style.background = "url(./media/login_icon.png) no-repeat center center";
} else {
    logIcon.style.background = "url(./media/logout_icon.png) no-repeat center center";
};

const iconClick = () => {
    if (!user) {
        location.href = "http://10.114.32.78/~remy/summit-seeker/client/login.html";
    } else {
        location.href = "http://10.114.32.78/~remy/summit-seeker/client/logout.html";
    };
};

logIcon.addEventListener("click", iconClick);