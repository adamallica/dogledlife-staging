// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Page transitions
requestAnimationFrame(() => {
    document.body.classList.add('page-loaded');
});

window.addEventListener('pageshow', () => {
    document.body.classList.add('page-loaded');
});

document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('sms')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.remove('page-loaded');
            setTimeout(() => {
                window.location.href = href;
            }, 600);
        });
    }
});
