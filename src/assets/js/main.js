document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle for mobile
    const navToggleBtn = document.querySelectorAll('.nav-toggle-btn');
    const navMenu = document.querySelector('.nav-menu');

    navToggleBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu-open');
        });
    });

    // Learn More buttons toggle
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    learnMoreButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            const targetDetails = document.querySelector(targetId);
            targetDetails.classList.toggle('active');
            btn.textContent = targetDetails.classList.contains('active') ? 'Show Less' : 'Learn More';
        });
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

    // Popup (Modal) functionality
    const enrollBtn = document.querySelector('.enroll-btn');
    const modal = document.getElementById('enroll-modal');
    const modalClose = document.querySelector('.modal-close');

    // Open modal when "Enroll Now" button is clicked
    enrollBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    // Close modal when close button is clicked
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
