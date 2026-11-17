const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Tutup menu setelah salah satu navigasi dipilih.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Simulasi keranjang: jumlah bertambah saat tombol produk ditekan.
let cartTotal = 0;
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", () => {
    cartTotal += 1;
    cartCount.textContent = cartTotal;
    const productName = button.dataset.product;
    alert(`${productName} berhasil ditambahkan ke keranjang!`);
  });
});

document.getElementById("cartButton").addEventListener("click", () => {
  alert(`Keranjang belanja kamu berisi ${cartTotal} produk.`);
});

// Form kontak demo: menampilkan pesan berhasil tanpa mengirim data ke server.
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const nama = form.elements.nama.value.trim();
  document.getElementById("formStatus").textContent =
    `Terima kasih, ${nama}! Pesan kamu sudah tercatat pada demo ini.`;
  form.reset();
});

// Tombol kembali ke atas.
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 350);
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
