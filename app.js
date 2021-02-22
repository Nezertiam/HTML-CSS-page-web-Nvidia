document.getElementById("dark-mode").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("isDark")
});

document.getElementById("burger").addEventListener("click", () => {
    document.getElementById("main-nav").classList.toggle("isOpen");
    document.getElementById("burger").classList.toggle("fa-bars");
    document.getElementById("burger").classList.toggle("fa-times");
});

