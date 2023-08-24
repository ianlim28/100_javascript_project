const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll indicator JS
// document.body.scrollTop targets safari browser
// document.documentElement.scrollTop targets chrome firefox
const scrollProgress = () => {
  const currentState = document.body.scrollTop || document.documentElement.scrollTop;
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");
  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercent + "%";

// newsletter JS
const newsLetter = document.querySelector(".newsletter");
if (scrollPercent > 80) {
  newsLetter.style.transform = "translateX(0)"
} else {
  newsLetter.style.transform = "translateX(-100%)"
}
  document.querySelector(".fa-times").addEventListener('click', () => {
    newsLetter.style.transform = "translateX(-100%)"
  })
};

window.onscroll = () => scrollProgress();

