const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const year = document.getElementById("year");

// Toggle the mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

 menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});


// Close the menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Automatically display the current year
year.textContent = new Date().getFullYear();