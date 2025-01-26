// Navigation
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Sticky Navigation
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "transparent";
      navbar.style.boxShadow = "none";
    }
  });

  // Mobile Menu Toggle
  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
        // Close mobile menu if open
        navLinks.classList.remove("active");
        menuToggle?.classList.remove("active");
      }
    });
  });

  // Active Navigation Link
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

// Flower Data
const flowers = [
  {
    name: "Rose",
    description: "Roses are universally known for their association with love and beauty. Roses have come to symbolise some of our strongest feelings, such as love, passion and admiration.",
    image: "https://i.pinimg.com/736x/a0/18/96/a01896067c7ce6fafab76f36338deadc.jpg",
    color: "Various (Red, Pink, White, Yellow)",
  },
  {
    name: "Sunflower",
    description: "Sunflowers symbolise loyalty, adoration and, because of their association with the sun, sunflowers are well-known for being a happy flower and the perfect bloom for a summer flower to brighten up the mood",
    image: "https://i.pinimg.com/736x/47/9c/6f/479c6fcf310a84a3a936b935df5d49a8.jpg",
    color: "Yellow",
  },
  {
    name: "Lilies",
    description: "Lilies are associated with purity, renewal, and transience. Lilies have very large, showy flowers and some have a strong fragrance.",
    image: "https://i.pinimg.com/736x/16/fd/56/16fd569f7238920f27c8252583f4470e.jpg",
    color: "Various (White, Yellow, Orange, Red, Pink, and Pastel Shades",
  },
  {
    name: "Hibiscus",
    description: "Hibiscus, a plant with colorful flowers, has been used for centuries for decorative and medicinal purposes. The hibiscus symbolizes beauty, femininity, and the fleeting nature of life, often associated with love, vitality, and cultural significance.",
    image: "https://i.pinimg.com/736x/14/00/ff/1400ffcedfadb46f47c376ef4ddfba73.jpg",
    color: "Various (Too many, they come in a mix of colors)",
  },
  {
  name: "Orchid",
    description: "Orchids symbolizes thoughtfulness, refinement, fertility, beauty, charm, and love. Addtionally, Orchids are known to be an expensive due to their bloom frequency.",
    image: "https://i.pinimg.com/736x/06/07/ac/0607ac995f661496fecfe3c91d7a04b3.jpg",
    color: "Various (White, Pink, Purple, Red, Orange, Yellow, Green, and Blue)",},
    {
    name: "Rumdoul",
    description: "Rumduol (Mitrella mesnyi), Cambodia's national flower, symbolizes grace, purity, and the enduring cultural heritage of the Cambodian people. Its fragrant blossoms are often associated with the gentle and modest beauty of Cambodian women, making it a poignant emblem of femininity in Khmer culture.",
    image: "https://i.pinimg.com/736x/91/68/ae/9168aebf26a7a9637b722b49ceafc5e2.jpg",
    color: "Yellow",}
];

// Load Flowers
function loadFlowers() {
  const flowerGrid = document.querySelector(".flower-grid");
  if (!flowerGrid) return;

  flowers.forEach((flower) => {
    const flowerCard = document.createElement("div");
    flowerCard.className = "flower-card";
    flowerCard.innerHTML = `
      <img src="${flower.image}" alt="${flower.name}">
      <div class="flower-info">
        <h3>${flower.name}</h3>
        <p>${flower.description}</p>
        <div class="flower-color">
          <span>Color: ${flower.color}</span>
        </div>
      </div>
    `;
    flowerGrid.appendChild(flowerCard);
  });
}

// Initialize Flowers
loadFlowers();

