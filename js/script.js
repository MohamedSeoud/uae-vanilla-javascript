document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
  
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });

    // script.js
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If everything is valid, you can submit the form or handle it as needed.
        alert('Message sent successfully!');
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});

document.addEventListener('DOMContentLoaded', function() {
 
  var parentElements  = document.querySelectorAll('.picture-container');




parentElements.forEach(function(parent) {

    parent.addEventListener('mouseout', function() {
        // Select the child element with the class 'removable'
        var child = parent.querySelector('.child');
        // Remove the 'removable' class from the child element
        if (child) {
            child.classList.add('show-button-leave');


        }
    });

    parent.addEventListener('mouseover', function() {
        // Select the child element with the class 'removable'
        var child = parent.querySelector('.child');
        // Remove the 'removable' class from the child element
        if (child) {

          child.classList.remove('show-button-leave');

        }
    });
});

  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('.cool-link');
  var sections = document.querySelectorAll('.section');

  // Function to check which section is in view
  function checkSectionInView() {
    var scrollPosition = window.scrollY;

    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove 'active' class from all nav items
        navItems.forEach(function(navItem) {
          navItem.classList.remove('active-link');
        });

        // Get the href attribute of the corresponding nav item
        var targetNavItem = document.querySelector('a[href="#' + section.id + '"]');
        if (targetNavItem) {
          targetNavItem.classList.add('active-link');
        }
      }
    });
  }

  // Click event listener on nav items
  navItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      var targetId = item.getAttribute('href'); // Get target section ID
      var targetSection = document.querySelector(targetId); // Find the target section

      // Scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });

      // Remove 'active' class from all nav items
      navItems.forEach(function(navItem) {
        navItem.classList.remove('active-link');
      });

      // Add 'active' class to the clicked nav item
      item.classList.add('active-link');
    });
  });

  // Scroll event listener to handle scrolling behavior
  window.addEventListener('scroll', checkSectionInView);


document.getElementById('toggleButton').addEventListener('click', function() {
  var navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
  
  // Toggle the border direction with a delay
  setTimeout(function() {
    if (navLinks.classList.contains('active')) {
      navLinks.style.borderRight = 'none';
      navLinks.style.borderLeft = '2px solid #fff';
    } else {
      navLinks.style.borderRight = '2px solid #fff';
      navLinks.style.borderLeft = 'none';
    }
  }, 100); // Delay time in milliseconds
});


function openPopup(videoId) {
  var popupContainer = document.getElementById('popup-container');
  var youtubeIframe = document.getElementById('youtube-iframe');

  youtubeIframe.src = "https://www.youtube.com/embed/" + videoId;
  popupContainer.classList.add('show');
}

function closePopup() {
  var popupContainer = document.getElementById('popup-container');
  var youtubeIframe = document.getElementById('youtube-iframe');

  youtubeIframe.src = "";
  popupContainer.classList.remove('show');
}

var popupButton = document.getElementById('popup-button');
popupButton.addEventListener('click', function() {
  openPopup("9Dr4a4_c27k");
});


document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('.cool-link');
  var navItems2 = document.querySelectorAll('.logo');

  var sections = document.querySelectorAll('.section');

  // Function to check which section is in view
  function checkSectionInView() {
    var scrollPosition = window.scrollY;

    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove 'active' class from all nav items
        navItems.forEach(function(navItem) {
          navItem.classList.remove('active-link');
        });

        // Get the href attribute of the corresponding nav item
        var targetNavItem = document.querySelector('a[href="#' + section.id + '"]');
        if (targetNavItem) {
          targetNavItem.classList.add('active-link');
        }
      }
    });
  }

  // Click event listener on nav items
  navItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      var targetId = item.getAttribute('href'); // Get target section ID
      var targetSection = document.querySelector(targetId); // Find the target section

      // Scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });

      // Remove 'active' class from all nav items
      navItems.forEach(function(navItem) {
        navItem.classList.remove('active-link');
      });

      // Add 'active' class to the clicked nav item
      item.classList.add('active-link');
    });
  });

  // Scroll event listener to handle scrolling behavior
  window.addEventListener('scroll', checkSectionInView);
});

});
