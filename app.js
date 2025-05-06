// Initialize EmailJS
(function() {
  emailjs.init("krTb11kRM_JcpETM3");
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;

  emailjs.sendForm("service_p5bam5g", "template_wdpfl4r", this)
    .then(() => {
      document.getElementById("message").style.display = "block";
      document.getElementById("contact-form").reset();
      setTimeout(() => {
        submitBtn.disabled = false;
        document.getElementById("message").style.display = "none";
      }, 3000);
    }, (error) => {
      alert("Failed to send message. Please try again later.");
      console.error(error);
      submitBtn.disabled = false;
    });
});

// Handle navbar toggle for mobile
const toggleBtn = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu
toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');  
  });
});
