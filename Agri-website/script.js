// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Change button text/icon based on theme
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️ Light Mode';
    } else {
        this.textContent = '🌙 Dark Mode';
    }
});
   

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to all nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Navbar scroll effect
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 100) {
//         navbar.style.background = 'rgba(46, 125, 50, 0.95)';
//         navbar.style.backdropFilter = 'blur(10px)';
//     } else {
//         navbar.style.background = 'linear-gradient(135deg, #2e7d32, #4caf50)';
//         navbar.style.backdropFilter = 'none';
//     }
// });

// Service Details Data
const serviceDetails = [
    {
        title: "Crop Consultation",
        content: `
            <h3>Expert Crop Consultation Services</h3>
            <p>Our agricultural experts provide comprehensive consultation services to help you:</p>
            <ul>
                <li>Choose the right crops for your soil and climate</li>
                <li>Optimize planting schedules and techniques</li>
                <li>Implement sustainable farming practices</li>
                <li>Maximize yield and reduce costs</li>
                <li>Access to 24/7 expert support</li>
            </ul>
            <p><strong>Available in:</strong> Hindi, English, Tamil, Telugu, Gujarati, and more regional languages</p>
        `
    },
    {
        title: "Weather Forecast",
        content: `
            <h3>Advanced Weather Forecasting</h3>
            <p>Stay ahead of weather changes with our comprehensive forecasting service:</p>
            <ul>
                <li>7-day accurate weather predictions</li>
                <li>Rainfall and temperature alerts</li>
                <li>Storm and cyclone warnings</li>
                <li>Best planting and harvesting time recommendations</li>
                <li>SMS and app notifications</li>
            </ul>
            <p><strong>Coverage:</strong> All major agricultural regions across India</p>
        `
    },
    {
        title: "Market Prices",
        content: `
            <h3>Real-Time Market Information</h3>
            <p>Make informed selling decisions with our market intelligence:</p>
            <ul>
                <li>Daily mandi prices for 100+ crops</li>
                <li>Price trend analysis and forecasts</li>
                <li>Best market locations for your produce</li>
                <li>Transportation cost optimization</li>
                <li>Direct buyer connections</li>
            </ul>
            <p><strong>Markets Covered:</strong> 500+ mandis across India</p>
        `
    },
    {
        title: "Training Programs",
        content: `
            <h3>Comprehensive Agricultural Training</h3>
            <p>Enhance your farming skills with our training programs:</p>
            <ul>
                <li>Modern farming techniques and technology</li>
                <li>Organic and sustainable agriculture</li>
                <li>Pest and disease management</li>
                <li>Financial planning for farmers</li>
                <li>Digital literacy and technology adoption</li>
            </ul>
            <p><strong>Training Modes:</strong> Online, Offline, and Field demonstrations</p>
        `
    }
];

// Show Service Details
function showServiceDetails(index) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = serviceDetails[index].content;
    openModal();
}

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', debounce(handleScrollAnimation, 10));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));


// Crop Information Data
const cropData = {
    rice: {
        name: "Rice (धान)",
        description: "Rice is the staple food for more than half of India's population and is cultivated in about 44 million hectares.",
        season: "Kharif (June-November)",
        states: "West Bengal, Uttar Pradesh, Punjab, Tamil Nadu, Andhra Pradesh",
        varieties: "Basmati, Jasmine, Sona Masuri, IR-64",
        tips: [
            "Requires 20-25°C temperature during growing season",
            "Needs 1000-2000mm annual rainfall",
            "Best grown in clay or loamy soil",
            "Regular water management is crucial"
        ]
    },
    wheat: {
        name: "Wheat (गेहूं)",
        description: "Wheat is the second most important cereal crop in India and is the main staple food in North India.",
        season: "Rabi (November-April)",
        states: "Uttar Pradesh, Punjab, Haryana, Rajasthan, Madhya Pradesh",
        varieties: "HD-2967, PBW-343, WH-147, DBW-88",
        tips: [
            "Requires 10-15°C during sowing, 21-26°C during ripening",
            "Needs 75-100cm annual rainfall",
            "Grows well in loamy soil with good drainage",
            "Avoid waterlogging during grain filling"
        ]
    },
    cotton: {
        name: "Cotton (कपास)",
        description: "Cotton is one of the most important cash crops in India, providing raw material for the textile industry.",
        season: "Kharif (April-December)",
        states: "Gujarat, Maharashtra, Telangana, Karnataka, Haryana",
        varieties: "Bt Cotton, Desi Cotton, American Cotton",
        tips: [
            "Requires 21-30°C temperature",
            "Needs 50-100cm annual rainfall",
            "Black cotton soil is most suitable",
            "Regular pest monitoring is essential"
        ]
    },
    sugarcane: {
        name: "Sugarcane (गन्ना)",
        description: "Sugarcane is a major cash crop in India and is the primary source of sugar production.",
        season: "Year-round crop (12-18 months)",
        states: "Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu, Gujarat",
        varieties: "Co-86032, Co-0238, Co-85019, Co-94012",
        tips: [
            "Requires 20-26°C temperature",
            "Needs 75-150cm annual rainfall",
            "Deep, well-drained loamy soil preferred",
            "Regular irrigation and fertilization needed"
        ]
    }
};

// Show Crop Information
function showCropInfo(crop) {
    // Remove active class from all buttons
    document.querySelectorAll('.crop-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    document.querySelector(`[onclick="showCropInfo('${crop}')"]`).classList.add('active');
    
    const cropInfo = document.getElementById('crop-info');
    const data = cropData[crop];
    
    cropInfo.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <div class="crop-details">
            <div class="crop-detail">
                <h4>Growing Season</h4>
                <p>${data.season}</p>
            </div>
            <div class="crop-detail">
                <h4>Major States</h4>
                <p>${data.states}</p>
            </div>
            <div class="crop-detail">
                <h4>Popular Varieties</h4>
                <p>${data.varieties}</p>
            </div>
            <div class="crop-detail">
                <h4>Growing Tips</h4>
                <ul>
                    ${data.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    cropInfo.classList.add('fade-in');
}

// Weather Information
function getWeatherInfo() {
    const cityInput = document.getElementById('city-input');
    const weatherDisplay = document.getElementById('weather-display');
    const city = cityInput.value.trim();
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    // Show loading
    weatherDisplay.innerHTML = `
        <div class="weather-placeholder">
            <div class="loading"></div>
            <p>Getting weather information for ${city}...</p>
        </div>
    `;
    
    // Simulate API call with mock data
    setTimeout(() => {
        const mockWeatherData = generateMockWeather(city);
        displayWeather(mockWeatherData, city);
    }, 1500);
}

// Generate Mock Weather Data
function generateMockWeather(city) {
    const temperatures = [25, 28, 32, 30, 27, 26, 29];
    const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Heavy Rain'];
    const humidity = Math.floor(Math.random() * 40) + 40; // 40-80%
    const windSpeed = Math.floor(Math.random() * 20) + 5; // 5-25 km/h
    
    return {
        temperature: temperatures[Math.floor(Math.random() * temperatures.length)],
        condition: conditions[Math.floor(Math.random() * conditions.length)],
        humidity: humidity,
        windSpeed: windSpeed,
        pressure: Math.floor(Math.random() * 50) + 1000, // 1000-1050 hPa
        visibility: Math.floor(Math.random() * 5) + 5 // 5-10 km
    };
}

// Display Weather Information
function displayWeather(data, city) {
    const weatherDisplay = document.getElementById('weather-display');
    
    weatherDisplay.innerHTML = `
        <h3>Weather in ${city}</h3>
        <div class="weather-info">
            <div class="weather-item">
                <h4>Temperature</h4>
                <p>${data.temperature}°C</p>
            </div>
            <div class="weather-item">
                <h4>Condition</h4>
                <p>${data.condition}</p>
            </div>
            <div class="weather-item">
                <h4>Humidity</h4>
                <p>${data.humidity}%</p>
            </div>
            <div class="weather-item">
                <h4>Wind Speed</h4>
                <p>${data.windSpeed} km/h</p>
            </div>
            <div class="weather-item">
                <h4>Pressure</h4>
                <p>${data.pressure} hPa</p>
            </div>
            <div class="weather-item">
                <h4>Visibility</h4>
                <p>${data.visibility} km</p>
            </div>
        </div>
        <div class="mt-20">
            <h4>Farming Recommendations:</h4>
            <p>${getFarmingRecommendation(data)}</p>
        </div>
    `;
}

// Get Farming Recommendation based on weather
function getFarmingRecommendation(weather) {
    if (weather.condition.includes('Rain')) {
        return "Good time for transplanting rice. Avoid harvesting activities. Check drainage systems.";
    } else if (weather.temperature > 35) {
        return "Very hot weather. Increase irrigation frequency. Avoid spraying during day time.";
    } else if (weather.humidity > 80) {
        return "High humidity may lead to fungal diseases. Monitor crops closely and apply preventive measures.";
    } else {
        return "Good weather conditions for most farming activities. Perfect time for field operations.";
    }
}

// Government Schemes Data
const schemeDetails = {
    pmkisan: {
        title: "PM-KISAN Scheme",
        content: `
            <h3>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</h3>
            <p><strong>Objective:</strong> Provide income support to all landholding farmer families</p>
            <h4>Benefits:</h4>
            <ul>
                <li>₹6000 per year in three equal installments</li>
                <li>Direct transfer to bank account</li>
                <li>No upper limit on family income</li>
                <li>Covers all landholding farmers</li>
            </ul>
            <h4>Eligibility:</h4>
            <ul>
                <li>All landholding farmer families</li>
                <li>Must have cultivable land</li>
                <li>Aadhaar card mandatory</li>
            </ul>
            <h4>How to Apply:</h4>
            <p>Visit PM-KISAN portal or contact local agriculture officer</p>
        `
    },
    insurance: {
        title: "Pradhan Mantri Fasal Bima Yojana",
        content: `
            <h3>Crop Insurance Scheme</h3>
            <p><strong>Objective:</strong> Provide insurance coverage and financial support to farmers</p>
            <h4>Coverage:</h4>
            <ul>
                <li>All food crops, oilseeds, and annual commercial/horticultural crops</li>
                <li>Pre-sowing to post-harvest losses</li>
                <li>Localized calamities like hailstorm, landslides</li>
                <li>Prevented sowing due to deficit rainfall</li>
            </ul>
            <h4>Premium Rates:</h4>
            <ul>
                <li>Kharif: 2% of sum insured</li>
                <li>Rabi: 1.5% of sum insured</li>
                <li>Commercial/Horticultural: 5% of sum insured</li>
            </ul>
            <h4>How to Apply:</h4>
            <p>Through banks, CSCs, or agriculture insurance companies</p>
        `
    },
    soilhealth: {
        title: "Soil Health Card Scheme",
        content: `
            <h3>Soil Health Card Scheme</h3>
            <p><strong>Objective:</strong> Provide soil health cards to farmers with crop-wise recommendations</p>
            <h4>Benefits:</h4>
            <ul>
                <li>Free soil testing for all farmers</li>
                <li>Nutrient status of soil for 12 parameters</li>
                <li>Fertilizer recommendations for targeted yields</li>
                <li>Soil amendments required</li>
            </ul>
            <h4>Services Included:</h4>
            <ul>
                <li>Soil sampling and testing</li>
                <li>Soil health card generation</li>
                <li>Crop-wise fertilizer recommendations</li>
                <li>Soil treatment advisory</li>
            </ul>
            <h4>How to Get:</h4>
            <p>Contact local agriculture extension officer or visit nearest soil testing laboratory</p>
        `
    }
};

// Show Scheme Details
function showSchemeDetails(scheme) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = schemeDetails[scheme].content;
    openModal();
}

// Modal Functions
function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openWeatherModal() {
    scrollToSection('weather');
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Show success message
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h3>Thank You!</h3>
        <p>Dear ${name},</p>
        <p>Your message has been received successfully. Our team will contact you soon.</p>
        <p><strong>Your Details:</strong></p>
        <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            ${phone ? `<li>Phone: ${phone}</li>` : ''}
        </ul>
        <p>We typically respond within 24 hours.</p>
    `;
    openModal();
    
    // Reset form
    this.reset();
});

// Scroll Animation
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('show');
        }
    });
}

// Add scroll animation classes to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animation to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.add('scroll-animate');
    });
    
    // Add scroll animation to scheme cards
    document.querySelectorAll('.scheme-card').forEach(card => {
        card.classList.add('scroll-animate');
    });
    
    // Initial crop info display
    showCropInfo('rice');
    
    // Handle scroll animations
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
});

// Utility Functions
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return date.toLocaleDateString('en-IN', options);
}

function getCurrentSeason() {
    const month = new Date().getMonth() + 1; // JavaScript months are 0-indexed
    
    if (month >= 4 && month <= 6) {
        return "Summer (Zaid Season)";
    } else if (month >= 7 && month <= 10) {
        return "Monsoon (Kharif Season)";
    } else {
        return "Winter (Rabi Season)";
    }
}

// Add current date and season info
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const currentSeason = getCurrentSeason();
    
    console.log(`Today is ${formatDate(today)}`);
    console.log(`Current agricultural season: ${currentSeason}`);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(handleScrollAnimation, 10);
window.addEventListener('scroll', debouncedScrollHandler);

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element, content) {
    element.innerHTML = content;
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Navigate with arrow keys in crop selection
    if (e.target.classList.contains('crop-btn')) {
        const buttons = Array.from(document.querySelectorAll('.crop-btn'));
        const currentIndex = buttons.indexOf(e.target);
        
        if (e.key === 'ArrowRight' && currentIndex < buttons.length - 1) {
            buttons[currentIndex + 1].focus();
            buttons[currentIndex + 1].click();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            buttons[currentIndex - 1].focus();
            buttons[currentIndex - 1].click();
        }
    }
});

// Initialize tooltips and accessibility features
function initializeAccessibility() {
    // Add aria-labels for better screen reader support
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.setAttribute('aria-label', `Service ${index + 1}: ${card.querySelector('h3').textContent}`);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
    
    // Add keyboard support for interactive elements
    document.querySelectorAll('.service-card, .scheme-card').forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAccessibility);