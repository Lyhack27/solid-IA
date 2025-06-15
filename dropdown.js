document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el click en las tarjetas de servicios
    function handleServiceCardClick() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.stopPropagation(); // Evitar que el evento suba al documento
                
                // Cerrar todas las demás tarjetas
                serviceCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        const otherDropdown = otherCard.querySelector('.service-dropdown');
                        if (otherDropdown) {
                            otherDropdown.style.opacity = '0';
                            otherDropdown.style.visibility = 'hidden';
                            otherCard.classList.remove('active');
                        }
                    }
                });
                
                // Abrir el dropdown de esta tarjeta
                const dropdown = this.querySelector('.service-dropdown');
                if (dropdown) {
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    this.classList.add('active');
                }
                
                // Cerrar el dropdown al hacer click fuera
                document.addEventListener('click', function handleClickOutside(e) {
                    if (!card.contains(e.target)) {
                        const dropdown = card.querySelector('.service-dropdown');
                        if (dropdown) {
                            dropdown.style.opacity = '0';
                            dropdown.style.visibility = 'hidden';
                            card.classList.remove('active');
                        }
                        document.removeEventListener('click', handleClickOutside);
                    }
                });
            });
        });
    }

    // Función para manejar el efecto de unión de nodos
    function setupNodeConnections() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const lines = document.createElement('div');
                lines.className = 'node-connections';
                this.appendChild(lines);
                
                // Crear líneas entre los nodos
                const nodes = this.querySelectorAll('.feature, .benefits');
                nodes.forEach((node, index) => {
                    if (index > 0) {
                        const prevNode = nodes[index - 1];
                        const line = document.createElement('div');
                        line.className = 'connection-line';
                        lines.appendChild(line);
                        
                        // Posicionar la línea entre los nodos
                        const prevRect = prevNode.getBoundingClientRect();
                        const currentRect = node.getBoundingClientRect();
                        
                        line.style.top = `${prevRect.bottom - prevRect.top}px`;
                        line.style.left = '0';
                        line.style.width = '100%';
                        
                        // Animar las líneas
                        line.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                        line.style.opacity = '1';
                        line.style.transform = 'scaleX(1)';
                    }
                });
            });
            
            card.addEventListener('mouseleave', function() {
                const lines = this.querySelector('.node-connections');
                if (lines) {
                    lines.remove();
                }
            });
        });
    }

    // Inicializar las funciones cuando el DOM esté listo
    handleServiceCardClick();
    setupNodeConnections();
});
