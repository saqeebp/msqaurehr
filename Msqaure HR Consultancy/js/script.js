document.addEventListener('DOMContentLoaded', function() {
    // EmailJS is initialized in contact.html
    console.log('Script.js loaded - EmailJS status:', typeof emailjs !== 'undefined' ? 'Available' : 'Not available');
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navMenu.classList.toggle('mobile-active');
        });
    }

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navMenu.classList.remove('mobile-active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact Form Submission with EmailJS
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Check if EmailJS is loaded
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS is not defined - library may not have loaded');
                alert('Email service is not ready. Please refresh the page and try again.');
                return;
            }

            console.log('EmailJS is available, proceeding with form submission');

            // Service name mapping
            const serviceNames = {
                'hr-policy': 'HR Policy Manual',
                'recruitment': 'HR Recruitment',
                'performance': 'Performance Management System',
                'verification': 'Employee Verification',
                'compliance': 'Statutory Compliance',
                'licensing': 'Licensing & Permissions',
                'pr': 'PR Services',
                'legal': 'Legal Consultation',
                'training': 'Training & Development',
                'recruitment-board': 'Recruitment Board',
                'other': 'Other'
            };

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const company = document.getElementById('company').value;
            const serviceValue = document.getElementById('service').value;
            const service = serviceNames[serviceValue] || serviceValue; // Convert to full name
            const message = document.getElementById('message').value;

            // Validation
            if (!name || !email || !phone || !service || !message) {
                alert('Please fill out all required fields.');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Prepare email parameters
            const templateParams = {
                to_email: 'pathansaqeeb10@gmail.com',
                from_name: name,
                from_email: email,
                phone: phone,
                company: company,
                service: service,
                message: message,
                reply_to: email
            };

            console.log('Sending email with params:', templateParams);

            // Send email using EmailJS
            emailjs.send('service_4gl1k9c', 'template_g5eb75g', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully:', response.status);
                    alert('Thank you for contacting us! We will get back to you soon.');
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, function(error) {
                    console.log('Failed to send email:', error);
                    console.error('EmailJS Error Details:', error);
                    alert('There was an error sending your message. Please try again or call us directly.');
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                });
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and other elements
    document.querySelectorAll('.service-card, .stat-item, .client-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        observer.observe(el);
    });
});
