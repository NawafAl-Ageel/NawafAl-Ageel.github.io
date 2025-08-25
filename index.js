 // Add smooth scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

 // Language switcher functionality
 const translations = {
    en: {
        // Add your English translations here
    },
    ar: {
        // Add your Arabic translations here
    }
};

function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    
    html.setAttribute('lang', newLang);
    html.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');

    // Hide all language elements first
    document.querySelectorAll('.lang-en, .lang-ar').forEach(el => {
        el.style.display = 'none';
    });

    // Show elements for the new language
    document.querySelectorAll(`.lang-${newLang}`).forEach(el => {
        // Check if parent is inline or block element to set appropriate display
        const parentDisplay = window.getComputedStyle(el.parentElement).display;
        if (parentDisplay === 'flex' || el.parentElement.tagName === 'A') {
            el.style.display = 'inline';
        } else {
            el.style.display = 'block';
        }
    });
}

// Hide Arabic text initially
document.querySelectorAll('.lang-ar').forEach(el => {
    el.style.display = 'none';
});