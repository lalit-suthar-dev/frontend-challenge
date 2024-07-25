document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseover', function() {
            section.style.transform = 'translateY(-10px)';
        });

        section.addEventListener('mouseout', function() {
            section.style.transform = 'translateY(0)';
        });
    });

    const header = document.querySelector('header');
    header.style.backgroundColor = '#004d99';
    header.style.transition = 'background-color 0.5s ease';

    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#0055cc';
    });

    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '#004d99';
    });
});
