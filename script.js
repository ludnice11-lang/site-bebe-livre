// ===== BOTÃO VOLTAR AO TOPO =====

// pega o botão pelo id e guarda numa variável
const botaoTopo = document.getElementById("botao-topo");

// toda vez q rola a pág, roda isso
window.addEventListener("scroll", function () {
  // rolou + de 400px? mostra o botão
  if (window.scrollY > 400) {
    botaoTopo.classList.add("visivel");
  } else {
    // tá lá em cima, esconde
    botaoTopo.classList.remove("visivel");
  }
});

// clicou no botão = sobe suave até o topo
botaoTopo.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
