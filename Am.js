// Theme Toggle Script
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Simple greeting popup when page loads
window.addEventListener("load", () => {
  console.log("Welcome to Amanuel's Portfolio Website!");
});


