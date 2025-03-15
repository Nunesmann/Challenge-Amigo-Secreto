const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Remove espaços extras no início e no fim
    if (nome === "") {
        alert("Por favor, insira um nome válido."); // Valida entrada vazia
        return;
    }

    listaAmigos.push(nome);

    // Atualiza a lista de amigos na interface
    ulListaAmigos.innerHTML += `<li>${nome}</li>`; // Usa crase para interpolação
    inputAmigo.value = ""; // Limpa o campo de entrada após adicionar
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("É necessário pelo menos 2 participantes para realizar o sorteio!");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];

    // Exibe o resultado na interface
    ulResultado.innerHTML = `<li>O Amigo Secreto é: ${amigoSecreto}</li>`;
}
