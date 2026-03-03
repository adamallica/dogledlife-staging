// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// Page transitions
document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('sms') && !href.startsWith('tel')) {
        link.addEventListener('click', (e) => {
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
            if (link.target === '_blank') return;
            e.preventDefault();
            document.body.classList.add('page-transition');
            setTimeout(() => { window.location.href = href; }, 600);
        });
    }
});
