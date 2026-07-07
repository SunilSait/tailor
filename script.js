// ===== STITCHCRAFT — UTILITY SCRIPTS =====
// Auth interactions, animations, counters, FAQ, tabs, booking

(function () {
    'use strict';

    // ---- Password Toggle ----
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function () {
            const wrapper = this.closest('.input-wrapper');
            const input = wrapper ? wrapper.querySelector('input') : null;
            if (input) {
                const isText = input.type === 'text';
                input.type = isText ? 'password' : 'text';
                const icon = this.querySelector('i');
                if (icon) icon.className = isText ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
            }
        });
    });

    // ---- Auth Page Theme Toggle ----
    document.querySelectorAll('.dark-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const html = document.documentElement;
            const isDark = html.classList.toggle('dark');
            localStorage.setItem('sc-dark-mode', isDark ? 'true' : 'false');
            document.querySelectorAll('.dark-toggle i').forEach(i => {
                i.className = isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon';
            });
        });
    });

    // ---- Auth Page RTL Toggle ----
    document.querySelectorAll('.rtl-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const html = document.documentElement;
            const isRTL = html.getAttribute('dir') === 'rtl';
            html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
            localStorage.setItem('sc-rtl', isRTL ? 'false' : 'true');
        });
    });

    // ---- Restore settings ----
    (function restoreSettings() {
        const html = document.documentElement;
        if (localStorage.getItem('sc-dark-mode') === 'true' ||
            (!localStorage.getItem('sc-dark-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            document.querySelectorAll('.dark-toggle i').forEach(i => i.className = 'fas fa-sun text-yellow-400');
        }
        if (localStorage.getItem('sc-rtl') === 'true') {
            html.setAttribute('dir', 'rtl');
        }
    })();

    // ---- Animate on scroll ----
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        elements.forEach(el => observer.observe(el));
    });

    // ---- Counter Animation ----
    function animateCounter(el) {
        const target = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g, ''));
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const isInt = Number.isInteger(target);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = prefix + (isInt ? Math.round(current) : current.toFixed(1)) + suffix;
        }, duration / steps);
    }

    document.querySelectorAll('[data-counter]').forEach(el => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(el);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(el);
    });

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            // Open clicked (if not already open)
            if (!isOpen) item.classList.add('open');
        });
    });

    // ---- Gallery Filter Tabs ----
    document.querySelectorAll('.tab-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn[data-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ---- Tab Bar (generic) ----
    document.querySelectorAll('.tab-bar:not([data-filter-bar])').forEach(tabBar => {
        const buttons = tabBar.querySelectorAll('.tab-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const target = btn.dataset.tab;
                const container = tabBar.closest('[data-tabs]') || document;
                container.querySelectorAll('[data-tab-content]').forEach(panel => {
                    panel.classList.toggle('hidden', panel.dataset.tabContent !== target);
                });
            });
        });
    });

    // ---- Booking Form ----
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = document.getElementById('booking-success');
            if (successMsg) {
                bookingForm.style.display = 'none';
                successMsg.classList.remove('hidden');
            }
        });
    }

    // ---- Contact Form ----
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = document.getElementById('contact-success');
            if (successMsg) {
                contactForm.style.display = 'none';
                successMsg.classList.remove('hidden');
            }
        });
    }

    // ---- Coming Soon Form ----
    window.submitCS = function(e) {
        e.preventDefault();
        const form = document.getElementById('cs-form');
        const success = document.getElementById('cs-success');
        if (form) form.classList.add('hidden');
        if (success) success.classList.remove('hidden');
    };

    // ---- Pricing Toggle ---- (if present)
    const pricingToggle = document.getElementById('pricing-toggle');
    if (pricingToggle) {
        pricingToggle.addEventListener('change', () => {
            const monthly = document.querySelectorAll('[data-price-monthly]');
            const yearly = document.querySelectorAll('[data-price-yearly]');
            if (pricingToggle.checked) {
                monthly.forEach(el => el.classList.add('hidden'));
                yearly.forEach(el => el.classList.remove('hidden'));
            } else {
                monthly.forEach(el => el.classList.remove('hidden'));
                yearly.forEach(el => el.classList.add('hidden'));
            }
        });
    }

    // ---- Image lazy loading fallback ----
    document.querySelectorAll('img[data-src]').forEach(img => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });
        observer.observe(img);
    });

})();
