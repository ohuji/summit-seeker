"use strict";

localStorage.removeItem("mID");

const url = "http://localhost:3030/auth/register";

const regForm = document.querySelector("#register-form");

regForm.addEventListener("submit", async (evt) => {
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
    alert(json.message);
    location.href = "/summit-seeker/client";
});