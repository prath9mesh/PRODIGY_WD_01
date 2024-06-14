// Navbar interactivity
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

const navbarLinks = document.querySelectorAll('#navbar ul li a');

navbarLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
      link.style.color = '#ff5733'; // Hover color
  });

  link.addEventListener('mouseout', function() {
      link.style.color = ''; // Reset to default color
  });
});
