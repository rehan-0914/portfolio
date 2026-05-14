// =============================================
// NAVBAR — scroll effect + mobile menu
// =============================================
const navbar   = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// =============================================
// TYPEWRITER
// =============================================
const phrases = [
  'AI Engineer & Product Builder',
  'Full-Stack Developer',
  'Security Researcher',
  'Chrome Extension Creator',
  'Open-Source Tinkerer',
];

let pIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = phrases[pIdx];
  if (!deleting) {
    el.textContent = current.slice(0, ++cIdx);
    if (cIdx === current.length) {
      deleting = true;
      setTimeout(type, 2200);
      return;
    }
  } else {
    el.textContent = current.slice(0, --cIdx);
    if (cIdx === 0) {
      deleting = false;
      pIdx = (pIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 45 : 80);
}

type();

// =============================================
// INTERSECTION OBSERVER — reveal animations
// =============================================
const revealEls = document.querySelectorAll(
  '.section-label, .section-title, .section-subtitle, .about-text, .about-card-wrap, ' +
  '.skill-category, .project-featured, .project-card, .internship-card, .internship-note, ' +
  '.contact-title, .contact-desc, .contact-actions'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) : 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// =============================================
// SMOOTH NAV SCROLL
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// =============================================
// ACTIVE NAV LINK HIGHLIGHT
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= top && scrollY < top + height)
        ? 'var(--text)' : '';
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// =============================================
// STAGGER SKILL CARDS
// =============================================
document.querySelectorAll('.skill-category').forEach((el, i) => {
  el.style.transitionDelay = `${i * 80}ms`;
});

// =============================================
// CURSOR PARALLAX ON HERO GLOWS
// =============================================
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  document.querySelectorAll('.glow').forEach((g, i) => {
    const factor = (i + 1) * 0.4;
    g.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
}, { passive: true });
