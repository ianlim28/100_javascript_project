const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
    const navLink = e.target.parentElement;
    if (navLink.classList.contains("link")) {
        navList.querySelector(".active").classList.remove("active");
        navLink.classList.add("active");
    }
})


// sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


  