// Toggle menu mobile
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Product category filter
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active', 'bg-purple-600', 'text-white');
            btn.classList.add('bg-white', 'text-gray-700', 'border');
        });

        // Add active class to clicked button
        this.classList.add('active', 'bg-purple-600', 'text-white');
        this.classList.remove('bg-white', 'text-gray-700', 'border');

        const category = this.getAttribute('data-category');

        // Show/hide products based on category
        document.querySelectorAll('.product-card').forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

let countdownInterval;

function openWhatsAppModal() {
    const modal = document.getElementById('whatsappModal');
    modal.classList.remove('hidden');
    startCountdown();
}

function closeModal() {
    const modal = document.getElementById('whatsappModal');
    modal.classList.add('hidden');
    clearInterval(countdownInterval);
}

function redirectToWhatsApp() {
    closeModal();
    const phone = "6285157771815";
    const message = "Halo min, saya ingin Konsultasi Desain nih. ";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function openOnlineShop() {
    const url = 'online_shop.html';
    window.location.href = url;
}

// Data untuk gambar dan rating
const simpleContent = [
    { image: "./asset/img/gantungan_2.jpg", rating: "4.8/5", text: "Rating", color: "bg-white text-purple-700" },
    { image: "./asset/img/baju_1.jpg", rating: "4.5/5", text: "Rating", color: "bg-white text-purple-700" },
];

let simpleIndex = 0;

function rotateSimpleContent() {
    simpleIndex = (simpleIndex + 1) % simpleContent.length;
    const content = simpleContent[simpleIndex];
    
    document.getElementById('simple-rotating-image').src = content.image;
    document.getElementById('simple-rating-value').textContent = content.rating;
    document.getElementById('simple-rotating-rating').className = 
        `absolute -bottom-4 -left-4 ${content.color} font-bold py-2 px-4 rounded-lg shadow-lg`;
    document.getElementById('simple-rotating-rating').innerHTML = 
        `<i class="fas fa-star text-yellow-500 mr-2"></i> ${content.rating} ${content.text}`;
}

// Rotate setiap 1 menit
setInterval(rotateSimpleContent, 60000);