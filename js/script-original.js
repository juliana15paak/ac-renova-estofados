// ===================== CARROSSEL ===================== 

function scrollGaleria(direcao) {
  const galeria = document.getElementById('galeria');
  // Pegamos a largura de uma imagem + o gap (espaço) entre elas
  const larguraCard = galeria.querySelector('img').clientWidth + 32; 
  
  galeria.scrollBy({
    left: larguraCard * direcao,
    behavior: 'smooth'
  });
}

// ===================== GALERIA EXPANDIDA AO CLICAR EM UMA FOTO ===================== 

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

btnFechar.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// ===================== MENU MOBILE ===================== 

const btnMenu = document.querySelector('.menu');
const menuLista = document.querySelector('nav ul');

if(btnMenu && menuLista){
  btnMenu.addEventListener('click', () =>{
    menuLista.classList.toggle('menu-aberto');
  })
}


// ===================== AVALIAÇÃO EXPANDIDA ===================== 

// Seleciona todos os textos de "Ver conversa"
const btnsConversa = document.querySelectorAll('.btn-conversa');

btnsConversa.forEach(btn => {
  btn.onclick = function() {
    modal.style.display = "flex"; // Abre o modal que você já tem
    modalImg.src = this.getAttribute('data-print'); // Pega o caminho do print que está no HTML
  };
});