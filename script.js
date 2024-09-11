// script.js

// Wait for the page to fully load
window.addEventListener("load", function () {
  // Hide the preloader
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";

    // Show the main content
    document.getElementById("main-container").classList.remove("hidden");
    document.getElementById("header").classList.remove("hidden");
    document.body.style.overflow = "auto";
  }, 4000);
});
