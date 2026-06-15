function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const respuesta = faqItem.querySelector('.faq-respuesta');

    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.querySelector('.faq-respuesta').classList.remove('show');
            item.querySelector('.faq-pregunta').classList.remove('active');
        }
    });

    respuesta.classList.toggle('show');
    button.classList.toggle('active');
}