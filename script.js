// Acessando o botão e o corpo da página
const toggleButton = document.getElementById("toggleButton");
const body = document.body;

// Função para alternar o modo
toggleButton.addEventListener("click", () => {
  body.classList.toggle("claro"); // Alterna a classe 'claro' no body
});
