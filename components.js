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
                    <a href="index.html" class="brand-logo-container shrink-0">
                        ${LOGO_SVG}
                        <div class="leading-tight">
                            <span class="brand-logo-text text-xl block">
                                ${BRAND_NAME}
                            </span>
                            <span class="brand-logo-tagline hidden sm:block">Expert Tailoring</span>
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
            <div id="mobile-menu" class="hidden xl:hidden absolute top-full left-0 right-0 bg-[var(--surface)] border-b border-[var(--border-light)] shadow-xl z-50">
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
                            <a href="signup.html" class="w-full sm:w-auto text-center btn btn-secondary btn-rounded text-xs" style="padding:11px 20px;">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }

    // --- Render Footer ---
    function renderFooter() {
        const socialLinksHtml = SOCIAL_LINKS.map(s =>
            `<a href="${s.href}" aria-label="${s.label}" class="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white hover:-translate-y-1 transition-all duration-300">
                <i class="${s.icon} text-sm"></i>
            </a>`
        ).join('');

        return `
        <footer class="pt-16 pb-8 relative" style="background-color: #0b1210; border-top: 1px solid rgba(201, 169, 110, 0.15);">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <!-- Main Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
                    
                    <!-- Left Brand Column -->
                    <div class="lg:col-span-4 space-y-6">
                        <a href="index.html" class="brand-logo-container light-text">
                            ${LOGO_SVG}
                            <div class="leading-tight">
                                <span class="brand-logo-text text-xl block">${BRAND_NAME}</span>
                                <span class="brand-logo-tagline">Expert Tailoring</span>
                            </div>
                        </a>
                        <p class="text-sm text-white/60 leading-relaxed max-w-sm">
                            Premium tailoring & alteration services crafted with precision and care. Elevating every garment with bespoke master craftsmanship.
                        </p>
                        <!-- Social Links -->
                        <div class="flex gap-3">
                            ${socialLinksHtml}
                        </div>
                    </div>

                    <!-- Quick Links Column -->
                    <div class="lg:col-span-2 space-y-4">
                        <h5 class="text-white font-bold text-xs uppercase tracking-[0.2em]" style="font-family:'Playfair Display',serif;">Quick Links</h5>
                        <ul class="space-y-3">
                            <li><a href="index.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">Home</a></li>
                            <li><a href="home2.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">Home 2 — Premium</a></li>
                            <li><a href="services.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">Services</a></li>
                            <li><a href="gallery.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">Gallery</a></li>
                            <li><a href="pricing.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">Pricing</a></li>
                            <li><a href="about.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">About Studio</a></li>
                        </ul>
                    </div>

                    <!-- Resources Column -->
                    <div class="lg:col-span-2 space-y-4">
                        <h5 class="text-white font-bold text-xs uppercase tracking-[0.2em]" style="font-family:'Playfair Display',serif;">Resources</h5>
                        <ul class="space-y-3">
                            <li><a href="contact.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">Contact Studio</a></li>
                            <li><a href="coming-soon.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">Coming Soon</a></li>
                            <li><a href="404.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">404 Page</a></li>
                            <li><a href="login.html" class="text-sm text-white/60 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300">Sign In</a></li>
                        </ul>
                    </div>

                    <!-- Newsletter Card Box -->
                    <div class="lg:col-span-4 bg-[#111c19] border border-white/5 rounded-3xl p-6 lg:p-8 space-y-5">
                        <h5 class="text-white text-xl font-bold font-serif leading-tight" style="font-family:'Playfair Display',serif;">Stay Tailored</h5>
                        <p class="text-sm text-white/60 leading-relaxed">
                            Subscribe for studio updates, style guides & exclusive seasonal collections.
                        </p>
                        <form class="space-y-3" onsubmit="event.preventDefault(); alert('Subscribed to StitchCraft newsletter!');">
                            <input type="email" placeholder="your@email.com" required class="w-full bg-[#0b1210] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--accent)] transition-all">
                            <button type="submit" class="w-full bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--text-dark)] font-bold text-sm py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[rgba(201,169,110,0.15)] active:scale-[0.98]">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <!-- Bottom Divider -->
                <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-xs text-white/45 tracking-wider uppercase font-medium">
                        &copy; ${CURRENT_YEAR} STITCHCRAFT. CRAFTED WITH ✦ PRECISION.
                    </p>
                    <div class="flex items-center gap-6 text-xs text-white/45 font-medium tracking-wider uppercase">
                        <a href="#" class="hover:text-white transition-colors">Privacy</a>
                        <a href="#" class="hover:text-white transition-colors">Terms</a>
                        <a href="tel:+919876543210" class="hover:text-white transition-colors">${PHONE}</a>
                    </div>
                </div>
            </div>
            
            <!-- Floating Back to Top Button -->
            <button id="back-to-top" class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--text-dark)] flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 pointer-events-none hover:-translate-y-1 z-50">
                <i class="fas fa-chevron-up"></i>
            </button>
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

        // Back to Top scroll and click logic
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                    backToTopBtn.classList.add('opacity-100');
                } else {
                    backToTopBtn.classList.remove('opacity-100');
                    backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                }
            });
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
