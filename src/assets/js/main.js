// Sample course data
const courses = [
    {
        id: 1,
        title: 'Mathematics',
        description: 'Master fundamental mathematical concepts',
        level: 'Intermediate',
        duration: '8 weeks'
    },
    {
        id: 2,
        title: 'Physics',
        description: 'Understanding the laws of physics',
        level: 'Advanced',
        duration: '10 weeks'
    },
    {
        id: 3,
        title: 'Chemistry',
        description: 'Explore chemical reactions and compounds',
        level: 'Beginner',
        duration: '12 weeks'
    },
    {
        id: 4,
        title: 'Biology',
        description: 'Study of life and living organisms',
        level: 'Intermediate',
        duration: '10 weeks'
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
        alert(`Successfully enrolled in ${course.title}! We'll contact you with further details.`);
    }
}

// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            
            // In a real application, you would send this data to a server
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
