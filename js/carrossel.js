function scrollGaleria(direcao) {
  const galeria = document.getElementById('galeria');
  // Pegamos a largura de uma imagem + o gap (espaço) entre elas
  const larguraCard = galeria.querySelector('img').clientWidth + 32; 
  
  galeria.scrollBy({
    left: larguraCard * direcao,
    behavior: 'smooth'
  });
}