document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    // Configuración de las animaciones de partículas
function setupParticles(containerId) {
        particlesJS(containerId, {
            particles: {
                number: {
                    value: 300, // Más estrellas
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#0056b3', // Azul más intenso
                    animation: {
                        enable: true,
                        speed: 2, // Animación más rápida
                        sync: true,
                        opacity_min: 0.2
                    }
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.4, // Opacidad más alta
                    random: true,
                    animation: {
                        enable: true,
                        speed: 1, // Animación más rápida
                        opacity_min: 0.2,
                        sync: false
                    }
                },
                size: {
                    value: 2, // Tamaño más grande
                    random: true,
                    animation: {
                        enable: true,
                        speed: 2, // Animación más rápida
                        size_min: 1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120, // Distancia más corta para más constelaciones
                    color: '#0056b3',
                    opacity: 0.3, // Opacidad más alta
                    width: 1, // Líneas más gruesas
                    mode: {
                        type: 'line',
                        recursive: true,
                        delay: 300 // Delay más rápido
                    }
                },
                move: {
                    enable: true,
                    speed: 1, // Movimiento más rápido
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 1000, // Rotación más rápida
                        rotateY: 2000
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 250, // Distancia más grande para efecto de constelación
                        line_linked: {
                            opacity: 0.7 // Opacidad más alta al interactuar
                        }
                    },
                    push: {
                        particles_nb: 6 // Más estrellas al hacer clic
                    }
                }
            },
            retina_detect: true,
            config: {
                constellations: {
                    enabled: true,
                    lines: {
                        color: '#0056b3',
                        opacity: 0.3,
                        width: 1
                    },
                    stars: {
                        minDistance: 80, // Distancia más corta para más constelaciones
                        maxLines: 10 // Más líneas por constelación
                    }
                }
            }
        });
    }

    // Configuración de animaciones por página
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
            setupParticles('particles-js');
            break;
        case 'about.html':
            setupParticles('particles-js');
            break;
        case 'services.html':
            setupParticles('particles-js');
            break;
        case 'contact.html':
            setupParticles('particles-js');
            break;
        case 'careers.html':
            setupParticles('particles-js');
            break;
        default:
            setupParticles('particles-js');
    }

    // Añadir fondo gris claro al body
    const body = document.querySelector('body');
    body.style.backgroundColor = '#f5f5f5';

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            return;
        }
        
        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        navbar.style.transition = 'transform 0.3s ease';
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.');
        contactForm.reset();
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    document.querySelectorAll('.service-card, .about-content, .contact-form').forEach((el) => {
        observer.observe(el);
    });
});
