document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // MOBILE MENU TOGGLE
  // =========================
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-menu-close");

  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.classList.add("no-scroll");
    mobileToggle.setAttribute("aria-expanded", "true");
  });

  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
    mobileToggle.setAttribute("aria-expanded", "false");
  });

  // =========================
  // SEARCH OVERLAY TOGGLE
  // =========================
  const searchBtn = document.querySelector(".search-btn");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchClose = document.querySelector(".search-close");

  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
    searchOverlay.setAttribute("aria-hidden", "false");
  });

  searchClose.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    searchOverlay.setAttribute("aria-hidden", "true");
  });

  // =========================
  // CART DRAWER
  // =========================
  const cartBtn = document.querySelector(".cart-btn");
  const cartDrawer = document.querySelector(".cart-drawer");
  const cartClose = document.querySelector(".cart-close");
  const cartItems = document.querySelector(".cart-items");
  const cartEmpty = document.querySelector(".cart-empty");
  const subtotalAmount = document.querySelector(".subtotal-amount");

  cartBtn.addEventListener("click", () => {
    cartDrawer.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  cartClose.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  // =========================
  // ADD TO CART FUNCTIONALITY
  // =========================
  const addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
  let cartCount = 0;
  let subtotal = 0;

  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productCard = e.target.closest(".product-card");
      const title = productCard.querySelector(".product-title a").textContent;
      const price = parseFloat(
        productCard.querySelector(".current-price").textContent.replace("$", "")
      );

      // Create cart item
      const item = document.createElement("div");
      item.classList.add("cart-item");
      item.textContent = `${title} - $${price.toFixed(2)}`;
      cartItems.appendChild(item);

      cartCount++;
      subtotal += price;

      cartBtn.setAttribute("data-cart-count", cartCount);
      subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;

      cartEmpty.style.display = "none";
      cartItems.style.display = "block";
    });
  });

  // =========================
  // WISHLIST TOGGLE
  // =========================
  const wishlistBtns = document.querySelectorAll(".wishlist-btn");

  wishlistBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });

  // =========================
  // TESTIMONIAL SLIDER
  // =========================
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function cycleTestimonials() {
    testimonials.forEach((t, i) =>
      t.classList.toggle("active", i === index)
    );
    index = (index + 1) % testimonials.length;
  }

  setInterval(cycleTestimonials, 5000); // Change every 5s

  // =========================
  // NEWSLETTER SUBMISSION
  // =========================
  const newsletterForm = document.querySelector(".newsletter-form");

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector("input");
    const email = emailInput.value;

    if (email.trim() !== "") {
      alert(`Thanks for subscribing, ${email}!`);
      emailInput.value = "";
    }
  });
});
