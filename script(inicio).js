// script.js

        // Smooth scrolling
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

        // Wishlist functionality
        document.querySelectorAll('.wishlist-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const heart = this.querySelector('i');
                if (heart.classList.contains('far')) {
                    heart.classList.remove('far');
                    heart.classList.add('fas');
                    heart.style.color = '#F44336';
                } else {
                    heart.classList.remove('fas');
                    heart.classList.add('far');
                    heart.style.color = '';
                }
            });
        });

        // Shopping cart counter
        let cartCount = 0;
        const cartIcon = document.querySelector('.fa-shopping-cart');
        
        document.querySelectorAll('.btn-buy').forEach(btn => {
            btn.addEventListener('click', function() {
                cartCount++;
                
                // Create or update badge
                let badge = cartIcon.parentElement.querySelector('.cart-badge');
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'cart-badge';
                    badge.style.cssText = 'position:absolute;top:-8px;right:-8px;background:#F44336;color:white;border-radius:50%;width:18px;height:18px;font-size:11px;display:flex;align-items:center;justify-content:center;font-weight:700;';
                    cartIcon.parentElement.style.position = 'relative';
                    cartIcon.parentElement.appendChild(badge);
                }
                badge.textContent = cartCount;
                
                // Button feedback
                const originalText = this.textContent;
                this.textContent = '¡Agregado!';
                this.style.background = '#45a049';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                }, 1500);
            });
        });

        // Newsletter form
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert('¡Gracias por suscribirte! Recibirás un correo de confirmación en ' + email);
            this.reset();
        });

        // Search functionality
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value;
            if (query) {
                console.log('Buscando:', query);
                // Aquí iría la lógica de búsqueda
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchBtn.click();
            }
        });

        // Category click
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                const categoryName = this.querySelector('.category-name').textContent;
                console.log('Categoría seleccionada:', categoryName);
                // Aquí iría la navegación a la categoría
            });
        });

        // Product hover effect
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.borderColor = '#FFD700';
            });
            card.addEventListener('mouseleave', function() {
                this.style.borderColor = '#e5e5e5';
            });
        });