document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const openForm = document.getElementById('openForm');
  const openFormHero = document.getElementById('openFormHero');
  const closeForm = document.getElementById('closeForm');
  const popupForm = document.getElementById('popupForm');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  openForm.addEventListener('click', (e) => {
    e.preventDefault();
    popupForm.style.display = 'flex';
  });

  openFormHero.addEventListener('click', (e) => {
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
});
