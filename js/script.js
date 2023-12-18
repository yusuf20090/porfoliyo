const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const navLinksAll = document.querySelectorAll('.nav__links a');
hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active');
}
for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove('hamburger_active');
        navLinks.classList.remove('nav__links_active');
    }
}