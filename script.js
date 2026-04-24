document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form handling
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();

    if (!name) {
      alert("Fill all fields");
      return;
    }

    alert("Message sent successfully!");
    this.reset();
  });

});

// Gallery scroll
function scrollGallery(distance) {
  document.getElementById('scrollGallery')
    .scrollBy({ left: distance, behavior: 'smooth' });
}
