// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item h4');
faqItems.forEach(item => {
    item.addEventListener('click', function() {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});
