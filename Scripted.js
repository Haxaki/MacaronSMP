const input = document.getElementById("usernameInput");
const usernameBox = document.getElementById("usernameBox");
const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const welcomeUsername = document.getElementById("welcomeUsername");


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const username = input.value.trim();

        // Không làm gì nếu chưa nhập tên
        if (username === "") {
            return;
        }


        // Ẩn ô nhập
        usernameBox.style.opacity = "0";


        // Hiện loading
        loadingScreen.classList.add("active");


        // Loading trong 1.2 giây
        setTimeout(function() {

            loadingScreen.classList.remove("active");

            // Đưa username vào Welcome
            welcomeUsername.textContent = username;

            // Hiện Welcome
            welcomeScreen.classList.add("active");

        }, 1200);

    }

});