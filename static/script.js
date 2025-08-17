document.addEventListener('DOMContentLoaded', () => {
    // Skills view toggle functionality
    const viewModeSelect = document.getElementById('view-mode');
    if (viewModeSelect) {
        viewModeSelect.addEventListener('change', toggleSkillsView);
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Profile image click to zoom (if needed)
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.addEventListener('click', (e) => {
            createImageModal(profileImage.src);
        });
    }

    // Initialize certifications slider
    initCertificationsSlider();
});

// Certifications Slider Variables
let currentSlide = 0;
const totalSlides = 3;

// Projects Slider Variables
let currentProjectSlide = 0;
const totalProjectSlides = 3;

// Experience Slider Variables
let currentExperienceSlide = 0;
const totalExperienceSlides = 3;

// Experience Modal Variables
let currentExperienceModalSlide = 0;
const totalExperienceModalSlides = 3;

// Initialize certifications slider
function initCertificationsSlider() {
    updateSliderButtons();
    updateSliderDots();
    updateProjectsSliderButtons();
    updateProjectsSliderDots();
    updateExperienceSliderButtons();
    updateExperienceSliderDots();
}

// Slide certifications
function slideCertifications(direction) {
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else if (direction === 'prev') {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    
    const slider = document.querySelector('.certifications-slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }
    
    updateSliderButtons();
    updateSliderDots();
}

// Go to specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const slider = document.querySelector('.certifications-slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }
    
    updateSliderButtons();
    updateSliderDots();
}

// Update slider buttons
function updateSliderButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentSlide === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }
}

// Update slider dots
function updateSliderDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Slide projects
function slideProjects(direction) {
    if (direction === 'next') {
        currentProjectSlide = (currentProjectSlide + 1) % totalProjectSlides;
    } else if (direction === 'prev') {
        currentProjectSlide = (currentProjectSlide - 1 + totalProjectSlides) % totalProjectSlides;
    }
    
    const slider = document.querySelector('.projects-slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentProjectSlide * 33.333}%)`;
    }
    
    updateProjectsSliderButtons();
    updateProjectsSliderDots();
}

// Go to specific project slide
function goToProjectSlide(slideIndex) {
    currentProjectSlide = slideIndex;
    const slider = document.querySelector('.projects-slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentProjectSlide * 33.333}%)`;
    }
    
    updateProjectsSliderButtons();
    updateProjectsSliderDots();
}

// Update projects slider buttons
function updateProjectsSliderButtons() {
    const prevBtn = document.querySelector('.projects-slider-nav .prev-btn');
    const nextBtn = document.querySelector('.projects-slider-nav .next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentProjectSlide === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = currentProjectSlide === totalProjectSlides - 1;
    }
}

// Update projects slider dots
function updateProjectsSliderDots() {
    const dots = document.querySelectorAll('.project-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentProjectSlide);
    });
}

// Slide experience
function slideExperience(direction) {
    if (direction === 'next') {
        currentExperienceSlide = (currentExperienceSlide + 1) % totalExperienceSlides;
    } else if (direction === 'prev') {
        currentExperienceSlide = (currentExperienceSlide - 1 + totalExperienceSlides) % totalExperienceSlides;
    }
    
    const slider = document.querySelector('.experience-slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentExperienceSlide * 33.333}%)`;
    }
    
    updateExperienceSliderButtons();
    updateExperienceSliderDots();
}

// Go to specific experience slide
function goToExperienceSlide(slideIndex) {
    currentExperienceSlide = slideIndex;
    const slider = document.querySelector('.experience-slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentExperienceSlide * 33.333}%)`;
    }
    
    updateExperienceSliderButtons();
    updateExperienceSliderDots();
}

// Update experience slider buttons
function updateExperienceSliderButtons() {
    const prevBtn = document.querySelector('.experience-slider-nav .prev-btn');
    const nextBtn = document.querySelector('.experience-slider-nav .next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentExperienceSlide === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = currentExperienceSlide === totalExperienceSlides - 1;
    }
}

// Update experience slider dots
function updateExperienceSliderDots() {
    const dots = document.querySelectorAll('.experience-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentExperienceSlide);
    });
}

// Experience Modal Functions
function openExperienceModal() {
    const modal = document.getElementById('experienceModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentExperienceModalSlide = 0;
    updateExperienceModalSlider();
    updateExperienceModalButtons();
    updateExperienceModalDots();
}

function closeExperienceModal() {
    const modal = document.getElementById('experienceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function slideExperienceModal(direction) {
    if (direction === 'next') {
        currentExperienceModalSlide = (currentExperienceModalSlide + 1) % totalExperienceModalSlides;
    } else if (direction === 'prev') {
        currentExperienceModalSlide = (currentExperienceModalSlide - 1 + totalExperienceModalSlides) % totalExperienceModalSlides;
    }
    
    updateExperienceModalSlider();
    updateExperienceModalButtons();
    updateExperienceModalDots();
}

function goToExperienceModalSlide(slideIndex) {
    currentExperienceModalSlide = slideIndex;
    updateExperienceModalSlider();
    updateExperienceModalButtons();
    updateExperienceModalDots();
}

function updateExperienceModalSlider() {
    const slider = document.getElementById('experienceModalSlider');
    if (slider) {
        slider.style.transform = `translateX(-${currentExperienceModalSlide * 100}%)`;
    }
}

function updateExperienceModalButtons() {
    const prevBtn = document.querySelector('.experience-modal-nav .prev-btn');
    const nextBtn = document.querySelector('.experience-modal-nav .next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentExperienceModalSlide === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = currentExperienceModalSlide === totalExperienceModalSlides - 1;
    }
}

function updateExperienceModalDots() {
    const dots = document.querySelectorAll('.experience-modal-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentExperienceModalSlide);
    });
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('experienceModal');
    if (event.target === modal) {
        closeExperienceModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('experienceModal');
        if (modal.classList.contains('active')) {
            closeExperienceModal();
        }
    }
});

// Toggle skills view between classified and all
function toggleSkillsView() {
    const viewMode = document.getElementById('view-mode').value;
    const classifiedSkills = document.getElementById('classified-skills');
    const allSkills = document.getElementById('all-skills');

    if (viewMode === 'all') {
        classifiedSkills.style.display = 'none';
        allSkills.style.display = 'block';
    } else if (viewMode === 'classify') {
        classifiedSkills.style.display = 'block';
        allSkills.style.display = 'none';
    }
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
    
    // Reset the form
    e.target.reset();
}

// Notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    } else {
        notification.style.background = '#dc3545';
    }
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Image modal functionality
function createImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        padding: 5px;
    `;
    
    closeBtn.addEventListener('click', () => {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });
    
    modalContent.appendChild(img);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// Add CSS animations for notifications and modals
const additionalStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

