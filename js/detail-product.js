// Data produk lengkap dengan detail
const productsData = [
    {
        id: 1,
        name: "Kaos Custom Sablon",
        category: "clothing",
        price: "Rp 85.000",
        minOrder: "6 pcs",
        image: "./asset/img/kaos-sablon-1.jpeg",
        description: "Kaos berkualitas dengan sablon DTF atau plastisol.",
        fullDescription: "Kaos berkualitas premium dengan berbagai pilihan bahan (Combed 20s, 24s, 30s) dan teknik sablon DTF atau plastisol. Cocok untuk seragam komunitas, event, atau kebutuhan personal.",
        details: [
            "Bahan: Cotton Combed 20s, 24s, 30s",
            "Sablon: DTF / Plastisol",
            "Warna: Full Color",
            "Ukuran: S, M, L, XL, XXL",
            "Minimal Order: 6 pcs"
        ]
    },
    {
        id: 2,
        name: "Kartu Nama Premium",
        category: "printing",
        price: "Rp 150.000",
        minOrder: "100 pcs",
        image: "./asset/img/card-name-1.jpeg",
        description: "Kartu nama dengan berbagai finishing premium.",
        fullDescription: "Kartu nama profesional dengan berbagai pilihan finishing premium (spot UV, emboss, foil stamping, soft touch) untuk membuat kesan pertama yang luar biasa dalam bisnis Anda.",
        details: [
            "Ukuran: 9x5 cm standar",
            "Bahan: Art Carton 260/310gsm",
            "Finishing: Spot UV, Emboss, Foil",
            "Warna: Full Color CMYK",
            "Minimal Order: 100 pcs"
        ]
    },
    {
        id: 3,
        name: "Gantungan Kunci Akrilik",
        category: "merchandise",
        price: "Rp 12.000",
        minOrder: "25 pcs",
        image: "./asset/img/gantungan-3.jpeg",
        description: "Gantungan kunci custom dari bahan akrilik tebal.",
        fullDescription: "Gantungan kunci custom dari bahan akrilik tebal dengan printing full color yang tajam. Cocok untuk merchandise perusahaan, souvenir event, atau hadiah spesial.",
        details: [
            "Bahan: Akrilik 3mm tebal",
            "Printing: Full Color HD",
            "Ring: Besi anti karat",
            "Bisa custom bentuk",
            "Minimal Order: 25 pcs"
        ]
    },
    {
        id: 4,
        name: "Brosur & Flyer",
        category: "printing",
        price: "Rp 500/lembar",
        minOrder: "100 lembar",
        image: "./asset/img/brosur-1.jpeg",
        description: "Cetak brosur dan flyer dengan kertas premium.",
        fullDescription: "Cetak brosur dan flyer berkualitas tinggi untuk kebutuhan promosi bisnis, event, atau produk Anda. Tersedia berbagai pilihan kertas dan finishing.",
        details: [
            "Ukuran: A5, A4, DL",
            "Kertas: Art Paper, Art Carton",
            "Warna: Full Color",
            "Finishing: Laminasi Doff/Gloss",
            "Minimal Order: 100 lembar"
        ]
    },
    // ==== PAPER MATERIAL ====
    {
        id: 5,
        name: "HVS A3",
        category: "printing",
        price: "Rp 4.000",
        minOrder: "1 lembar",
        image: "./asset/img/hvs-A3.jpeg",
        description: "Cetak HVS A3 untuk kebutuhan dokumen dan print umum.",
        fullDescription: "Layanan cetak HVS ukuran A3 dengan kualitas warna tajam. Cocok untuk dokumen, laporan, dan kebutuhan cetak harian.",
        details: ["Ukuran A3", "Kertas HVS", "Harga per lembar"]
    },
    {
        id: 6,
        name: "Art Paper 120g",
        category: "printing",
        price: "Rp 5.000",
        minOrder: "1 lembar",
        image: "./asset/img/art-paper.jpeg",
        description: "Cetak Art Paper 120g berkualitas.",
        fullDescription: "Art Paper 120g cocok untuk brosur, pamflet, dan media promosi ringan lainnya.",
        details: ["Gramasi 120g", "Full Color", "Harga per lembar"]
    },
    {
        id: 7,
        name: "Art Paper 150g",
        category: "printing",
        price: "Rp 5.000",
        minOrder: "1 lembar",
        image: "./asset/img/art-paper.jpeg",
        description: "Kualitas cetak premium untuk kebutuhan promosi.",
        fullDescription: "Art Paper 150g memberikan hasil cetak lebih tebal dan profesional.",
        details: ["Gramasi 150g", "Full Color", "Harga per lembar"]
    },
    {
        id: 8,
        name: "Art Carton 210g",
        category: "printing",
        price: "Rp 6.000",
        minOrder: "1 lembar",
        image: "./asset/img/art-carton.jpeg",
        description: "Cetak Art Carton 210g tebal dan kokoh.",
        fullDescription: "Cocok untuk kartu nama, sertifikat, dan packaging ringan.",
        details: ["Gramasi 210g", "Full Color", "Harga per lembar"]
    },
    {
        id: 9,
        name: "Art Carton 230g",
        category: "printing",
        price: "Rp 6.000",
        minOrder: "1 lembar",
        image: "./asset/img/art-carton.jpeg",
        description: "Kertas tebal untuk hasil cetak profesional.",
        fullDescription: "Art Carton 230g cocok untuk cetakan premium seperti undangan dan kartu nama.",
        details: ["Gramasi 230g"]
    },
    {
        id: 10,
        name: "Art Carton 260g",
        category: "printing",
        price: "Rp 6.000",
        minOrder: "1 lembar",
        image: "./asset/img/art-carton.jpeg",
        description: "Art Carton tebal untuk cetakan premium.",
        fullDescription: "Memberikan hasil kokoh dan elegan untuk berbagai kebutuhan cetak.",
        details: ["Gramasi 260g"]
    },

    // ==== STICKER ====
    {
        id: 11,
        name: "Stiker Cromo",
        category: "printing",
        price: "Rp 9.000",
        image: "./asset/img/stiker-cromon.jpeg",
        description: "Stiker cromo dengan kualitas glossy.",
        fullDescription: "Stiker cromo cocok untuk label produk dan brand.",
        details: ["Finishing glossy", "Full color"]
    },
    {
        id: 12,
        name: "Stiker Vinyl",
        category: "printing",
        price: "Rp 12.000",
        image: "./asset/img/stiker-vinyl.jpeg",
        description: "Stiker vinyl tahan air dan awet.",
        fullDescription: "Cocok untuk outdoor maupun indoor.",
        details: ["Tahan air", "Full color"]
    },
    {
        id: 13,
        name: "Stiker Transparan",
        category: "printing",
        price: "Rp 12.000",
        image: "./asset/img/stiker-transparan.jpeg",
        description: "Stiker transparan premium.",
        fullDescription: "Memberi kesan elegan dan bersih untuk produk.",
        details: ["Efek transparan", "Full color"]
    },
    {
        id: 14,
        name: "Stiker Hologram",
        category: "printing",
        price: "Rp 20.000",
        image: "./asset/img/stiker-hologram.jpeg",
        description: "Stiker hologram warna pelangi.",
        fullDescription: "Sering digunakan untuk label premium atau keamanan.",
        details: ["Efek hologram"]
    },
    {
        id: 15,
        name: "Stiker Gold",
        category: "printing",
        price: "Rp 20.000",
        image: "./asset/img/stiker-gold.jpeg",
        description: "Stiker warna emas elegan.",
        fullDescription: "Ideal untuk branding premium.",
        details: ["Warna emas metalik"]
    },
    {
        id: 16,
        name: "Stiker Silver",
        category: "printing",
        price: "Rp 20.000",
        image: "./asset/img/stiker-silver.jpeg",
        description: "Stiker warna silver metalik.",
        fullDescription: "Memberikan kesan mewah pada packaging.",
        details: ["Warna silver metalik"]
    },

    // ==== SERTIFIKAT ====
    {
        id: 17,
        name: "Bahan Sertifikat",
        category: "printing",
        price: "Rp 5.000 – 20.000",
        image: "./asset/img/sertifikat.jpeg",
        description: "Cetak sertifikat berbagai bahan premium.",
        fullDescription: "Tersedia beberapa jenis kertas tebal premium untuk kebutuhan sertifikat.",
        details: ["Harga bergantung bahan"]
    },

    // ==== BANNER ====
    {
        id: 18,
        name: "Banner Flexi",
        category: "printing",
        price: "Rp 25.000/meter",
        image: "./asset/img/banner-flexi.jpeg",
        description: "Banner flexi ekonomis.",
        fullDescription: "Cocok untuk event, promosi toko, dan spanduk outdoor.",
        details: ["Harga per meter"]
    },
    {
        id: 19,
        name: "Banner Korea",
        category: "printing",
        price: "Rp 65.000/meter",
        image: "./asset/img/banner-korea.jpeg",
        description: "Banner Korea dengan kualitas premium.",
        fullDescription: "Lebih tebal dan tahan lama dibanding flexi biasa.",
        details: ["Harga per meter"]
    },
    {
        id: 20,
        name: "X Banner",
        category: "printing",
        price: "Rp 120.000",
        image: "./asset/img/x-banner.jpeg",
        description: "X Banner ukuran standar.",
        fullDescription: "Termasuk print dan rangkanya, cocok untuk promosi.",
        details: ["Ukuran standar 60x160cm"]
    },
    {
        id: 21,
        name: "Roll Banner",
        category: "printing",
        price: "Rp 350.000",
        image: "./asset/img/roll-banner.jpeg",
        description: "Roll banner elegan dan portabel.",
        fullDescription: "Ideal untuk booth event, promosi perusahaan, dan presentasi.",
        details: ["Termasuk rangka aluminium"]
    },

    // ==== MERCHANDISE ====
    {
        id: 22,
        name: "Jersey Custom",
        category: "clothing",
        price: "Rp 145.000",
        image: "./asset/img/jersey.jpeg",
        description: "Jersey custom full printing.",
        fullDescription: "Cocok untuk tim eSport, komunitas olahraga, atau event.",
        details: ["Sublim full print", "Bahan premium"]
    },
    {
        id: 23,
        name: "Ganci Custom",
        category: "merchandise",
        price: "Rp 5.000 – 20.000",
        image: "./asset/img/ganci.jpeg",
        description: "Gantungan kecil custom berbagai bentuk.",
        fullDescription: "Bisa dicetak custom sesuai desain.",
        details: ["Bisa custom bentuk", "Full color"]
    },
    {
        id: 24,
        name: "Mug Custom",
        category: "merchandise",
        price: "Rp 40.000",
        image: "./asset/img/mug-custom.jpeg",
        description: "Mug custom dengan cetak full color.",
        fullDescription: "Cocok untuk hadiah, souvenir, dan merchandise komunitas.",
        details: ["Full color", "Bahan keramik"]
    },
    {
        id: 25,
        name: "Tumbler Custom",
        category: "merchandise",
        price: "Rp 110.000",
        image: "./asset/img/thumbler-custom.jpeg",
        description: "Tumbler custom elegan.",
        fullDescription: "Cocok untuk event, perusahaan, atau souvenir premium.",
        details: ["Bisa custom nama/logo"]
    },
    {
        id: 26,
        name: "Lanyard Custom",
        category: "merchandise",
        price: "Rp 35.000",
        image: "./asset/img/lanyard.jpeg",
        description: "Lanyard custom printing.",
        fullDescription: "Cocok untuk ID card, event, dan komunitas.",
        details: ["Sablon full color"]
    },

    // ==== PACKAGING ====
    {
        id: 27,
        name: "Dus Kemasan",
        category: "printing",
        price: "Rp 1.000 (min 1000 pcs)",
        image: "./asset/img/dus-kemasan.jpeg",
        description: "Dus kemasan custom untuk produk UMKM.",
        fullDescription: "Bisa custom desain sesuai kebutuhan bisnis.",
        details: ["Minimal order 1000 pcs"]
    }
];

// Data kategori
const categories = {
    'clothing': {
        name: 'Baju Custom',
        description: 'Berbagai pilihan pakaian custom dengan kualitas terbaik untuk kebutuhan personal, komunitas, atau bisnis Anda.',
        color: 'purple',
        icon: '👕'
    },
    'printing': {
        name: 'Percetakan',
        description: 'Layanan percetakan berkualitas tinggi untuk keperluan bisnis, promosi, dan personal dengan berbagai pilihan finishing.',
        color: 'blue',
        icon: '🖨️'
    },
    'merchandise': {
        name: 'Merchandise',
        description: 'Merchandise eksklusif yang dapat dicustom dengan desain sesuai kebutuhan, cocok sebagai identitas, hadiah, atau kenang-kenangan acara.',
        color: 'green',
        icon: '🔑'
    }
};

// Fungsi untuk menampilkan produk dalam kategori
function showCategoryProducts(category) {
    // Filter produk berdasarkan kategori
    const categoryProducts = productsData.filter(product => product.category === category);
    const categoryInfo = categories[category];

    // Update modal title
    document.getElementById('modalCategoryTitle').textContent = `Produk ${categoryInfo.name}`;
    document.getElementById('modalCategoryDesc').textContent = 'Semua produk dalam kategori ini';

    // Update category info
    document.getElementById('categoryName').textContent = categoryInfo.name;
    document.getElementById('categoryDescription').textContent = categoryInfo.description;
    document.getElementById('productCount').textContent = categoryProducts.length;

    // Update category info styling
    const categoryInfoDiv = document.getElementById('categoryInfo');
    categoryInfoDiv.className = `mb-8 p-4 rounded-lg bg-gradient-to-r from-${categoryInfo.color}-50 to-${categoryInfo.color}-100`;

    // Generate products grid
    const productsGrid = document.getElementById('modalProductsGrid');
    productsGrid.innerHTML = '';

    categoryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300';
        productCard.innerHTML = `
                <div class="h-48 bg-gradient-to-r from-${categoryInfo.color}-400 to-${categoryInfo.color}-600 relative overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" 
                         class="w-full h-full object-cover hover:scale-105 transition duration-500">
                </div>
                <div class="p-5">
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="text-lg font-bold text-gray-800">${product.name}</h3>
                        <span class="bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700 text-xs font-bold px-3 py-1 rounded-full">
                            ${categoryInfo.icon}
                        </span>
                    </div>
                    
                    <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                    
                    <div class="space-y-2 mb-4">
                        ${product.details.slice(0, 2).map(detail => `
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-check text-${categoryInfo.color}-500 mr-2 text-xs"></i>
                                <span>${detail}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                            <p class="text-lg font-bold text-${categoryInfo.color}-600">${product.price}</p>
                            <p class="text-xs text-gray-500">Min. order: ${product.minOrder}</p>
                        </div>
                        <button onclick="showProductDetail(${product.id})"
                            class="bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700 hover:bg-${categoryInfo.color}-600 hover:text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm">
                            Lihat Detail
                        </button>
                    </div>
                </div>
            `;
        productsGrid.appendChild(productCard);
    });

    // Show modal
    const modal = document.getElementById('categoryModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal kategori
function closeCategoryModal() {
    const modal = document.getElementById('categoryModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Fungsi untuk menampilkan detail produk individu
function showProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    const categoryInfo = categories[product.category];

    // Create and show individual product modal
    const productDetailModal = document.createElement('div');
    productDetailModal.id = 'productDetailModal';
    productDetailModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    productDetailModal.innerHTML = `
            <div class="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-800">${product.name}</h2>
                            <p class="text-gray-600">${categoryInfo.name} • ${product.price}</p>
                        </div>
                        <button onclick="closeProductDetail()" 
                            class="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src="${product.image}" alt="${product.name}" 
                                 class="w-full h-64 object-cover rounded-lg mb-4">
                            <div class="text-center">
                                <span class="inline-block bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700 px-4 py-2 rounded-lg font-medium">
                                    Min. Order: ${product.minOrder}
                                </span>
                            </div>
                        </div>
                        
                        <div>
                            <div class="mb-6">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">Deskripsi Lengkap</h3>
                                <p class="text-gray-600">${product.fullDescription}</p>
                            </div>
                            
                            <div class="mb-6">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">Spesifikasi</h3>
                                <ul class="space-y-2">
                                    ${product.details.map(detail => `
                                        <li class="flex items-center text-gray-600">
                                            <i class="fas fa-check text-${categoryInfo.color}-500 mr-2"></i>
                                            ${detail}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                            
                            <div class="bg-${categoryInfo.color}-50 p-4 rounded-lg mb-6">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">Harga</h3>
                                <div class="flex items-center justify-between">
                                    <span class="text-lg font-medium">Mulai dari</span>
                                    <span class="text-2xl font-bold text-${categoryInfo.color}-600">${product.price}</span>
                                </div>
                            </div>
                            
                            <div class="flex space-x-3">
                                <button onclick="whatsappProductOrder('${product.name}')"
                                    class="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
                                    <i class="fab fa-whatsapp mr-2"></i>Order via WhatsApp
                                </button>
                                <button onclick="closeProductDetail()"
                                    class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition duration-300">
                                    Kembali
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(productDetailModal);
}

// Fungsi untuk menutup modal detail produk
function closeProductDetail() {
    const modal = document.getElementById('productDetailModal');
    if (modal) {
        modal.remove();
    }
}

// Fungsi untuk order via WhatsApp berdasarkan kategori
function whatsappCategoryOrder() {
    const categoryTitle = document.getElementById('modalCategoryTitle').textContent;
    const phoneNumber = '6285157771815';
    const message = `Halo, saya tertarik dengan produk dalam kategori: ${categoryTitle}\nBisa info detail produk dan harganya?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Fungsi untuk order via WhatsApp produk spesifik
function whatsappProductOrder(productName) {
    const phoneNumber = '6285157771815';
    const message = `Halo, saya ingin memesan: ${productName}\nBisa info detail dan harganya?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    closeProductDetail();
}

// Close modal dengan ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeCategoryModal();
        closeProductDetail();
    }
});

// Close modal ketika klik di luar konten
document.getElementById('categoryModal').addEventListener('click', function (event) {
    if (event.target === this) {
        closeCategoryModal();
    }
});

// Event listener untuk detail buttons
document.querySelectorAll('.detail-btn').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        showCategoryProducts(category);
    });
});

// Filter produk berdasarkan kategori (untuk tombol filter di halaman utama)
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Update active button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active', 'bg-purple-600', 'text-white');
            btn.classList.add('bg-white', 'text-gray-700', 'border');
        });

        this.classList.add('active', 'bg-purple-600', 'text-white');
        this.classList.remove('bg-white', 'text-gray-700', 'border');

        const category = this.dataset.category;
        filterProducts(category);
    });
});

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}