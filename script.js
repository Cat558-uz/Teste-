function salvarTexto() {
  const texto = document.getElementById("inputText").value;
  localStorage.setItem("meuTexto", texto);
  mostrarTexto();
}

function mostrarTexto() {
  const textoSalvo = localStorage.getItem("meuTexto");
  document.getElementById("textoSalvo").innerText = textoSalvo || "Nada salvo ainda.";
}

// Mostra automaticamente ao abrir a página
mostrarTexto();
