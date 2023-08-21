const navList = document.querySelector(".nav-list");



// sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll to top
const scrollBtn = document.querySelector(".top");
const rootE = document.documentElement;

const showBtn = () => {
    const scrollTotal = rootE.scrollHeight - rootE.clientHeight;
    if (rootE.scrollTop / scrollTotal > 0.3) {
        scrollBtn.classList.add("show-btn");
    } else {
        scrollBtn.classList.remove("show-btn");
    }
};

const scrollToTop = () => {
    rootE.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};


document.addEventListener("scroll", showBtn);

scrollBtn.addEventListener("click", scrollToTop);

// responsive mobile menu
const menu = document.querySelector(".nav-list");
const menuWrapper = document.querySelector(".nav-wrapper");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menuWrapper.style.transform = "translateX(0)";
    menu.style.transform = "translateX(0)";
}

const hideMenu = () => {
    close.style.transform = "translateY(-20rem)";
    hamburger.style.display = "block";
    menuWrapper.style.transform = "translateX(-200%)";
    menu.style.transform = "translateX(-200%)";
}

navList.addEventListener("click", (e) => {
    const navLink = e.target.parentElement;
    if (navLink.classList.contains("link")) {
        navList.querySelector(".active").classList.remove("active");
        navLink.classList.add("active");
        hideMenu();
    }
})


hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);
