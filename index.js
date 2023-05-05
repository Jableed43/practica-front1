import datos from "./personas.json" assert {type: "json"}

window.addEventListener("load", () => {
// Obtener el contenedor de todas las cards
const container = document.getElementById('cards-container');
  
// Obtener la plantilla de la card
const cardTemplate = document.getElementById('card-template');
  
  // Iterar sobre los datos y crear una card para cada uno
  datos.forEach(dato => {
    // Clonar la plantilla de la card
    const card = cardTemplate.content.cloneNode(true);
    
    // Agregar los datos a la card
    card.querySelector('.card-title').textContent = dato.nombre;
    card.querySelector('.card-apellido').textContent = dato.apellido;
    card.querySelector('.card-edad').textContent = dato.edad;
    card.querySelector('.card-mail').textContent = dato.email;
    
    // Agregar la card al contenedor
    container.appendChild(card);
  });
})
