"use strict";

localStorage.removeItem("mID");

const url = "http://10.114.32.78/app/auth/login";

const logForm = document.querySelector("#login-form");

logForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    console.log(username);
    console.log(password);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    };

    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    if (!json.user) {
        alert(json.message);
    } else {
        sessionStorage.setItem("token", json.token);
        sessionStorage.setItem("user", JSON.stringify(json.user));
        location.href = "http://10.114.32.78/~remy/summit-seeker/client";
    }
});