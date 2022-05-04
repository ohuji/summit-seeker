"use strict";

const url = "http://localhost:3030/auth/logout";

(async () => {
    try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        location.href = "/summit-seeker/client";
    } catch (e) {
        console.log(e.message);
    }
})();