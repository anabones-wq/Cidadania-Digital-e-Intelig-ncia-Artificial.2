// Modo escuro
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Quiz
function quiz(answer) {
  const result = document.getElementById("quizResult");

  if (!answer) {
    result.textContent = "✔ Correto! Nunca compartilhe sem verificar fontes.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Errado! Isso pode espalhar desinformação.";
    result.style.color = "red";
  }
}

// Formulário
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let fake = document.getElementById("fake").value;
  let verifica = document.getElementById("verifica").value;

  document.getElementById("msg").textContent =
    `Obrigado ${nome}! Resposta registrada. Fake news: ${fake} | Verificação: ${verifica}`;
});
