document.addEventListener("DOMContentLoaded", () => {
  const nomeCrushkk = prompt("Por favor, insira o seu nome:");

  if (nomeCrushkk) {
    alert(`Aprovado! ${nomeCrushkk}, você é único(a)! 🌟`);
    // Cria e insere o conteúdo HTML dinâmico
    document.body.innerHTML = `
            <div class="card">
                <h1 class="title">Convite Especial</h1>

                <p class="message">Oii, <span id="nomeCrushkk">${nomeCrushkk}</span>! 🌟</p> 
                <p class="message">Que tal passarmos um tempo juntos? 
                Aproveitando o clima e a companhia um do outro, 
                em algum lugar legal, tomando uma brejinha?  🍻</p>

                <br> Clique em sua resposta abaixo 😊</p>

                <button id="confirmacao">Sim, claro!</button>
                <button id="negacao">Ah, não posso...</button>
            </div>
        `;

    const confirmacao = document.getElementById("confirmacao");
    const negacao = document.getElementById("negacao");

    confirmacao.addEventListener("click", () => {
      const valeBeijos = encodeURIComponent(`Oi, eu aceito o convite, 
            e gostaria de gastar o meu vale5beijos. 
            Quando podemos fazer algo divertido juntos?`);

      window.location.href = `https://wa.me/5511981742970?text=${valeBeijos}`;
    });

    negacao.addEventListener("mouseover", moveButton);

    negacao.addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/watch?v=kwXQQ7UC2Mw";
    });

    function moveButton() {
      const offsetX = Math.random() * 300 - 150;
      const offsetY = Math.random() * 300 - 150;
      const buttonRect = negacao.getBoundingClientRect();
      const cardRect = negacao.parentElement.getBoundingClientRect();

      let newX = buttonRect.left + offsetX;
      let newY = buttonRect.top + offsetY;

      if (newX < cardRect.left) newX = cardRect.left;
      if (newX + buttonRect.width > cardRect.right)
        newX = cardRect.right - buttonRect.width;
      if (newY < cardRect.top) newY = cardRect.top;
      if (newY + buttonRect.height > cardRect.bottom)
        newY = cardRect.bottom - buttonRect.height;

      negacao.style.position = "absolute";
      negacao.style.left = `${newX - cardRect.left}px`;
      negacao.style.top = `${newY - cardRect.top}px`;
    }
  } else {
    document.body.innerHTML =
      "<p>Você precisa inserir um nome para ver o convite.</p>";
  }
});
