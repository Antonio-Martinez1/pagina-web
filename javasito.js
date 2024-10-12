document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').replace('#', '');
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
});