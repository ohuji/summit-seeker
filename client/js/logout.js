"use strict";

const url = "http://10.114.32.78/app/auth/logout";

(async () => {
    try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        location.href = "http://10.114.32.78/~remy/summit-seeker/client";
    } catch (e) {
        console.log(e.message);
    }
})();