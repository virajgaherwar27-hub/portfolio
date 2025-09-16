// --- Scroll to Top Button ---
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


// --- Section Reveal on Scroll ---
const animatedSections = document.querySelectorAll('.animated-section');

const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the item is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, observerOptions);

animatedSections.forEach(section => {
    observer.observe(section);
});

// Initial check in case sections are already in view on page load
// (especially for shorter content or larger screens)
document.addEventListener('DOMContentLoaded', () => {
    animatedSections.forEach(section => {
        // Check if section is already in view on load
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('is-visible');
        } else {
            observer.observe(section);
        }
    });
});