document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("usernameInput");
    const usernameBox = document.getElementById("usernameBox");
    const loadingScreen = document.getElementById("loadingScreen");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const welcomeUsername = document.getElementById("welcomeUsername");

    // Check HTML elements
    if (!input || !usernameBox || !loadingScreen || !welcomeScreen || !welcomeUsername) {
        console.error("ERROR: Cannot find required HTML elements.");
        return;
    }

    function enterWebsite() {

        const username = input.value.trim();

        // Don't do anything if empty
        if (username === "") {
            input.focus();
            return;
        }

        console.log("Username:", username);

        // Hide username box
        usernameBox.style.display = "none";

        // Show loading screen
        loadingScreen.classList.add("active");

        console.log("Loading screen");

        // Loading for 1.2 seconds
        setTimeout(function () {

            loadingScreen.classList.remove("active");

            // Put username into Welcome
            welcomeUsername.textContent = username;

            // Show Welcome
            welcomeScreen.classList.add("active");

            console.log("Welcome screen");

            // Go to Haxaki page after 2 seconds
            setTimeout(function () {

                console.log("Going to Haxpage.html");

                window.location.href = "./Haxpage.html";

            }, 2000);

        }, 1200);
    }

    // Press Enter
    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            enterWebsite();
        }

    });

});
