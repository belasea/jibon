// Change modal image on click
document.querySelectorAll(".project-img").forEach((img) => {
  img.addEventListener("click", function () {
    const imageUrl = this.getAttribute("data-bs-image");
    document.getElementById("modalImage").src = imageUrl;
  });
});

// Auto typing =======================================
document.addEventListener("DOMContentLoaded", () => {
  const typedSpan = document.querySelector(".typed");
  if (typedSpan) {
    const items = typedSpan
      .getAttribute("data-typed-items")
      .split(",")
      .map((item) => item.trim());
    new Typed(".typed", {
      strings: items,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });
  }
});

// Auto Close Navbar =======================================
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navItem");
  const navbarCollapse = document.getElementById("navbarCollapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();

        const targetSection = document.querySelector(href);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, null, href);

          // Collapse navbar after scroll (on small screens)
          setTimeout(() => {
            if (window.innerWidth < 992) {
              const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false,
              });
              bsCollapse.hide();
            }
          }, 300);
        }
      }
    });
  });
});
