/* ==========================================================================
   AETHER 925 // Boutique Solid Sterling Silver Interactive Logic
   State Management: Cart, Wishlist, Currency, Filters, Modals, Search
   ========================================================================== */

(function () {
  'use strict';

  // ================= 1. PRODUCT CATALOG DATA =================
  const PRODUCTS = [
    {
      id: 'prod-1',
      title: 'Liquid Molten Stacker Band',
      category: 'rings',
      vibe: 'Everyday Stackers',
      priceUSD: 110,
      image: 'assets/category-stackers.jpg',
      badge: 'BESTSELLER',
      badgeClass: 'badge-solid',
      rating: 4.9,
      reviewsCount: 342,
      sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
      defaultSize: 'US 8',
      weight: '8.4 grams',
      finish: 'High-Polish Rhodium Flash',
      description: 'An organic, fluid band cast in solid 925 sterling silver. Captures molten silver at the precise moment of freezing. Engineered with smooth ergonomic comfort-fit interior.'
    },
    {
      id: 'prod-2',
      title: 'Chiseled Brutalist Signet',
      category: 'oxidized',
      vibe: 'Bold Oxidized',
      priceUSD: 145,
      image: 'assets/category-oxidized.jpg',
      badge: 'LIMITED 45/100',
      badgeClass: 'badge-limited',
      rating: 5.0,
      reviewsCount: 188,
      sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
      defaultSize: 'US 9',
      weight: '16.8 grams',
      finish: 'Deep Charcoal Patina & Mirror Rim',
      description: 'A monolithic square-face signet ring featuring hand-chiseled raw crater texture with deep oxidized dark patina, bordered by sharp hand-polished silver bevels.'
    },
    {
      id: 'prod-3',
      title: 'Heavy Figaro Curb Chain (8mm)',
      category: 'chains',
      vibe: 'Chains & Pendants',
      priceUSD: 195,
      image: 'assets/category-chains.jpg',
      badge: 'NEW DROP',
      badgeClass: 'badge-new',
      rating: 4.9,
      reviewsCount: 215,
      sizes: ['18" (45cm)', '20" (50cm)', '22" (55cm)', '24" (60cm)'],
      defaultSize: '20" (50cm)',
      weight: '48.2 grams',
      finish: 'Triple Rhodium Dip with 925 Laser Hallmark',
      description: 'An uncompromising heavy link chain. Alternating 3:1 precision diamond-cut curb links that catch cold specular highlights with every tilt. Custom brutalist lobster closure.'
    },
    {
      id: 'prod-4',
      title: 'Architectural Orbit Ear Cuff',
      category: 'earrings',
      vibe: 'Minimalist Silver',
      priceUSD: 85,
      image: 'assets/category-minimalist.jpg',
      badge: 'NO PIERCING NEEDED',
      badgeClass: 'badge-solid',
      rating: 4.8,
      reviewsCount: 94,
      sizes: ['Single Universal Cuff', 'Pair (Save 15%)'],
      defaultSize: 'Single Universal Cuff',
      weight: '5.2 grams',
      finish: 'Sculptural Mirror Chrome Polish',
      description: 'Ergonomic pressure-balanced ear cuff designed to clasp securely to the upper helix or conch without piercing. Hollow-core casting for weightless all-day wear.'
    },
    {
      id: 'prod-5',
      title: 'Rupture Thorn Pendant Necklace',
      category: 'chains',
      vibe: 'Chains & Pendants',
      priceUSD: 160,
      image: 'assets/product-pendant.jpg',
      badge: 'AW26 DROP',
      badgeClass: 'badge-new',
      rating: 4.9,
      reviewsCount: 76,
      sizes: ['20" (50cm)', '22" (55cm)'],
      defaultSize: '20" (50cm)',
      weight: '24.6 grams',
      finish: 'Oxidized Dark Recesses & Polished Spikes',
      description: 'A sharp, botanical-gothic thorn talisman suspended from a solid 2.5mm round box chain. An uncompromising urban statement piece.'
    },
    {
      id: 'prod-6',
      title: 'Oxidized Serpent Wrap Band',
      category: 'oxidized',
      vibe: 'Bold Oxidized',
      priceUSD: 130,
      image: 'assets/product-serpent.jpg',
      badge: '925 SOLID',
      badgeClass: 'badge-solid',
      rating: 4.8,
      reviewsCount: 140,
      sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
      defaultSize: 'US 8',
      weight: '11.5 grams',
      finish: 'Satin Matte Slate & Black Shadow',
      description: 'Continuous coil ring depicting abstracted scale geometry with heavy oxidized engraving. Open silhouette allows subtle micro-adjustments for perfect knuckle fit.'
    },
    {
      id: 'prod-7',
      title: 'Mirage Dual-Link Silver Bracelet',
      category: 'chains',
      vibe: 'Chains & Pendants',
      priceUSD: 220,
      image: 'assets/product-bracelet.jpg',
      badge: 'BESTSELLER',
      badgeClass: 'badge-solid',
      rating: 5.0,
      reviewsCount: 119,
      sizes: ['7.0" (Small)', '7.5" (Medium)', '8.0" (Large)'],
      defaultSize: '7.5" (Medium)',
      weight: '32.1 grams',
      finish: 'High-Luster Cold Silver',
      description: 'Hybrid bracelet fusing chunky marine anchor links with sleek industrial curb chains. Features a concealed push-gate architectural clasp.'
    },
    {
      id: 'prod-8',
      title: 'Tension Wave Ring Duo',
      category: 'rings',
      vibe: 'Everyday Stackers',
      priceUSD: 140,
      image: 'assets/product-wave-rings.jpg',
      badge: 'BUNDLE SET',
      badgeClass: 'badge-new',
      rating: 4.9,
      reviewsCount: 88,
      sizes: ['US 6', 'US 7', 'US 8', 'US 9'],
      defaultSize: 'US 7',
      weight: '12.0 grams',
      finish: 'Liquid Molten Silver Sheen',
      description: 'Set of two interlocking wave rings designed to nest seamlessly together or wear split across adjacent fingers. Subtle undulating peaks catch ambient lighting.'
    }
  ];

  // ================= 2. UGC COMMUNITY LOOKBOOK DATA =================
  const UGC_POSTS = [
    {
      handle: '@valentin.noir',
      location: 'Berlin, Germany',
      likes: '2,490',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      productFeatured: 'prod-3',
      caption: 'Layered the 8mm Figaro chain with my vintage leather jacket. The cold weight of solid 925 hits different.'
    },
    {
      handle: '@mira_archive',
      location: 'Tokyo, Japan',
      likes: '4,120',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      productFeatured: 'prod-1',
      caption: 'Three molten bands stacked on index and ring finger. Raw textures against minimal tailoring.'
    },
    {
      handle: '@jaxon.atelier',
      location: 'London, UK',
      likes: '1,830',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      productFeatured: 'prod-2',
      caption: 'The Chiseled Brutalist signet is a permanent part of my hands now. Incredible dark patina recesses.'
    },
    {
      handle: '@claire.vane',
      location: 'Copenhagen, Denmark',
      likes: '3,270',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      productFeatured: 'prod-4',
      caption: 'Orbit ear cuff styling today. No piercings required, stays firmly locked without pinching.'
    },
    {
      handle: '@tetsuo.tokyo',
      location: 'Kyoto, Japan',
      likes: '2,890',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      productFeatured: 'prod-7',
      caption: 'Dual-link bracelet on the wrist. Solid 925 feels indestructible.'
    },
    {
      handle: '@alina.ciel',
      location: 'Paris, France',
      likes: '5,040',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
      productFeatured: 'prod-8',
      caption: 'Wave duo nested together. Liquid silver reflections catching the twilight.'
    }
  ];

  // ================= 3. APPLICATION STATE =================
  const state = {
    currency: 'USD', // USD, EUR, GBP
    currencyRates: {
      USD: { symbol: '$', rate: 1.0, label: 'USD' },
      EUR: { symbol: '€', rate: 0.92, label: 'EUR' },
      GBP: { symbol: '£', rate: 0.79, label: 'GBP' }
    },
    freeShippingThresholdUSD: 150,
    currentFilter: 'all',
    currentSort: 'featured',
    wishlist: new Set(),
    cart: [], // items: { product, size, qty }
    promoCode: null,
    discountPercent: 0,
    discountFixed: 0
  };

  // Helper to format currency
  function formatMoney(amountUSD) {
    const cur = state.currencyRates[state.currency];
    const converted = amountUSD * cur.rate;
    return `${cur.symbol}${converted.toFixed(2)}`;
  }

  // ================= 4. DOM REFERENCES =================
  const dom = {
    // Header & Navigation
    announcementBar: document.getElementById('announcementBar'),
    currencyToggle: document.getElementById('currencyToggle'),
    announcementPause: document.getElementById('announcementPause'),
    mainNav: document.getElementById('mainNav'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    mobileDrawerOverlay: document.getElementById('mobileDrawerOverlay'),
    mobileDrawerClose: document.getElementById('mobileDrawerClose'),
    searchTriggerBtn: document.getElementById('searchTriggerBtn'),
    wishlistTriggerBtn: document.getElementById('wishlistTriggerBtn'),
    cartTriggerBtn: document.getElementById('cartTriggerBtn'),
    wishlistCount: document.getElementById('wishlistCount'),
    cartCount: document.getElementById('cartCount'),
    
    // Product Showcase
    filterTabs: document.getElementById('filterTabs'),
    productGrid: document.getElementById('productGrid'),
    productCountLabel: document.getElementById('productCountLabel'),
    sortSelect: document.getElementById('sortSelect'),

    // Cart Drawer
    cartDrawer: document.getElementById('cartDrawer'),
    cartBackdrop: document.getElementById('cartBackdrop'),
    cartDrawerClose: document.getElementById('cartDrawerClose'),
    cartDrawerCount: document.getElementById('cartDrawerCount'),
    shippingMeterText: document.getElementById('shippingMeterText'),
    shippingMeterFill: document.getElementById('shippingMeterFill'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartDiscountRow: document.getElementById('cartDiscountRow'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartShipping: document.getElementById('cartShipping'),
    cartTotal: document.getElementById('cartTotal'),
    promoCodeInput: document.getElementById('promoCodeInput'),
    applyPromoBtn: document.getElementById('applyPromoBtn'),
    promoFeedback: document.getElementById('promoFeedback'),
    checkoutBtn: document.getElementById('checkoutBtn'),

    // Quick View Modal
    quickViewModal: document.getElementById('quickViewModal'),
    quickViewBackdrop: document.getElementById('quickViewBackdrop'),
    quickViewClose: document.getElementById('quickViewClose'),
    quickViewContent: document.getElementById('quickViewContent'),

    // Search Modal
    searchModal: document.getElementById('searchModal'),
    searchBackdrop: document.getElementById('searchBackdrop'),
    searchClose: document.getElementById('searchClose'),
    searchInput: document.getElementById('searchInput'),
    searchResultsList: document.getElementById('searchResultsList'),

    // Lookbook
    lookbookGrid: document.getElementById('lookbookGrid'),
    ugcModal: document.getElementById('ugcModal'),
    ugcBackdrop: document.getElementById('ugcBackdrop'),
    ugcClose: document.getElementById('ugcClose'),
    ugcModalContent: document.getElementById('ugcModalContent'),

    // Info Modal
    infoModal: document.getElementById('infoModal'),
    infoBackdrop: document.getElementById('infoBackdrop'),
    infoClose: document.getElementById('infoClose'),
    infoModalContent: document.getElementById('infoModalContent'),

    // Newsletter
    newsletterForm: document.getElementById('newsletterForm'),
    newsletterEmail: document.getElementById('newsletterEmail'),
    newsletterSuccess: document.getElementById('newsletterSuccess'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
  };

  // ================= 5. INITIALIZATION =================
  function init() {
    renderProducts();
    renderLookbook();
    setupEventListeners();
    updateCartUI();
    updateWishlistCount();
  }

  // ================= 6. PRODUCT RENDERING & FILTERING =================
  function getFilteredProducts() {
    let list = [...PRODUCTS];

    // Filter
    if (state.currentFilter !== 'all') {
      if (state.currentFilter === 'new-drops') {
        list = list.filter(p => p.badge.includes('NEW') || p.badge.includes('AW26'));
      } else {
        list = list.filter(p => p.category === state.currentFilter);
      }
    }

    // Sort
    if (state.currentSort === 'price-asc') {
      list.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (state.currentSort === 'price-desc') {
      list.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (state.currentSort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }

  function renderProducts() {
    const products = getFilteredProducts();
    dom.productCountLabel.textContent = `Showing ${products.length} solid 925 pieces`;

    dom.productGrid.innerHTML = products.map(product => {
      const isWishlisted = state.wishlist.has(product.id);
      return `
        <article class="product-card" data-product-id="${product.id}">
          <div class="product-media">
            <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
            <div class="product-badges">
              <span class="badge-tag ${product.badgeClass}">${product.badge}</span>
            </div>
            <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    aria-label="Save to wishlist" 
                    onclick="toggleWishlist('${product.id}', this)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button class="product-quick-view" onclick="openQuickView('${product.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Quick View</span>
            </button>
          </div>
          <div class="product-info">
            <span class="product-category-label">${product.vibe}</span>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-meta-row">
              <span class="product-price">${formatMoney(product.priceUSD)}</span>
              <span class="product-spec-tag">SOLID 925</span>
            </div>
            <button class="product-add-btn" onclick="addToCart('${product.id}', '${product.defaultSize}', 1, this)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add to Bag</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // ================= 7. COMMUNITY LOOKBOOK RENDERING =================
  function renderLookbook() {
    dom.lookbookGrid.innerHTML = UGC_POSTS.map((item, index) => {
      const product = PRODUCTS.find(p => p.id === item.productFeatured) || PRODUCTS[0];
      return `
        <div class="lookbook-card" onclick="openUGCModal(${index})">
          <img src="${item.image}" alt="Community look styled by ${item.handle}" class="lookbook-img" loading="lazy">
          <div class="lookbook-overlay">
            <span class="ugc-handle">${item.handle}</span>
            <span class="ugc-shop-tag">Shop Look &bull; ${product.title.split(' ')[0]}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // ================= 8. CART DRAWER MANAGEMENT =================
  window.addToCart = function (productId, size, qty = 1, btnEl = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || product.defaultSize;

    // Check existing
    const existingIndex = state.cart.findIndex(item => item.product.id === productId && item.size === chosenSize);
    if (existingIndex > -1) {
      state.cart[existingIndex].qty += qty;
    } else {
      state.cart.push({
        product: product,
        size: chosenSize,
        qty: qty
      });
    }

    // Button feedback
    if (btnEl) {
      const origText = btnEl.innerHTML;
      btnEl.classList.add('added');
      btnEl.innerHTML = `<span>Added to Bag ✓</span>`;
      setTimeout(() => {
        btnEl.classList.remove('added');
        btnEl.innerHTML = origText;
      }, 1600);
    }

    updateCartUI();
    showToast(`Added ${product.title} (${chosenSize}) to bag`);
    openCart();
  };

  window.changeCartQty = function (index, delta) {
    if (!state.cart[index]) return;
    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
    updateCartUI();
  };

  window.removeCartItem = function (index) {
    if (!state.cart[index]) return;
    const item = state.cart[index];
    state.cart.splice(index, 1);
    updateCartUI();
    showToast(`Removed ${item.product.title} from bag`);
  };

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
    dom.cartCount.textContent = totalItems;
    dom.cartDrawerCount.textContent = `(${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;

    // Cart Pop Animation
    dom.cartCount.classList.add('pop');
    setTimeout(() => dom.cartCount.classList.remove('pop'), 250);

    // Subtotal
    const subtotalUSD = state.cart.reduce((sum, item) => sum + (item.product.priceUSD * item.qty), 0);

    // Free Shipping Progress
    const remainingToFree = state.freeShippingThresholdUSD - subtotalUSD;
    if (subtotalUSD === 0) {
      dom.shippingMeterFill.style.width = '0%';
      dom.shippingMeterText.innerHTML = `Add <strong>${formatMoney(state.freeShippingThresholdUSD)}</strong> more for Free Global Express`;
    } else if (remainingToFree > 0) {
      const percent = Math.min(100, Math.round((subtotalUSD / state.freeShippingThresholdUSD) * 100));
      dom.shippingMeterFill.style.width = `${percent}%`;
      dom.shippingMeterText.innerHTML = `Add <strong>${formatMoney(remainingToFree)}</strong> more for <strong>Free Global Express</strong>`;
    } else {
      dom.shippingMeterFill.style.width = '100%';
      dom.shippingMeterText.innerHTML = `✦ <strong>Complimentary Express Shipping Unlocked!</strong>`;
    }

    // Render Items
    if (state.cart.length === 0) {
      dom.cartItemsContainer.innerHTML = `
        <div class="empty-cart-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
          </svg>
          <h4>Your bag is currently empty</h4>
          <p>Explore our solid 925 drops and craft your personal stack.</p>
          <button class="btn btn-silver" onclick="closeCart(); document.getElementById('collection').scrollIntoView({behavior:'smooth'})">Explore Collection</button>
        </div>
      `;
      dom.cartSubtotal.textContent = formatMoney(0);
      dom.cartTotal.textContent = formatMoney(0);
      dom.cartShipping.textContent = 'Calculated next';
      dom.cartDiscountRow.style.display = 'none';
      return;
    }

    dom.cartItemsContainer.innerHTML = state.cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-thumb">
          <img src="${item.product.image}" alt="${item.product.title}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-top">
            <h4 class="cart-item-title">${item.product.title}</h4>
            <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove item">&times;</button>
          </div>
          <span class="cart-item-size">Size: ${item.size} &bull; Solid 925</span>
          <div class="cart-item-bottom">
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="changeCartQty(${index}, -1)" aria-label="Decrease">&minus;</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="changeCartQty(${index}, 1)" aria-label="Increase">&#43;</button>
            </div>
            <span class="cart-item-price">${formatMoney(item.product.priceUSD * item.qty)}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Discounts
    let discountAmountUSD = 0;
    if (state.discountPercent > 0) {
      discountAmountUSD = subtotalUSD * (state.discountPercent / 100);
    } else if (state.discountFixed > 0) {
      discountAmountUSD = Math.min(subtotalUSD, state.discountFixed);
    }

    if (discountAmountUSD > 0) {
      dom.cartDiscountRow.style.display = 'flex';
      dom.cartDiscount.textContent = `-${formatMoney(discountAmountUSD)}`;
    } else {
      dom.cartDiscountRow.style.display = 'none';
    }

    const shippingUSD = subtotalUSD >= state.freeShippingThresholdUSD ? 0 : 15;
    dom.cartShipping.textContent = shippingUSD === 0 ? 'FREE' : formatMoney(shippingUSD);

    const finalTotalUSD = Math.max(0, subtotalUSD - discountAmountUSD + (subtotalUSD > 0 ? shippingUSD : 0));
    dom.cartSubtotal.textContent = formatMoney(subtotalUSD);
    dom.cartTotal.textContent = formatMoney(finalTotalUSD);
  }

  function openCart() {
    dom.cartDrawer.classList.add('active');
    dom.cartBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.closeCart = function () {
    dom.cartDrawer.classList.remove('active');
    dom.cartBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  // ================= 9. QUICK VIEW MODAL =================
  window.openQuickView = function (productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let selectedSize = product.defaultSize;

    dom.quickViewContent.innerHTML = `
      <div class="qv-media">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="qv-content">
        <span class="qv-tag">${product.vibe} // ${product.badge}</span>
        <h2 class="qv-title">${product.title}</h2>
        <div class="qv-price">${formatMoney(product.priceUSD)}</div>
        <p class="qv-desc">${product.description}</p>
        
        <div class="qv-options-block">
          <div class="qv-option-label">
            <span>Select Size / Spec</span>
            <a href="#" style="color: var(--accent-cool-blue); font-size: 0.7rem;" onclick="event.preventDefault(); openSizeGuide()">Sizing Chart</a>
          </div>
          <div class="qv-size-selector" id="qvSizeSelector">
            ${product.sizes.map(size => `
              <button class="size-pill ${size === selectedSize ? 'active' : ''}" 
                      onclick="setQuickViewSize(this, '${size}')">
                ${size}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="qv-specs-box">
          <div><strong>Weight:</strong> ${product.weight}</div>
          <div><strong>Composition:</strong> Certified Solid 925 Sterling Silver</div>
          <div><strong>Finish:</strong> ${product.finish}</div>
        </div>

        <button class="btn btn-silver btn-block btn-glow" id="qvAddBagBtn" onclick="addToCart('${product.id}', window.currentQvSize || '${product.defaultSize}', 1, this)">
          <span>Add to Bag &bull; ${formatMoney(product.priceUSD)}</span>
        </button>
      </div>
    `;

    window.currentQvSize = selectedSize;

    dom.quickViewModal.classList.add('active');
    dom.quickViewBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.setQuickViewSize = function (btn, size) {
    const pills = btn.parentElement.querySelectorAll('.size-pill');
    pills.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    window.currentQvSize = size;
  };

  function closeQuickView() {
    dom.quickViewModal.classList.remove('active');
    dom.quickViewBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ================= 10. SEARCH MODAL =================
  function openSearchModal() {
    dom.searchModal.classList.add('active');
    dom.searchBackdrop.classList.add('active');
    dom.searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => dom.searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearchModal() {
    dom.searchModal.classList.remove('active');
    dom.searchBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.setSearchQuery = function (query) {
    dom.searchInput.value = query;
    renderSearchResults(query);
  };

  function renderSearchResults(query) {
    const cleanQuery = query.trim().toLowerCase();
    let matches = PRODUCTS;

    if (cleanQuery) {
      matches = PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery) ||
        p.vibe.toLowerCase().includes(cleanQuery) ||
        p.description.toLowerCase().includes(cleanQuery)
      );
    }

    if (matches.length === 0) {
      dom.searchResultsList.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">
          No pieces found matching "<strong>${query}</strong>". Explore our curated rings and chains.
        </div>
      `;
      return;
    }

    dom.searchResultsList.innerHTML = matches.map(item => `
      <div class="search-result-item" onclick="closeSearchModal(); openQuickView('${item.id}')">
        <div class="search-result-thumb">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="search-result-info">
          <div class="search-result-category">${item.vibe}</div>
          <div class="search-result-title">${item.title}</div>
        </div>
        <div class="search-result-price">${formatMoney(item.priceUSD)}</div>
      </div>
    `).join('');
  }

  // ================= 11. UGC LOOKBOOK MODAL =================
  window.openUGCModal = function (index) {
    const item = UGC_POSTS[index];
    if (!item) return;

    const product = PRODUCTS.find(p => p.id === item.productFeatured) || PRODUCTS[0];

    dom.ugcModalContent.innerHTML = `
      <div class="ugc-modal-media">
        <img src="${item.image}" alt="Community styling by ${item.handle}">
      </div>
      <div class="ugc-modal-info">
        <span class="section-subtitle-tag">[ COMMUNITY LOOKBOOK ]</span>
        <h3 style="font-family: var(--font-heading); color: #FFF; font-size: 1.25rem; margin-bottom: 0.4rem;">${item.handle}</h3>
        <p style="font-size: 0.78rem; color: var(--text-dim); margin-bottom: 1.2rem;">${item.location} &bull; ${item.likes} Likes</p>
        <p style="font-size: 0.9rem; color: var(--text-silver); line-height: 1.6; margin-bottom: 1.8rem; font-style: italic;">
          &ldquo;${item.caption}&rdquo;
        </p>

        <div style="background: var(--bg-charcoal); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: 4px; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem;">
          <img src="${product.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 2px;" alt="${product.title}">
          <div style="flex: 1;">
            <div style="font-size: 0.65rem; color: var(--accent-cool-blue); font-family: var(--font-heading);">PIECE WORN:</div>
            <div style="font-size: 0.86rem; font-weight: 600; color: #FFF;">${product.title}</div>
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-ice);">${formatMoney(product.priceUSD)}</div>
          </div>
        </div>

        <button class="btn btn-silver btn-block" onclick="closeUGCModal(); addToCart('${product.id}', '${product.defaultSize}', 1, this)">
          <span>Shop This Look &bull; Add to Bag</span>
        </button>
      </div>
    `;

    dom.ugcModal.classList.add('active');
    dom.ugcBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeUGCModal() {
    dom.ugcModal.classList.remove('active');
    dom.ugcBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ================= 12. INFO MODALS: SIZING & CARE =================
  window.openSizeGuide = function () {
    dom.infoModalContent.innerHTML = `
      <span class="section-subtitle-tag">[ SPECIFICATION MANUAL ]</span>
      <h2 style="font-family: var(--font-heading); color: #FFF; font-size: 1.6rem; margin-bottom: 1rem;">RING & CHAIN SIZING</h2>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">
        All AETHER rings are precision-calibrated to standard US ring dimensions with an ergonomic comfort-fit curved interior.
      </p>

      <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; margin-bottom: 1.5rem;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border-silver); color: #FFF; text-align: left;">
            <th style="padding: 0.5rem 0;">US Size</th>
            <th style="padding: 0.5rem 0;">Inside Diameter</th>
            <th style="padding: 0.5rem 0;">Circumference</th>
          </tr>
        </thead>
        <tbody style="color: var(--text-silver);">
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.5rem 0;">US 6</td><td>16.5 mm</td><td>51.8 mm</td></tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.5rem 0;">US 7</td><td>17.3 mm</td><td>54.4 mm</td></tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.5rem 0;">US 8</td><td>18.1 mm</td><td>56.9 mm</td></tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.5rem 0;">US 9</td><td>18.9 mm</td><td>59.5 mm</td></tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.5rem 0;">US 10</td><td>19.8 mm</td><td>62.1 mm</td></tr>
          <tr><td style="padding: 0.5rem 0;">US 11</td><td>20.6 mm</td><td>64.6 mm</td></tr>
        </tbody>
      </table>

      <h4 style="font-family: var(--font-heading); color: #FFF; margin-bottom: 0.5rem;">Chain Length Standards</h4>
      <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.6;">
        &bull; <strong>18" (45cm):</strong> Sits close above the collarbone.<br>
        &bull; <strong>20" (50cm):</strong> The universal daily drop length, sits at mid-collar.<br>
        &bull; <strong>22" (55cm):</strong> Ideal for layering below shorter chains with heavier pendants.
      </p>
    `;

    dom.infoModal.classList.add('active');
    dom.infoBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.openCareGuide = function () {
    dom.infoModalContent.innerHTML = `
      <span class="section-subtitle-tag">[ CARE MANUAL ]</span>
      <h2 style="font-family: var(--font-heading); color: #FFF; font-size: 1.6rem; margin-bottom: 1rem;">SOLID 925 PRESERVATION</h2>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">
        Solid 925 sterling silver is virtually indestructible and can be worn everyday, including in water. Our proprietary rhodium dip adds a durable scratch and oxidation barrier.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.84rem; color: var(--text-silver);">
        <div>
          <strong style="color: #FFF;">Daily Wear:</strong> Solid silver thrives when worn frequently—the natural oils from your skin help preserve its radiant luster.
        </div>
        <div>
          <strong style="color: #FFF;">Cleaning:</strong> Use the complimentary microfiber polishing cloth included in every AETHER box to buff off fingerprint oils.
        </div>
        <div>
          <strong style="color: #FFF;">Oxidized Finishes:</strong> Do not use liquid chemical dips on oxidized pieces, as they may strip the intentional antique charcoal patina.
        </div>
        <div>
          <strong style="color: #FFF;">Lifetime Guarantee:</strong> Free ultrasonic cleaning and re-polishing is provided at any of our flagship studio locations.
        </div>
      </div>
    `;

    dom.infoModal.classList.add('active');
    dom.infoBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeInfoModal() {
    dom.infoModal.classList.remove('active');
    dom.infoBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ================= 13. WISHLIST MANAGEMENT =================
  window.toggleWishlist = function (productId, btnEl) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    if (state.wishlist.has(productId)) {
      state.wishlist.delete(productId);
      if (btnEl) btnEl.classList.remove('active');
      showToast(`Removed ${product.title} from wishlist`);
    } else {
      state.wishlist.add(productId);
      if (btnEl) btnEl.classList.add('active');
      showToast(`Saved ${product.title} to wishlist`);
    }

    updateWishlistCount();
  };

  function updateWishlistCount() {
    dom.wishlistCount.textContent = state.wishlist.size;
    dom.wishlistCount.classList.add('pop');
    setTimeout(() => dom.wishlistCount.classList.remove('pop'), 250);
  }

  // ================= 14. TOAST NOTIFICATIONS =================
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">✦</span>
      <span>${message}</span>
    `;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideInToast 0.3s ease reverse forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ================= 15. PROMO CODE APPLICATION =================
  function applyPromoCode() {
    const code = dom.promoCodeInput.value.trim().toUpperCase();
    if (!code) return;

    if (code === 'SILVER15') {
      state.promoCode = 'SILVER15';
      state.discountPercent = 15;
      state.discountFixed = 0;
      dom.promoFeedback.className = 'promo-feedback success';
      dom.promoFeedback.textContent = '15% Discount Applied! (VIP Code)';
      updateCartUI();
      showToast('Promo code SILVER15 applied (-15%)');
    } else if (code === 'VIP20') {
      state.promoCode = 'VIP20';
      state.discountPercent = 0;
      state.discountFixed = 20;
      dom.promoFeedback.className = 'promo-feedback success';
      dom.promoFeedback.textContent = '$20.00 Off Applied!';
      updateCartUI();
      showToast('Promo code VIP20 applied (-$20)');
    } else {
      dom.promoFeedback.className = 'promo-feedback error';
      dom.promoFeedback.textContent = 'Invalid promo code. Try SILVER15';
    }
  }

  // ================= 16. EVENT LISTENERS =================
  function setupEventListeners() {
    // Currency Toggle
    dom.currencyToggle.addEventListener('click', () => {
      const currencies = ['USD', 'EUR', 'GBP'];
      const nextIndex = (currencies.indexOf(state.currency) + 1) % currencies.length;
      state.currency = currencies[nextIndex];
      const cur = state.currencyRates[state.currency];
      dom.currencyToggle.innerHTML = `<span class="flag-icon">${cur.label}</span> ${cur.symbol}`;
      
      // Re-render
      renderProducts();
      updateCartUI();
      showToast(`Currency changed to ${cur.label} (${cur.symbol})`);
    });

    // Announcement Pause
    let isPaused = false;
    dom.announcementPause.addEventListener('click', () => {
      isPaused = !isPaused;
      const track = document.querySelector('.announcement-track');
      track.style.animationPlayState = isPaused ? 'paused' : 'running';
      dom.announcementPause.innerHTML = isPaused 
        ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
        : `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
    });

    // Mobile Drawer
    dom.mobileMenuBtn.addEventListener('click', () => {
      dom.mobileDrawer.classList.add('active');
      dom.mobileDrawerOverlay.classList.add('active');
    });

    function closeMobileDrawer() {
      dom.mobileDrawer.classList.remove('active');
      dom.mobileDrawerOverlay.classList.remove('active');
    }

    dom.mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    dom.mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        closeMobileDrawer();
        const filter = link.getAttribute('data-filter');
        if (filter) {
          e.preventDefault();
          setFilter(filter);
          document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Desktop Nav Filtering
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const filter = link.getAttribute('data-filter');
        if (filter) {
          e.preventDefault();
          setFilter(filter);
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Filter Tabs
    dom.filterTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;
      const filter = tab.getAttribute('data-filter');
      setFilter(filter);
    });

    function setFilter(filter) {
      state.currentFilter = filter;
      document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-filter') === filter);
      });
      renderProducts();
    }

    // Sort Dropdown
    dom.sortSelect.addEventListener('change', (e) => {
      state.currentSort = e.target.value;
      renderProducts();
    });

    // Category Grid Click Throughs ("Shop by Vibe")
    document.querySelectorAll('.vibe-card').forEach(card => {
      card.addEventListener('click', () => {
        const target = card.getAttribute('data-category-target');
        setFilter(target);
        document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Cart Drawer Triggers
    dom.cartTriggerBtn.addEventListener('click', openCart);
    dom.cartDrawerClose.addEventListener('click', closeCart);
    dom.cartBackdrop.addEventListener('click', closeCart);

    // Promo code apply
    dom.applyPromoBtn.addEventListener('click', applyPromoCode);
    dom.promoCodeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyPromoCode();
      }
    });

    // Checkout Simulation
    dom.checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      const totalText = dom.cartTotal.textContent;
      showToast(`Initiating 256-bit encrypted checkout for ${totalText}...`);
      setTimeout(() => {
        alert(`✦ SECURE CHECKOUT SIMULATION\n\nTotal: ${totalText}\nItems: ${state.cart.length} solid 925 pieces\nShipping: Express Insured with Anti-Tarnish Box\n\nThank you for choosing AETHER 925.`);
        state.cart = [];
        updateCartUI();
        closeCart();
      }, 800);
    });

    // Quick View Triggers & Close
    dom.quickViewClose.addEventListener('click', closeQuickView);
    dom.quickViewBackdrop.addEventListener('click', closeQuickView);

    // Search Trigger
    dom.searchTriggerBtn.addEventListener('click', openSearchModal);
    dom.searchClose.addEventListener('click', closeSearchModal);
    dom.searchBackdrop.addEventListener('click', closeSearchModal);
    dom.searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });

    // Wishlist Trigger
    dom.wishlistTriggerBtn.addEventListener('click', () => {
      if (state.wishlist.size === 0) {
        showToast('Your wishlist is empty. Tap the heart on any piece to save it.');
      } else {
        showToast(`You have ${state.wishlist.size} saved piece(s) in your private archive.`);
      }
    });

    // Lookbook Close
    dom.ugcClose.addEventListener('click', closeUGCModal);
    dom.ugcBackdrop.addEventListener('click', closeUGCModal);

    // Info Modal
    dom.infoClose.addEventListener('click', closeInfoModal);
    dom.infoBackdrop.addEventListener('click', closeInfoModal);

    // Footer Info Links
    document.getElementById('sizeGuideLink').addEventListener('click', (e) => {
      e.preventDefault();
      openSizeGuide();
    });
    document.getElementById('silverCareLink').addEventListener('click', (e) => {
      e.preventDefault();
      openCareGuide();
    });
    document.getElementById('shippingInfoLink').addEventListener('click', (e) => {
      e.preventDefault();
      dom.infoModalContent.innerHTML = `
        <span class="section-subtitle-tag">[ LOGISTICS ]</span>
        <h2 style="font-family: var(--font-heading); color: #FFF; font-size: 1.6rem; margin-bottom: 1rem;">GLOBAL EXPRESS DISPATCH</h2>
        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
          All pieces are shipped from our London & New York studios in vacuum-sealed anti-tarnish vault envelopes with carbon-neutral courier partners.
        </p>
        <ul style="color: var(--text-silver); font-size: 0.84rem; line-height: 1.8; padding-left: 1.2rem;">
          <li><strong>Complimentary Global Express:</strong> On all orders over $150.</li>
          <li><strong>Delivery Windows:</strong> 2-3 business days (US/UK/EU), 4-5 days (Rest of World).</li>
          <li><strong>Insurance:</strong> Every shipment is 100% value-insured with signature release.</li>
        </ul>
      `;
      dom.infoModal.classList.add('active');
      dom.infoBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    document.getElementById('warrantyLink').addEventListener('click', (e) => {
      e.preventDefault();
      openCareGuide();
    });
    document.getElementById('faqLink').addEventListener('click', (e) => {
      e.preventDefault();
      openCareGuide();
    });

    // Newsletter Submit
    dom.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = dom.newsletterEmail.value;
      if (!email) return;

      dom.newsletterForm.style.display = 'none';
      dom.newsletterSuccess.style.display = 'block';
      showToast('VIP status unlocked! Code SILVER15 saved');
    });

    // Global Keyboard Shortcuts (Esc to close modals, Cmd/Ctrl + K for search)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCart();
        closeQuickView();
        closeSearchModal();
        closeUGCModal();
        closeInfoModal();
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      }
    });
  }

  // Run on page load
  document.addEventListener('DOMContentLoaded', init);

})();
