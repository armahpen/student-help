document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    const submitContact = document.getElementById('submitContact');
    if (submitContact) {
        submitContact.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });
    }

    // Service Modal Handling
    const learnMoreButtons = document.querySelectorAll('.btn-set');
    const serviceModal = document.getElementById('serviceModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    const serviceDetails = {
        personalized: {
            title: 'Personalized Tutoring',
            description: 'Our personalized tutoring sessions are designed to cater to each student’s unique learning style and pace. Whether your child needs help with Mathematics, English, or Science, our experienced tutors provide one-on-one support to ensure they excel academically.'
        },
        exam: {
            title: 'Exam Preparation',
            description: 'We offer comprehensive exam preparation for students at all levels, from junior high to university. Our tutors provide targeted guidance, practice tests, and study strategies to help students achieve top scores in their exams.'
        },
        flexible: {
            title: 'Flexible Scheduling',
            description: 'At Student Help, we understand that every student has a busy schedule. That’s why we offer flexible tutoring options, allowing you to choose between in-person and online sessions at times that work best for you.'
        }
    };

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const service = button.getAttribute('data-service');
            modalTitle.textContent = serviceDetails[service].title;
            modalDescription.textContent = serviceDetails[service].description;
            serviceModal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        serviceModal.style.display = 'none';
    });

    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            serviceModal.style.display = 'none';
        }
    });

    // Fade-in Animation on Scroll
    const sections = document.querySelectorAll('.container, .our-faculty, .contact-us');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
