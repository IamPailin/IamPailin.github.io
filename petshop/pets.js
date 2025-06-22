const pets = [ 
    { "name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg" }, 
    { "name": "Max", "type": "Dog", "age": 4, "img": "img/dogs/dog02.jpg" }, 
    { "name": "Mie", "type": "Dog", "age": 5, "img": "img/dogs/dog03.jpg" }, 
    { "name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg" }, 
    { "name": "Mittens", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg" },
    { "name": "Simon", "type": "Cat", "age": 3, "img": "img/cats/cat03.jpg" },
    { "name": "Jacob", "type": "Capybara", "age": 7, "img": "img/capybaras/capybara01.jpg" },
    { "name": "Angelina", "type": "Capybara", "age": 5, "img": "img/capybaras/capybara02.jpg" },
    { "name": "Yelena", "type": "Bird", "age": 2, "img": "img/birds/bird01.jpg" },
    { "name": "Michael", "type": "Bird", "age": 1, "img": "img/birds/bird02.jpg" }

  ];
  
  $(document).ready(function () {
    // Load all pets initially
    renderPets(pets);
  
    // Checkbox filter logic
    $('.filter-checkbox').on('change', function () {
      filterPets();
    });
  
    // Render pets onto the page
    function renderPets(petArray) {
        const $petList = $('#pet-list');
        $petList.empty();
      
        if (petArray.length === 0) {
          $petList.append('<p>No pets found for selected types.</p>');
          return;
        }
      
        petArray.forEach(pet => {
          const petCard = `
            <div class="pet">
              <img src="${pet.img}" alt="${pet.name}" />
              <h3>${pet.name}</h3>
              <p>Type: ${pet.type}</p>
              <p>Age: ${pet.age} years</p>
              <button onclick="adoptPet('${pet.name}', '${pet.type}')">Adopt Now</button>
            </div>
          `;
          $petList.append(petCard);
        });
      
        // Activate hover effects after pets are added
        if (typeof activatePetHover === 'function') activatePetHover();
      }
  
    // Filter pets based on checkbox selection
    function filterPets() {
      const selectedTypes = $('.filter-checkbox:checked').map(function () {
        return $(this).val();
      }).get();
  
      const filtered = pets.filter(pet => selectedTypes.includes(pet.type));
      renderPets(filtered);
    }
  
    // Make adoptPet globally accessible
    window.adoptPet = function(name, type) {
      $('#adoptionMessage').text(`Thanks for adopting ${name} the ${type}! 🐾`);
      $('#adoptionModal').show();
    };
  
    window.closeModal = function () {
      $('#adoptionModal').hide();
    };
  });
  