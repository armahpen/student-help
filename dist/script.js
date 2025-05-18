// Header Section
var header = document.querySelector('header');
var navMenu = header.querySelector('.nav-menu');
var navItems = navMenu.querySelectorAll('.nav-main-item');
var navToggleBtn = header.querySelectorAll(".nav-toggle-btn");

function closeNavItems() {
    navItems.forEach(item => {
        item.classList.remove('open');
    });
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('open')) {
            e.currentTarget.classList.toggle('open');
        } else {
            closeNavItems();
            e.currentTarget.classList.toggle('open');
        }
    });
});

navToggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        header.classList.toggle('bg-sapphire');
    });
});

// Hero Sign-Up Form Validation
var heroForm = document.querySelector('.hero .sign-up-form');
heroForm.addEventListener('submit', (e) => {
    var name = heroForm.querySelector('#name').value.trim();
    var email = heroForm.querySelector('#email').value.trim();
    var grade = heroForm.querySelector('#grade').value;

    if (name === '' || email === '' || grade === '') {
        e.preventDefault();
        alert('Please fill out all fields.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }

    // Formspree will handle the submission and email sending
    // Optionally, you can add a loading state or redirect here
});

// Contact Form
var contactForm = document.querySelector('.contact .contact-form');
var contactSubmitBtn = contactForm.querySelector('.btn-sign-up');

contactSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var name = contactForm.querySelector('#contact-name').value.trim();
    var email = contactForm.querySelector('#contact-email').value.trim();
    var message = contactForm.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission (replace with actual backend call)
    console.log('Contact Form Submitted:', { name, email, message });
    alert('Your message has been sent! We will get back to you soon.');
    contactForm.reset();
});

// Window Resize Handler
window.addEventListener('resize', function(event) {
    if (window.innerWidth >= 1012) {
        header.classList.remove('bg-sapphire');
        navMenu.classList.remove('open');
        closeNavItems();
    } else {
        if (navMenu.classList.contains('open')) {
            header.classList.add('bg-sapphire');
        }
    }
});

// Service Details Toggle
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('data-target');
        const details = document.querySelector(targetId);
        details.classList.toggle('active');
    });
});

// Optional: Add logo click handling if needed (e.g., scroll to top or open a new page)
// var logo = document.querySelector('.nav-logo img');
// logo.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });
