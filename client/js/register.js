"use strict";

localStorage.removeItem("mID");

const url = "http://localhost:3030/auth/register";

const regForm = document.querySelector("#register-form");

/*
    On click post username and password to register
    after that reroute to home page.
*/
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
    location.href = "/summit-seeker/client";
});