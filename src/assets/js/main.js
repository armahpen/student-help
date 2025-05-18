document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Dropdown menu toggle
    const dropdownItems = document.querySelectorAll('.nav-item:has(.dropdown)');

    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const dropdown = item.querySelector('.dropdown');
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                e.preventDefault();
            }
        });
    });

    // Services slider functionality
    const slider = document.querySelector('.services-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });

    // Show/hide "Other" course input
    const courseSelect = document.getElementById('courses');
    const otherCourseDiv = document.getElementById('other-course');
    const otherCourseInput = document.getElementById('other-course-input');

    courseSelect.addEventListener('change', () => {
        if (courseSelect.value === 'other') {
            otherCourseDiv.style.display = 'block';
            otherCourseInput.setAttribute('required', 'true');
        } else {
            otherCourseDiv.style.display = 'none';
            otherCourseInput.removeAttribute('required');
        }
    });

    // Popup (Modal) functionality for "Enroll Now" and "Book a Session" buttons
    const enrollBtn = document.querySelector('.enroll-btn');
    const bookSessionBtn = document.querySelector('.cta-btn');
    const modal = document.getElementById('enroll-modal');
    const modalClose = document.querySelector('.modal-close');

    enrollBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    bookSessionBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains('active');
            faqQuestions.forEach(q => q.classList.remove('active'));
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
            if (!isOpen) {
                answer.classList.add('active');
                question.classList.add('active');
            }
        });
    });
});
