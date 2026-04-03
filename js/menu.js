const btnMenu = document.querySelector('.menu');
const menuLista = document.querySelector('nav ul');

if(btnMenu && menuLista){
  btnMenu.addEventListener('click', () =>{
    menuLista.classList.toggle('menu-aberto');
  })
}