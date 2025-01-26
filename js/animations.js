// Skill Bar Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const percent = progressBar.getAttribute("data-percent");
          progressBar.style.width = `${percent}%`;
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => observer.observe(bar));
}

// Scroll Animations
function initScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => observer.observe(element));
}

// Typing Animation for Hero Section
function initTypingAnimation() {
  const text = "A Sophomore in CIA First High School";
  const element = document.querySelector(".subtitle");
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  if (element) {
    element.textContent = "";
    setTimeout(type, 1000);
  }
}

// Initialize Animations
document.addEventListener("DOMContentLoaded", () => {
  animateSkillBars();
  initScrollAnimations();
  initTypingAnimation();
});
