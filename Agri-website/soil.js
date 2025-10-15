// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactions
    initializeAnimations();
    initializeInteractions();
    initializeParticles();
    addScrollAnimations();
    addClickInteractions();
});

// Initialize animations on page load
function initializeAnimations() {
    const cards = document.querySelectorAll('.soil-card');
    
    // Add staggered animation to cards
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize interactive elements
function initializeInteractions() {
    const cards = document.querySelectorAll('.soil-card');
    
    cards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
            
            // Animate soil sample
            const soilSample = this.querySelector('.soil-sample');
            soilSample.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            
            // Reset soil sample
            const soilSample = this.querySelector('.soil-sample');
            soilSample.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Initialize floating particles
function initializeParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Random size
        const size = Math.random() * 8 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random color variations
        const colors = ['rgba(144, 238, 144, 0.6)', 'rgba(107, 142, 35, 0.6)', 'rgba(34, 139, 34, 0.6)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 15000);
    }
    
    // Create particles continuously
    setInterval(createParticle, 2000);
}

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    document.querySelectorAll('.soil-card').forEach(card => {
        observer.observe(card);
    });
}

// Add click interactions
function addClickInteractions() {
    // Property items click effect
    const propertyItems = document.querySelectorAll('.property-item');
    propertyItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'translateX(10px) scale(1.05)';
            this.style.background = 'rgba(107, 142, 35, 0.3)';
            
            setTimeout(() => {
                this.style.transform = 'translateX(0) scale(1)';
                this.style.background = 'rgba(107, 142, 35, 0.1)';
            }, 200);
        });
    });
    
    // Crop tags click effect
    const cropTags = document.querySelectorAll('.crop-tag');
    cropTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 8px 25px rgba(107, 142, 35, 0.5)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 5px 15px rgba(107, 142, 35, 0.3)';
            }, 150);
        });
    });
    
    // Soil sample click effect
    const soilSamples = document.querySelectorAll('.soil-sample');
    soilSamples.forEach(sample => {
        sample.addEventListener('click', function() {
            this.style.transform = 'scale(1.3) rotate(360deg)';
            this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }, 500);
        });
    });
}

// Add ripple effect to cards
function addRippleEffect(e) {
    const card = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    card.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple to all cards
document.querySelectorAll('.soil-card').forEach(card => {
    card.addEventListener('click', addRippleEffect);
});

// Dynamic background color change based on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.body.style.backgroundPosition = `50% ${rate}px`;
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const cards = Array.from(document.querySelectorAll('.soil-card'));
        const currentIndex = cards.findIndex(card => card.classList.contains('focused'));
        let newIndex;
        
        if (e.key === 'ArrowDown') {
            newIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
        } else {
            newIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
        }
        
        cards.forEach(card => card.classList.remove('focused'));
        cards[newIndex].classList.add('focused');
        cards[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});