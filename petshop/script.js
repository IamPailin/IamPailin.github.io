$(document).ready(function () {
    // 🐾 Pet adoption functionality
    window.adoptPet = function (petName, petBreed) {
      $('#adoptionMessage').html(`Thank you for your interest in adopting <strong>${petName}</strong> the ${petBreed}! ❤️`);
      $('#adoptionModal').fadeIn(200);
      createHearts(); // Optional celebration effect
    };
  
    window.closeModal = function () {
      $('#adoptionModal').fadeOut(200);
    };
  
    // 🧭 Navigation functionality
    window.showSection = function (section) {
      if (section === 'home') {
        $('html, body').animate({ scrollTop: 0 }, 400);
      } else if (section === 'pets') {
        $('.featured')[0].scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'contact') {
        $('#contact')[0].scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    // 🧊 Close modal when clicking outside of it
    $(window).on('click', function (e) {
      if ($(e.target).is('#adoptionModal')) {
        closeModal();
      }
    });
  
    // ✨ Hover effects on pet cards (after pets are loaded dynamically)
    // Move this logic into pets.js after pets render
    // But here's the reusable function:
    window.activatePetHover = function () {
      $('.pet').hover(
        function () {
          $(this).css({
            transform: 'translateY(-10px) rotateY(5deg)',
            transition: 'transform 0.3s'
          });
        },
        function () {
          $(this).css('transform', 'translateY(0) rotateY(0)');
        }
      );
    };
  });
  