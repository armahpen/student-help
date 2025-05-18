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
});
