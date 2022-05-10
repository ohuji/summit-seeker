"use strict";

localStorage.removeItem("mID");

const url = "http://10.114.32.78/app/auth/register";

const regForm = document.querySelector("#register-form");

regForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

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
    alert(json.message);
    location.href = "http://10.114.32.78/~remy/summit-seeker/client";
});