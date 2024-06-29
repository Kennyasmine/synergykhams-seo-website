document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const sectionId = this.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust offset as needed
        behavior: 'smooth'
      });
    });
  });