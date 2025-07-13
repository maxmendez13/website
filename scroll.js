document.addEventListener('DOMContentLoaded', () => {
    const fadeInTextElements = document.querySelectorAll('.fade-in-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.25 // Trigger when 25% of the element is visible
    });

    fadeInTextElements.forEach(element => {
        observer.observe(element);
    });
});
