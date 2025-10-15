    function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a front-end demo.)');
    });
