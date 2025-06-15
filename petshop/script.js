// Pet adoption functionality
function adoptPet(petName, petBreed) {
    const modal = document.getElementById('adoptionModal');
    const message = document.getElementById('adoptionMessage');
    
    message.innerHTML = `Thank you for your interest in adopting <strong>${petName}</strong> the ${petBreed}! ❤️`;
    modal.style.display = 'block';
    
    // Add some celebration effects
    createHearts();
}

function closeModal() {
    document.getElementById('adoptionModal').style.display = 'none';
}

// Navigation functionality
function showSection(section) {
    switch(section) {
        case 'home':
            // Scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'pets':
            // Scroll to featured pets section
            document.querySelector('.featured').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'contact':
            // Scroll to contact section
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            break;
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('adoptionModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    const pets = document.querySelectorAll('.pet');
    pets.forEach(pet => {
        pet.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateY(5deg)';
        });
        
        pet.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0)';
        });
    });
});

const pets = [ 
    {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg"}, 
    {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog02.jpg"}, 
    {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg"}, 
    {"name": "Mittens", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg"} 
  ];
  
  function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    pets.forEach(pet => {
      const petItem = document.createElement('div');
      petItem.className = 'pet';
      petItem.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet('${pet.name}', '${pet.type}')">Adopt Now</button>
      `;
      petList.appendChild(petItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadPets);
  