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

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll([
    '.service-photo-card', '.service-card', '.service-dog-card', '.spec-item',
    '.philosophy-quote', '.section-title', '.section-eyebrow', '.page-eyebrow',
    '.about-snippet-text', '.about-text', '.ps-item',
    '.cta-banner h2', '.cta-banner p', '.cta-banner .btn',
    '.page-header h1', '.page-header p',
    '.service-detail-content', '.service-detail-image'
].join(',')).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Testimonial carousel
const testimonialItems = document.querySelectorAll('.hero-testimonial');
if (testimonialItems.length > 1) {
    let currentT = 0;
    setInterval(() => {
        const next = (currentT + 1) % testimonialItems.length;
        testimonialItems[currentT].classList.add('exiting');
        testimonialItems[currentT].classList.remove('active');
        testimonialItems[next].classList.add('active');
        const prev = currentT;
        setTimeout(() => testimonialItems[prev].classList.remove('exiting'), 550);
        currentT = next;
    }, 6000);
}

// Dog bark on click
const dogFloat = document.querySelector('.dog-float');
if (dogFloat) {
    const bark = new Audio('sounds/dogledlife-bark.m4a');
    dogFloat.addEventListener('click', () => {
        bark.currentTime = 0;
        bark.play();
    });
}

// Stagger delays for card groups
[
    '.services-grid .service-photo-card',
    '.services-grid .service-card',
    '.service-dog-grid .service-dog-card',
    '.spec-grid .spec-item',
    '.photo-strip .ps-item'
].forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });
});
