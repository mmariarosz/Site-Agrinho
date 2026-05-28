// DARK MODE

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    darkModeBtn.textContent = "☀️";
  } else{
    darkModeBtn.textContent = "🌙";
  }
});


// MENSAGEM INTERATIVA

const showMessageBtn = document.getElementById("showMessageBtn");
const messageBox = document.getElementById("messageBox");

showMessageBtn.addEventListener("click", () => {

  const messages = [
    "🌱 Reduzir desperdícios ajuda o planeta!",
    "🚜 Tecnologia e sustentabilidade caminham juntas!",
    "🍎 Cada alimento salvo faz diferença!",
    "🌎 Agricultura inteligente é o futuro!",
    "💚 Produzir mais desperdiçando menos é essencial!"
  ];

  const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

  messageBox.textContent = randomMessage;
});


// ANIMAÇÃO AO ROLAR A PÁGINA

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";
});