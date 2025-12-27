/* BAGIAN JAVASCRIPT UNTUK INTERAKSI WEBSITE */

// 1. Mobile Menu Toggle (Fungsi Hamburger)
const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Saat tombol hamburger diklik, tambahkan/hapus class 'active'
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tutup menu saat link navigasi di klik (khusus mode mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        // Hapus class 'active' untuk menyembunyikan menu
        navMenu.classList.remove('active');
    });
});


// 2. Typing Effect (Efek Mengetik di Bagian Hero)
const textElement = document.getElementById('typewriter-text');
// Daftar kata yang akan di ketik
const words = ['Web Developer', 'UI/UX Designer', 'Mahasiswa Universitas Pasundan.'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Mode menghapus karakter
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Mode mengetik karakter
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100; // Kecepatan mengetik

    if (isDeleting) {
        typeSpeed /= 2; // Menghapus lebih cepat
    }

    // Jika kata selesai diketik
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Jeda (pause) setelah kata selesai diketik
    } 
    // Jika kata selesai dihapus
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Pindah ke kata berikutnya
        typeSpeed = 500; // Jeda sebelum mulai mengetik kata baru
    }

    // Ulangi proses
    setTimeout(type, typeSpeed);
}

// Jalankan efek mengetik saat semua konten halaman dimuat
document.addEventListener('DOMContentLoaded', type);


// 3. Active Link Highlighter (Menandai Link Navigasi yang Sedang Aktif)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        // Ambil posisi atas section
        const sectionTop = section.offsetTop;
        // Ambil tinggi section
        const sectionHeight = section.clientHeight;

        // Cek apakah posisi scroll saat ini berada di dalam section
        // (Dikurangi 1/3 tinggi section agar penanda aktif lebih cepat)
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // Loop melalui semua link navigasi
    navLinks.forEach(a => {
        // Reset warna semua link
        a.style.color = 'var(--text-color)';
        
        // Jika href link mengandung ID section yang aktif, beri warna utama
        if (a.getAttribute('href').includes(current)) {
            a.style.color = 'var(--primary-color)';
        }
    });
});


// 4. Simple Form Alert (Simulasi Pengiriman Formulir)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // Mencegah halaman reload saat form disubmit
    e.preventDefault(); 
    
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    
    // Tampilkan pesan sukses sementara
    btn.textContent = 'Pesan Berhasil Terkirim!';
    btn.style.backgroundColor = '#2ecc71'; // Warna hijau
    
    // Kembalikan tombol ke keadaan semula setelah 3 detik dan reset form
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = ''; // Kembalikan ke warna CSS
        this.reset(); // Kosongkan input form
    }, 3000);
});