/* ===============================
   JAVASCRIPT INTERAKSI WEBSITE
================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ===============================
       1. MOBILE MENU (HAMBURGER)
    ================================ */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Tutup menu saat link diklik (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    /* ===============================
       2. TYPEWRITER EFFECT
    ================================ */
    const textElement = document.getElementById('typewriter-text');
    const words = [
        'Web Developer',
        'UI/UX Designer',
        'Mahasiswa Universitas Pasundan'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentWord = words[wordIndex];
        let speed = isDeleting ? 50 : 100;

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex--);
        } else {
            textElement.textContent = currentWord.substring(0, charIndex++);
        }

        // Saat satu kata selesai diketik
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            speed = 2000;
        }
        // Saat satu kata selesai dihapus
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeWriter, speed);
    }

    if (textElement) {
        typeWriter();
    }

    /* ===============================
       3. NAVBAR ACTIVE SAAT SCROLL
    ================================ */
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });

    /* ===============================
       4. CONTACT FORM (FAKE SUBMIT)
    ================================ */
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Pesan Berhasil Terkirim!';
            submitBtn.style.backgroundColor = '#2ecc71';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                contactForm.reset();
            }, 3000);
        });
    }

});
