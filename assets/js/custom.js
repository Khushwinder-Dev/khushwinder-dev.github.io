// Example JavaScript file
console.log("Custom JS loaded successfully!");

// Optional: simple example interaction
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  if (heading) heading.style.color = "#0078ff";
});

new Typed("#typed-text", {
  strings: [
      "Full Stack Developer",
      "Shopify Expert",
      "Wordpress Expert",
      "Ecommerce Expert"
    ],
  typeSpeed: 80,
  backSpeed: 20,
  backDelay: 3500,
  loop: true,
  smartBackspace: true,
  showCursor: true,
  cursorChar: "|",
});
