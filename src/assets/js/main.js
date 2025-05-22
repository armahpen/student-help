// Sample course data
const courses = [
    {
        id: 1,
        title: 'Primary School (Grade 1 – Grade 6)',
        description: 'Foundational support in core subjects including Mathematics, English, and Science.',
        level: 'Beginner',
        duration: 'Ongoing'
    },
    {
        id: 2,
        title: 'Junior High School (Grade 7 – Grade 10)',
        description: 'In-depth subject guidance and exam preparation.',
        level: 'Intermediate',
        duration: 'Ongoing'
    },
    {
        id: 3,
        title: 'Senior High School (SHS)',
        description: 'Special vacation classes focused on Mathematics, English, Science, and one preferred elective subject of your choice.',
        level: 'Advanced',
        duration: 'Vacation Period'
    },
    {
        id: 4,
        title: 'University (All Levels)',
        description: 'Tailored academic support across various disciplines to meet the needs of university students.',
        level: 'Advanced',
        duration: 'Ongoing'
    }
];

// Populate courses
function populateCourses() {
    const courseGrid = document.getElementById('courseGrid');
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-meta">
                <span>Level: ${course.level}</span>
                <span>Duration: ${course.duration}</span>
            </div>
            <button onclick="enrollCourse(${course.id})" class="cta-button">Enroll Now</button>
        `;
        courseGrid.appendChild(courseCard);
    });
}

// Enroll in a course
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        const popupForm = document.getElementById('popupForm');
        popupForm.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Navigation and Popup Form
    const openForm = document.getElementById('openForm');
    const openFormHero = document.getElementById('openFormHero');
    const openFormAbout = document.getElementById('openFormAbout');
    const closeForm = document.getElementById('closeForm');
    const popupForm = document.getElementById('popupForm');
    const faqItems = document.querySelectorAll('.faq-item h4');

    openForm.addEventListener('click', (e) => {
        e.preventDefault();
        popupForm.style.display = 'flex';
    });

    openFormHero.addEventListener('click', (e) => {
        e.preventDefault();
        popupForm.style.display = 'flex';
    });

    openFormAbout.addEventListener('click', (e) => {
        e.preventDefault();
        popupForm.style.display = 'flex';
    });

    closeForm.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });

    popupForm.addEventListener('click', (e) => {
        if (e.target === popupForm) {
            popupForm.style.display = 'none';
        }
    });

    // Booking form submission
    document.getElementById('bookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your request has been submitted. We will contact you soon.');
        popupForm.style.display = 'none';
    });

    // FAQ toggle
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active');
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Initialize courses
    populateCourses();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll-based animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-out');
        observer.observe(section);
    });
});

// Add a class to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
