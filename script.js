// =========================
// ARQUIVO: script.js
// =========================

// ANIMAÇÃO DOS NÚMEROS

const counters = document.querySelectorAll('.number');

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 30);
    } else{
      counter.innerText = target + "%";
    }

  };

  updateCounter();

});

// MENU MOBILE

const menuBtn = document.querySelector('.menu-mobile');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});