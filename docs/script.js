const overlay = document.querySelector(".overlay");
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
    const isSidebarVisible = sidebar.classList.contains("visible");

    // toggle sidebar visibility
    sidebar.classList.toggle("visible");

    // toggle overlay visibility
    overlay.style.display = isSidebarVisible ? "none" : "block";

    // Toggle menu icon
    menuIcon.src = isSidebarVisible 
        ? "./assets/images/icon-menu.svg" 
        : "./assets/images/icon-menu-close.svg";
});
