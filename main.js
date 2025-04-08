document.addEventListener('DOMContentLoaded', function() {
    // Atualizar o ano atual no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Menu mobile toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Alternar ícone
            const icon = mobileMenuButton.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on question
            this.classList.toggle('active');
            
            // Toggle active class on answer
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
            
            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
    
    // Ativar o primeiro FAQ por padrão
    if (faqQuestions.length > 0) {
        faqQuestions[0].classList.add('active');
        faqQuestions[0].nextElementSibling.classList.add('active');
    }
    
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuButton.querySelector('i').classList.remove('fa-times');
                    mobileMenuButton.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });
});
