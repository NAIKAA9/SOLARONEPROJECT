// Simple JavaScript for expanding/collapsing FAQs (optional)
const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const nextElement = item.nextElementSibling;
        if (nextElement.style.display === 'block') {
            nextElement.style.display = 'none';
        } else {
            nextElement.style.display = 'block';
        }
    });
});
