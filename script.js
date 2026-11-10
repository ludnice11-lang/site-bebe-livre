// =========================================================
// BOTÃO "VOLTAR AO TOPO"
// =========================================================

// 1) Encontra o botão no HTML pelo id e guarda numa variável (uma "caixinha" com nome)
const botaoTopo = document.getElementById("botao-topo");

// 2) Fica "escutando" a rolagem da página.
//    Toda vez que a pessoa rola, a função entre { } é executada.
window.addEventListener("scroll", function () {
  // window.scrollY = quantos pixels a página já foi rolada para baixo
  if (window.scrollY > 400) {
    // Rolou mais de 400px: adiciona a classe "visivel" (o CSS mostra o botão)
    botaoTopo.classList.add("visivel");
  } else {
    // Está perto do topo: tira a classe (o CSS esconde o botão)
    botaoTopo.classList.remove("visivel");
  }
});

// 3) Fica "escutando" o clique no botão
botaoTopo.addEventListener("click", function () {
  // Rola a página até o topo (top: 0), de forma suave (smooth)
  window.scrollTo({ top: 0, behavior: "smooth" });
});
