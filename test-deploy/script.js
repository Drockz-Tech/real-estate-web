const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('is-open', !isOpen);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
    });
  });
}

document.querySelectorAll('.service-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.service-item');
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const shouldOpen = button.getAttribute('aria-expanded') !== 'true';

    document.querySelectorAll('.service-item').forEach((otherItem) => {
      const otherButton = otherItem.querySelector('button');
      const otherPanel = otherItem.querySelector('.service-panel');
      const isCurrent = otherItem === item;
      otherButton.setAttribute('aria-expanded', String(isCurrent && shouldOpen));
      otherItem.classList.toggle('is-open', isCurrent && shouldOpen);
      otherPanel.hidden = !(isCurrent && shouldOpen);
    });
    panel.hidden = !shouldOpen;
  });
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}