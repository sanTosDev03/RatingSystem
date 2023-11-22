const ratingContainer = document.querySelector('.rating');
let currectValue = 0;
let limit = 5;

const html = Array.from(Array(limit)).map( (item,i) => {
      return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

ratingContainer.innerHTML = html.join("");

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseover', e =>{

      const pos = item.getAttribute('data-pos');

      if (currectValue === parseInt(pos) + 1) {
        return;
      }

      document.querySelectorAll('.item').forEach(it => {
        if (it.classList.contains('item-full')) {
            it.classList.remove('item-full');
        }
      })
      
      for (let i = 0; i <= pos; i++) {
        const star = document.querySelector(`.item-${i}`)

        if (!star.classList.contains("item-full")) {
          star.classList.add('item-full');
        }
      }

      currectValue = parseInt(pos + 1);


    })
    item.addEventListener('click', e => {
      const existingPuntuacion = ratingContainer.querySelector('p');
        if (existingPuntuacion) {
          existingPuntuacion.remove(); // Elimina el elemento <p> existente
        }

      const puntuacion = document.createElement('p');
      const pos = item.getAttribute('data-pos');
      currentValue = parseInt(pos) + 1;
      puntuacion.textContent = `Puntuación: ${currentValue}`;
  
      ratingContainer.appendChild(puntuacion);
    })
  });
 