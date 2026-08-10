// Data Dummy Menu CAFE TIME
const menuItems = [
    {
        id: 1,
        name: "Cappuccino Special",
        category: "minuman",
        price: 35000,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
        description: "Kopi premium dengan foam susu yang lembut"
    },
    {
        id: 2,
        name: "Chocolate Donut",
        category: "snack",
        price: 25000,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500",
        description: "Donat coklat Belgia dengan topping kacang"
    },
    {
        id: 3,
        name: "Grilled Salmon",
        category: "makanan",
        price: 85000,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
        description: "Salmon panggang dengan saus lemon butter"
    },
    {
        id: 4,
        name: "Matcha Latte",
        category: "minuman",
        price: 40000,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
        description: "Matcha Jepang asli dengan susu steamed"
    },
    {
        id: 5,
        name: "Croissant Almond",
        category: "snack",
        price: 28000,
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500",
        description: "Croissant Prancis dengan isian almond cream"
    },
    {
        id: 6,
        name: "Classic Burger",
        category: "makanan",
        price: 55000,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        description: "Burger sapi wagyu dengan keju cheddar"
    }
];

// Fungsi untuk render produk
function renderProducts(items) {
    const productGrid = document.getElementById('productGrid');
    
    if (!productGrid) return;
    
    if (items.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px;">Tidak ada menu yang sesuai dengan filter.</p>';
        return;
    }
    
    productGrid.innerHTML = items.map(item => `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${item.image}')"></div>
            <div class="product-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="product-meta">
                    <span class="product-category">${capitalizeFirst(item.category)}</span>
                    <span class="product-price">Rp ${item.price.toLocaleString('id-ID')}</span>
                </div>
                <a href="detail.html" class="btn btn-primary" style="width: 100%; text-align: center; margin-top: 10px;">Detail & Pesan</a>
            </div>
        </div>
    `).join('');
}

// Helper function
function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Filter function
function filterProducts() {
    const brandFilter = document.getElementById('filter-brand').value;
    const priceFilter = document.getElementById('filter-price').value;
    
    let filteredItems = [...menuItems];
    
    // Filter by category
    if (brandFilter !== 'semua') {
        filteredItems = filteredItems.filter(item => item.category === brandFilter);
    }
    
    // Filter by price
    if (priceFilter !== 'semua') {
        filteredItems = filteredItems.filter(item => {
            switch(priceFilter) {
                case 'murah':
                    return item.price < 30000;
                case 'sedang':
                    return item.price >= 30000 && item.price <= 50000;
                case 'mahal':
                    return item.price > 50000;
                default:
                    return true;
            }
        });
    }
    
    renderProducts(filteredItems);
}

// Event listeners for filters
document.addEventListener('DOMContentLoaded', function() {
    // Initial render
    renderProducts(menuItems);
    
    // Add event listeners to filter selects
    const filterBrand = document.getElementById('filter-brand');
    const filterPrice = document.getElementById('filter-price');
    
    if (filterBrand) {
        filterBrand.addEventListener('change', filterProducts);
    }
    
    if (filterPrice) {
        filterPrice.addEventListener('change', filterProducts);
    }
});
