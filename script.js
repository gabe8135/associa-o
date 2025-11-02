// script.js - interações simples e animações por scroll
document.addEventListener("DOMContentLoaded", () => {
  // data year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // IntersectionObserver para animações
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".animate").forEach((el) => io.observe(el));

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        document
          .querySelector(href)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Form dummy handler
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensagem enviada! (demo)");
      form.reset();
    });
  }
});
