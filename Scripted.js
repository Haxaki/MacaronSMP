document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("usernameInput");
    const usernameBox = document.getElementById("usernameBox");
    const loadingScreen = document.getElementById("loadingScreen");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const welcomeUsername = document.getElementById("welcomeUsername");

    // Kiểm tra element
    if (!input || !usernameBox || !loadingScreen || !welcomeScreen || !welcomeUsername) {
        console.error("Macaron SMP: Missing HTML element!");
        console.log({
            input,
            usernameBox,
            loadingScreen,
            welcomeScreen,
            welcomeUsername
        });
        return;
    }

    input.addEventListener("keydown", (event) => {

        if (event.key !== "Enter") return;

        const username = input.value.trim();

        // Không làm gì nếu chưa nhập
        if (username === "") return;

        // Ẩn ô nhập username
        usernameBox.style.opacity = "0";
        usernameBox.style.pointerEvents = "none";

        // Hiện loading
        loadingScreen.classList.add("active");

        // Sau 1.2 giây
setTimeout(() => {

    loadingScreen.classList.remove("active");

    welcomeUsername.textContent = username;

    welcomeScreen.classList.add("active");

    // Sau 2 giây chuyển tới trang Haxaki
    setTimeout(() => {
        window.location.href = "Haxaki_Hamane/Haxpage.html";
    }, 2000);

}, 1200);
