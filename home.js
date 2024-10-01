// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-top button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Scroll to top when button clicked
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Simple fade-in animation for testimonials
const testimonials = document.querySelectorAll('.testimonial');
const fadeInTestimonials = () => {
    testimonials.forEach((testimonial, index) => {
        const rect = testimonial.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            testimonial.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', fadeInTestimonials);
window.addEventListener('load', fadeInTestimonials); // Trigger on page load as well

// Newsletter Subscription Form
const subscriptionForm = document.querySelector('.footer-form');
subscriptionForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Simple email validation
    if (validateEmail(email)) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


