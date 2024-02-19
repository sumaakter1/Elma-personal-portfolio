// .........add nav active ......//
// Get all the navigation links
      const navLinks = document.querySelectorAll('.nav-link');
    
      // Loop through each link
      navLinks.forEach(link => {
        // Add event listener to each link
        link.addEventListener('click', () => {
          // Remove 'active' class from all links
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          // Add 'active' class to the clicked link
          link.classList.add('active');
        });
      });
