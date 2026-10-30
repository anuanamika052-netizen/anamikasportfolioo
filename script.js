const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Keep the initials placeholder visible until you add images/profile.jpg.
const profileImage = document.getElementById("profileImage");
const profileFallback = document.getElementById("profileFallback");

profileImage.addEventListener("load", () => {
  profileFallback.style.display = "none";
});
profileImage.addEventListener("error", () => {
  profileImage.style.display = "none";
});
