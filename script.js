// Funcionalidade simples de interatividade para o post
document.addEventListener('DOMContentLoaded', () => {
  const btnCurtir = document.getElementById('btnCurtir');
  const contador = document.getElementById('contador');
  let curtidas = 0;

  btnCurtir.addEventListener('click', () => {
    curtidas++;
    contador.textContent = curtidas;
  });
});
