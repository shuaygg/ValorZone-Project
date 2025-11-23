
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            
            clearErrors();
            
            
            let isValid = true;
            
            if (!name) {
                showError('nameError', 'Name is required');
                isValid = false;
            }
            
            if (!email || !validateEmail(email)) {
                showError('emailError', 'Valid email is required');
                isValid = false;
            }
            
            if (!subject) {
                showError('subjectError', 'Please select a subject');
                isValid = false;
            }
            
            if (!message || message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters');
                isValid = false;
            }
            
            if (isValid) {
                
                const successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';
                
                
                contactForm.reset();
                
                
                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 5000);
                
               
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.style.display = 'block';
                setTimeout(function() {
                    errorMessage.style.display = 'none';
                }, 5000);
            }
        });
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}


function clearErrors() {
    const errorElements = document.querySelectorAll('.text-danger');
    errorElements.forEach(el => {
        el.textContent = '';
    });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const page = href.split('/').pop();
        
        if (page === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


window.addEventListener('load', updateActiveNavLink);


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


window.addEventListener('load', function() {
    document.querySelectorAll('.team-card, .tournament-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});


console.log('⚡ Valorzone Esports website loaded successfully!');
console.log('🎮 Ready to dominate the Valorant competitive scene!');

document.addEventListener("DOMContentLoaded", () => {
    
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 50);

    t
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');

            
            if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && link.target !== '_blank') {
                e.preventDefault();
                
               
                document.body.classList.remove('loaded');

                
                setTimeout(() => {
                    window.location.href = href;
                }, 500); 
            }
        });
    });
});