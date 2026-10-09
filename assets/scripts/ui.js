// assets/scripts/ui.js

/**
 * Alterna a exibição das seções e atualiza os links ativos do menu
 * @param {string} targetId - O ID da seção a ser exibida (ex: 'servicos')
 */
export function navegarPara(targetId) {
  const secoes = document.querySelectorAll('.page-section');
  const links = document.querySelectorAll('.nav-link');

  // 1. Esconde todas as seções e remove a classe active
  secoes.forEach(secao => secao.classList.remove('active'));

  // 2. Exibe a seção selecionada
  const secaoAlvo = document.getElementById(targetId);
  if (secaoAlvo) {
    secaoAlvo.classList.add('active');
  }

  // 3. Atualiza o estado visual do menu de navegação
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${targetId}`) {
      link.classList.add('active');
    }
  });
}