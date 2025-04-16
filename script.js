// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Optional: Alert user before redirecting to WhatsApp
const whatsappLink = document.querySelector('a[href*="wa.me"]');
if (whatsappLink) {
  whatsappLink.addEventListener('click', () => {
    alert("You'll be redirected to WhatsApp to message us.");
  });
}

// Optional: Alert user before sending an email
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
  emailLink.addEventListener('click', () => {
    alert("Your email app will open to send us a message.");
  });
}
