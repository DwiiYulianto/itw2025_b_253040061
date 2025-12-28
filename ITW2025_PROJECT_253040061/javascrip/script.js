/* ===============================
   BAGIAN JAVASCRIPT INTERAKSI
================================ */

// Tunggu HTML siap dulu
document.addEventListener('DOMContentLoaded', () => {

  /* 1. MOBILE MENU (HAMBURGER) */
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  /* 2. TYPING EFFECT */
  const textElement = document.getElementById('typewriter-text');
  const words = ['Web Developer', 'UI/UX Designer', 'Mahasiswa Universitas Pasundan'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
      textElement.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      speed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  if (textElement) type();

  /* 3. NAVBAR ACTIVE SAAT SCROLL */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  /* 4. FORM CONTACT (FAKE SUBMIT) */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = this.querySelector('button');
      const originalText = btn.textContent;

      btn.textContent = 'Pesan Berhasil Terkirim!';
      btn.style.backgroundColor = '#2ecc71';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
        this.reset();
      }, 3000);
    });
  }

});
