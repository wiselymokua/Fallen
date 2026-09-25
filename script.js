const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

const navItems = document.querySelectorAll('nav a');

navItems.forEach((link) => {
    link.addEventListener('click', () => {
        navItems.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.18 }
);

revealElements.forEach((element) => observer.observe(element));
