// Initialize lightGallery
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('lightgallery')) {
        lightGallery(document.getElementById('lightgallery'), {
            selector: '.gallery-item',
            download: false,
            counter: false
        });
    }

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.animate__animated');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                const animationClass = element.getAttribute('class').split(' ').find(cls => cls.startsWith('animate__'));
                if (animationClass) {
                    element.classList.add(animationClass);
                }
            }
        });
    };

    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});





// Atualizar ano do copyright automaticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Simular login na área do cliente (exemplo)
function simulateLogin() {
    const user = {
        name: "Carlos Silva",
        lastAccess: new Date().toLocaleDateString()
    };

    document.querySelector('.client-name').textContent = `Olá, ${user.name}`;
    document.querySelector('.text-muted').textContent = `Último acesso: ${user.lastAccess}`;
}

// Chamar a função quando a página da área do cliente carregar
if (document.querySelector('.client-area')) {
    document.addEventListener('DOMContentLoaded', simulateLogin);
}

// Adicionar máscara para telefone no formulário de trabalho
if (document.getElementById('phone')) {
    document.getElementById('phone').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}

// Filtro de busca para FAQ
if (document.querySelector('.faq-page input')) {
    document.querySelector('.faq-page input').addEventListener('keyup', function () {
        const searchTerm = this.value.toLowerCase();
        const questions = document.querySelectorAll('.accordion-button');

        questions.forEach(question => {
            const text = question.textContent.toLowerCase();
            const parentItem = question.closest('.accordion-item');

            if (text.includes(searchTerm)) {
                parentItem.style.display = 'block';
            } else {
                parentItem.style.display = 'none';
            }
        });
    });
}