function mudarTema(){
  const html = document.documentElement // vai acessar o HTML
  html.classList.toggle('modo-branco')
  const img = document.querySelector('#profile img')
  if(html.classList.contains('modo-branco')){ // se tiver no modo branco, vai ter uma imagem, se tiver escuro é outra imagem
    img.setAttribute('src', 'assets/avatar2.png')
  } else{
    img.setAttribute('src', 'assets/Avatar.png')
  }
  /*if(html.classList.contains('modo-branco')){ // se no HTML conter "modo-branco, vai remover a classe"
    html.classList.remove('modo-branco')
  } else{
    html.classList.add('modo-branco')
  }*/
  // mesma coisa que o código de cima
}