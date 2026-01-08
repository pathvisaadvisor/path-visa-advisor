document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Sidebar Toggle
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    };

    if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        });
    });

    // Reveal on Scroll Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('animate-in');
            }
        }
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Form Handling
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            // Start premium animation & disable button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            contactForm.style.opacity = '0.7';

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success animation
                    contactForm.style.opacity = '0';
                    contactForm.style.transform = 'translateY(-20px)';
                    contactForm.style.transition = 'all 0.4s ease';

                    setTimeout(() => {
                        window.location.href = "/thankyou";
                    }, 400);
                } else {
                    const data = await response.json();
                    alert(data.errors ? data.errors.map(error => error.message).join(", ") : 'Oops! There was a problem submitting your form');
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                    contactForm.style.opacity = '1';
                }
            } catch (error) {
                alert('Oops! Error connecting to the service. Please try again later.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                contactForm.style.opacity = '1';
            }
        });
    }
});
