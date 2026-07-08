// ===== STITCHCRAFT — SHARED COMPONENTS =====
// Tailor & Alteration Shop
// Shared navbar + footer injected across all pages

(function () {
    'use strict';

    // --- Configuration ---
    const BRAND_NAME = 'StitchCraft';
    const BRAND_TAGLINE = 'Expert Tailor & Alteration Shop';
    const CURRENT_YEAR = new Date().getFullYear();
    const PHONE = '+91 98765 43210';
    const EMAIL = 'hello@stitchcraft.in';
    const ADDRESS = '12 Fabric Lane, T. Nagar, Chennai – 600017';

    const NAV_LINKS = [
        { label: 'Home', href: 'index.html' },
        { label: 'Home 2', href: 'home2.html' },
        { label: 'About', href: 'about.html' },
        { label: 'Services', href: 'services.html' },
        { label: 'Gallery', href: 'gallery.html' },
        { label: 'Pricing', href: 'pricing.html' },
        { label: 'Contact', href: 'contact.html' },
    ];

    const SOCIAL_LINKS = [
        { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
        { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
        { icon: 'fab fa-whatsapp', href: '#', label: 'WhatsApp' },
        { icon: 'fab fa-pinterest-p', href: '#', label: 'Pinterest' },
    ];

    // --- Brand Logo SVG (scissors + needle/thread) ---
    const LOGO_SVG = `<svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="scGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--logo-primary)"/>
                <stop offset="100%" stop-color="var(--logo-secondary)"/>
            </linearGradient>
        </defs>
        <!-- Outer circle -->
        <circle cx="50" cy="50" r="46" stroke="var(--logo-primary)" stroke-width="2" stroke-opacity="0.35" fill="none"/>
        <!-- Scissors body -->
        <circle cx="34" cy="34" r="9" stroke="url(#scGrad)" stroke-width="2.5" fill="none"/>
        <circle cx="66" cy="34" r="9" stroke="url(#scGrad)" stroke-width="2.5" fill="none"/>
        <!-- Scissors blades -->
        <line x1="40" y1="40" x2="70" y2="75" stroke="url(#scGrad)" stroke-width="3" stroke-linecap="round"/>
        <line x1="60" y1="40" x2="30" y2="75" stroke="url(#scGrad)" stroke-width="3" stroke-linecap="round"/>
        <!-- Center bolt -->
        <circle cx="50" cy="50" r="3.5" fill="var(--logo-primary)"/>
        <!-- Needle at bottom -->
        <path d="M50 62 L50 82" stroke="var(--logo-secondary)" stroke-width="2" stroke-linecap="round"/>
        <circle cx="50" cy="85" r="2.5" fill="var(--logo-secondary)" opacity="0.7"/>
    </svg>`;

    // --- Get current page filename ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // --- Render Navbar ---
    function renderNavbar() {
        const navLinksDesktop = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage ||
                             (currentPage === '' && link.href === 'index.html');
            return `<a href="${link.href}" class="nav-link ${isActive ? 'active' : ''}">
                ${link.label}
            </a>`;
        }).join('');

        const navLinksMobile = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage || (currentPage === '' && link.href === 'index.html');
            return `<a href="${link.href}" class="flex items-center px-5 py-4 text-sm font-semibold uppercase tracking-wider border-b border-[var(--border-light)] hover:text-[var(--primary)] transition-all ${isActive ? 'text-[var(--primary)] bg-[rgba(44,74,62,0.05)]' : 'text-[var(--text-dark)]'}">
                ${link.label}
            </a>`;
        }).join('');

        return `
        <nav id="main-nav">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-6">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center gap-2.5 group shrink-0">
                        ${LOGO_SVG}
                        <div class="leading-tight">
                            <span class="font-bold text-xl block text-[var(--text-dark)] group-hover:text-[var(--primary)] dark:group-hover:text-[var(--accent)] transition-colors" style="font-family:'Playfair Display',serif;line-height:1.1;">
                                ${BRAND_NAME}
                            </span>
                            <span class="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-medium hidden sm:block">Expert Tailoring</span>
                        </div>
                    </a>

                    <!-- Desktop Nav -->
                    <div id="desktop-links" class="hidden xl:flex items-center gap-5">
                        ${navLinksDesktop}
                    </div>

                    <!-- Right Actions -->
                    <div class="flex items-center gap-2">
                        <!-- RTL Toggle -->
                        <button id="dir-toggle" class="icon-btn-nav js-dir-toggle hidden xl:flex" aria-label="Toggle RTL" title="Toggle RTL">
                            <i class="fas fa-exchange-alt text-sm"></i>
                        </button>

                        <!-- Theme Toggle -->
                        <button id="theme-toggle-desktop" class="icon-btn-nav js-theme-toggle hidden xl:flex" aria-label="Toggle theme" title="Toggle Theme">
                            <i class="fas fa-moon text-sm"></i>
                        </button>

                        <!-- Secondary CTA: Sign Up -->
                        <a href="signup.html" class="hidden xl:inline-flex items-center gap-2 btn btn-secondary btn-rounded text-xs" style="padding:9px 20px;" id="nav-signup-btn">
                            Sign Up
                        </a>



                        <!-- Mobile Menu Btn -->
                        <button id="mobile-menu-btn" class="xl:hidden icon-btn-nav" aria-label="Toggle menu">
                            <i class="fas fa-bars text-lg" id="menu-icon"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden xl:hidden">
                <div class="max-w-7xl mx-auto pt-2 pb-6">
                    <div class="flex flex-col gap-0 mb-4">
                        ${navLinksMobile}
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 pt-4 border-t border-[var(--border-light)]">
                        <div class="flex gap-2.5 w-full sm:w-auto justify-center sm:justify-start">
                            <button class="icon-btn-nav js-dir-toggle" aria-label="Toggle RTL" title="Toggle RTL">
                                <i class="fas fa-exchange-alt text-sm"></i>
                            </button>
                            <button class="icon-btn-nav js-theme-toggle" aria-label="Toggle theme" title="Toggle Theme">
                                <i class="fas fa-moon text-sm"></i>
                            </button>
                        </div>
                        <div class="flex gap-2 w-full sm:w-auto">
                            <a href="signup.html" class="flex-1 sm:flex-none text-center btn btn-secondary btn-rounded text-xs" style="padding:11px 20px;">Sign Up</a>
                            <a href="contact.html#booking" class="flex-1 sm:flex-none text-center btn btn-primary btn-rounded btn-shine text-xs" style="padding:11px 20px;">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }

    // --- Render Footer ---
    function renderFooter() {
        const socialLinksHtml = SOCIAL_LINKS.map(s =>
            `<a href="${s.href}" aria-label="${s.label}" class="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--text-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300">
                <i class="${s.icon} text-sm"></i>
            </a>`
        ).join('');

        return `
        <footer class="pt-16 pb-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <!-- Main Footer Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
                    <!-- Brand -->
                    <div class="lg:col-span-1 space-y-5">
                        <a href="index.html" class="flex items-center gap-2.5 group">
                            ${LOGO_SVG}
                            <div>
                                <span class="font-bold text-xl block text-[var(--text-dark)] group-hover:text-[var(--primary)] dark:group-hover:text-[var(--accent)] transition-colors" style="font-family:'Playfair Display',serif;">${BRAND_NAME}</span>
                                <span class="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">Expert Tailoring</span>
                            </div>
                        </a>
                        <p class="text-sm text-[var(--text-muted)] leading-relaxed">
                            Premium tailoring & alteration services crafted with precision and care. Every stitch tells your story.
                        </p>
                        <div class="flex gap-2">${socialLinksHtml}</div>
                    </div>

                    <!-- Services -->
                    <div class="space-y-4">
                        <h5 class="font-bold text-[var(--text-dark)] uppercase tracking-wider text-xs" style="font-family:'Playfair Display',serif;">Services</h5>
                        <ul class="space-y-2.5">
                            <li><a href="services.html#custom-stitching" class="footer-link">Custom Stitching</a></li>
                            <li><a href="services.html#alterations" class="footer-link">Alterations & Repairs</a></li>
                            <li><a href="services.html#bridal-wear" class="footer-link">Bridal & Occasion Wear</a></li>
                            <li><a href="services.html#measurements" class="footer-link">Professional Measurements</a></li>
                            <li><a href="services.html#fabric-selection" class="footer-link">Fabric Selection</a></li>
                            <li><a href="services.html#express-service" class="footer-link">Express Service</a></li>
                        </ul>
                    </div>

                    <!-- Quick Links -->
                    <div class="space-y-4">
                        <h5 class="font-bold text-[var(--text-dark)] uppercase tracking-wider text-xs" style="font-family:'Playfair Display',serif;">Quick Links</h5>
                        <ul class="space-y-2.5">
                            <li><a href="index.html" class="footer-link">Home (Classic)</a></li>
                            <li><a href="home2.html" class="footer-link">Home (Premium)</a></li>
                            <li><a href="about.html" class="footer-link">About Us</a></li>
                            <li><a href="services.html" class="footer-link">Our Services</a></li>
                            <li><a href="gallery.html" class="footer-link">Work Gallery</a></li>
                            <li><a href="pricing.html" class="footer-link">Pricing Guide</a></li>
                            <li><a href="contact.html" class="footer-link">Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div class="space-y-4">
                        <h5 class="font-bold text-[var(--text-dark)] uppercase tracking-wider text-xs" style="font-family:'Playfair Display',serif;">Contact</h5>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3">
                                <i class="fas fa-map-marker-alt text-[var(--primary)] mt-1 text-xs flex-shrink-0"></i>
                                <span class="text-sm text-[var(--text-muted)]">${ADDRESS}</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <i class="fas fa-phone text-[var(--primary)] text-xs flex-shrink-0"></i>
                                <a href="tel:+919876543210" class="footer-link text-sm">${PHONE}</a>
                            </li>
                            <li class="flex items-center gap-3">
                                <i class="fas fa-envelope text-[var(--primary)] text-xs flex-shrink-0"></i>
                                <a href="mailto:${EMAIL}" class="footer-link text-sm">${EMAIL}</a>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="fas fa-clock text-[var(--primary)] mt-1 text-xs flex-shrink-0"></i>
                                <span class="text-sm text-[var(--text-muted)]">Mon–Sat: 9am – 8pm<br>Sunday: 10am – 6pm</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Bottom Bar -->
                <div class="border-t border-[var(--border-light)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p class="text-sm text-[var(--text-muted)] text-center sm:text-left">
                        &copy; ${CURRENT_YEAR} ${BRAND_NAME}. All rights reserved.
                    </p>
                    <div class="flex items-center gap-6">
                        <a href="#" class="footer-link text-xs">Privacy Policy</a>
                        <a href="#" class="footer-link text-xs">Terms of Service</a>
                        <a href="contact.html" class="footer-link text-xs">Contact</a>
                    </div>
                </div>
            </div>
        </footer>`;
    }

    // --- Inject Components ---
    function init() {
        // Inject navbar
        const navContainer = document.getElementById('navbar-container');
        if (navContainer) navContainer.innerHTML = renderNavbar();

        // Inject footer
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) footerContainer.innerHTML = renderFooter();

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                const isOpen = !mobileMenu.classList.contains('hidden');
                mobileMenu.classList.toggle('hidden');
                if (menuIcon) {
                    menuIcon.className = isOpen ? 'fas fa-bars text-lg' : 'fas fa-times text-lg';
                }
            });
            // Close on outside click
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    if (menuIcon) menuIcon.className = 'fas fa-bars text-lg';
                }
            });
        }

        // Theme toggle
        document.querySelectorAll('.js-theme-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const html = document.documentElement;
                const isDark = html.classList.toggle('dark');
                localStorage.setItem('sc-dark-mode', isDark ? 'true' : 'false');
                document.querySelectorAll('.js-theme-toggle i').forEach(i => {
                    i.className = isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-sm';
                });
            });
        });

        // RTL toggle
        document.querySelectorAll('.js-dir-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const html = document.documentElement;
                const isRTL = html.getAttribute('dir') === 'rtl';
                html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
                localStorage.setItem('sc-rtl', isRTL ? 'false' : 'true');
            });
        });

        // Restore saved settings
        (function restoreSettings() {
            const html = document.documentElement;
            if (localStorage.getItem('sc-dark-mode') === 'true' ||
                (!localStorage.getItem('sc-dark-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
                document.querySelectorAll('.js-theme-toggle i').forEach(i => i.className = 'fas fa-sun text-yellow-400');
            }
            if (localStorage.getItem('sc-rtl') === 'true') {
                html.setAttribute('dir', 'rtl');
            }
        })();

        // Navbar scroll effect
        const mainNav = document.getElementById('main-nav');
        if (mainNav) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    mainNav.style.boxShadow = '0 4px 24px rgba(28,28,28,0.10)';
                } else {
                    mainNav.style.boxShadow = 'none';
                }
            });
        }
    }

    // --- Wait for DOM ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
