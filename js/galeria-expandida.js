// Selecionamos o modal e a imagem de destino
const modal = document.getElementById("modal-galeria");
const modalImg = document.getElementById("img-expandida");
const btnFechar = document.querySelector(".fechar-modal");

// Pegamos todas as imagens da galeria de resultados
const imagensGaleria = document.querySelectorAll("#resultados img");

imagensGaleria.forEach(img => {
  img.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src; 
  }
});

// Fechar ao clicar no X
btnFechar.onclick = function() {
  modal.style.display = "none";
}

// Fechar se o usuário clicar fora da imagem (no fundo preto)
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}