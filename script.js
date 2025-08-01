// Mobile menu toggle functionality
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuIcon = menuBtn.querySelector('svg');
    
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        // Change to hamburger icon
        menuIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        `;
    } else {
        mobileNav.classList.add('active');
        // Change to close icon
        menuIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        `;
    }
}

// Set active navigation based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a, .mobile-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === 'product.html' && href === 'product.html') ||
            (currentPage === 'brand.html' && href === 'brand.html') ||
            (currentPage === 'blog.html' && href === 'blog.html') ||
            (currentPage === '' && href === 'index.html')
        ) {
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavigation();
    
    // Add click event listener to mobile menu button
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileNav = document.getElementById('mobile-nav');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const menuIcon = menuBtn.querySelector('svg');
            
            mobileNav.classList.remove('active');
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
        });
    });
});
