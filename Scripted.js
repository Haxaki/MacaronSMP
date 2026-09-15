document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("usernameInput");
    const usernameBox = document.getElementById("usernameBox");
    const loadingScreen = document.getElementById("loadingScreen");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const welcomeUsername = document.getElementById("welcomeUsername");

    console.log("Macaron SMP script loaded");

    if (!input) {
        console.error("usernameInput not found");
        return;
    }

    input.addEventListener("keydown", function (event) {

        if (event.key !== "Enter") {
            return;
        }

        const username = input.value.trim();

        if (username === "") {
            return;
        }

        console.log("Username:", username);

        // Hide username box
        usernameBox.style.opacity = "0";
        usernameBox.style.pointerEvents = "none";

        // Show loading
        loadingScreen.classList.add("active");

        // Loading time
        setTimeout(function () {

            loadingScreen.classList.remove("active");

            // Show Welcome
            welcomeUsername.textContent = username;
            welcomeScreen.classList.add("active");

            console.log("Welcome screen shown");

            // Go to Haxaki page
            setTimeout(function () {

                console.log("Going to Haxpage.html");

                window.location.href = "./Haxpage.html";

            }, 2000);

        }, 1200);

    });

});
