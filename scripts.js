const K_RASCUNHO="meu-form:rascunho";
const K_ENVIOS="meu-form:envios";


function ler(chave, padrao) {
  try {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) : padrao;
  } catch (e) {
    return padrao;
  }
}

function gravar(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
    return true;
  } catch (e) {
    return false;
  }
}

const form = document.getElementById("form");
const feedback = document.getElementById("feedback");

function mostrarErro(campo, mensagem) {
  document.getElementById("erro-" + campo).textContent = mensagem;
  document.getElementById(campo).classList.add("invalido");
}

function limparErros() {
  document.querySelectorAll(".erro").forEach(function (el) {
    el.textContent = "";
  });
  document.querySelectorAll(".invalido").forEach(function (el) {
    el.classList.remove("invalido");
  });
}

function mostrarFeedback(texto, tipo) {
  feedback.textContent = texto;
  feedback.className = tipo; // "sucesso" ou "falha"
}

function validar(dados) {
  let valido = true;

  if (dados.nome.trim() === "") {
    mostrarErro("nome", "Informe seu nome.");
    valido = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email.trim())) {
    mostrarErro("email", "Informe um e-mail válido.");
    valido = false;
  }
  if (dados.mensagem.trim().length < 5) {
    mostrarErro("mensagem", "Escreva uma mensagem com pelo menos 5 caracteres.");
    valido = false;
  }

  return valido;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  limparErros();
  feedback.textContent = "";

  const dados = {
    nome: form.elements.nome.value,
    email: form.elements.email.value,
    mensagem: form.elements.mensagem.value
  };

  if (!validar(dados)) {
    mostrarFeedback("Corrija os campos destacados.", "falha");
    return;
  }

  const envios = ler(K_ENVIOS, []);
  envios.unshift(dados);

  if (gravar(K_ENVIOS, envios)) {
    form.reset();
    mostrarFeedback("Enviado com sucesso!", "sucesso");
  } else {
    mostrarFeedback("Não foi possível salvar. Tente novamente.", "falha");
  }
});
const dados = {
  nome: form.elements.nome.value,
  email: form.elements.email.value,
  telefone: form.elements.telefone.value,
  tipo: form.elements.tipo.value,
  mensagem: form.elements.mensagem.value
};