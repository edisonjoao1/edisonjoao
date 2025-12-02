// ========================================
// YENNIFER NUÑEZ - LUXURY INTERACTIONS
// Smooth animations and user experience
// ========================================

// Navigation scroll effect
const nav = document.getElementById('mainNav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateOnScroll = document.querySelectorAll('.product-card, .story-content, .product-card-small');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Product card hover effects (double image fade)
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add subtle scaling animation
        const image = card.querySelector('.product-image-placeholder');
        if (image) {
            image.style.transform = 'scale(1.05)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('.product-image-placeholder');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        // Show success message (in production, this would submit to backend)
        alert('¡Gracias por unirte a nuestro círculo íntimo! Te enviaremos actualizaciones exclusivas a ' + email);
        newsletterForm.reset();
    });
}

// Cart functionality (basic simulation)
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
let itemCount = 0;

// Add to cart simulation for product cards
productCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        itemCount++;
        cartCount.textContent = itemCount;

        // Subtle animation
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// Loading animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Cursor trail effect (subtle luxury touch)
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });

    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

console.log('Yennifer Nuñez - Luxury Design System Loaded');
console.log('Designed with elegance and sophistication');
