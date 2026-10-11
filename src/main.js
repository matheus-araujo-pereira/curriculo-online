// main.js - Minimalist Executive Portfolio
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollspy();
});

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Subtle glass border on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('bg-[#0A0F1D]/85', 'backdrop-blur-md', 'border-b', 'border-white/10');
      navbar?.classList.remove('bg-transparent', 'border-transparent');
    } else {
      navbar?.classList.remove('bg-[#0A0F1D]/85', 'backdrop-blur-md', 'border-b', 'border-white/10');
      navbar?.classList.add('bg-transparent', 'border-transparent');
    }
  });

  // Mobile drawer toggle
  if (menuBtn && mobileMenu) {
    const toggleMenu = () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
          toggleMenu();
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  }
}

function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav-link');

  if (!sections.length || !desktopLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          desktopLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-white');
              link.classList.remove('text-gray-400');
            } else {
              link.classList.remove('text-white');
              link.classList.add('text-gray-400');
            }
          });
        }
      });
    },
    { rootMargin: '-25% 0px -65% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}
