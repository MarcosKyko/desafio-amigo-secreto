//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Bloco de Variáveis.
let amigos = [];



// Bloco de Funções.

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert("Digite o nome de um amigo!");
        inputAmigo.focus();
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert(`O nome '${nomeAmigo}' já está na lista!`);
        inputAmigo.value = "";
        return;
      }
    
    amigos.push(nomeAmigo);
    amigos.sort();
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
    console.log(amigos);
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
        
    }
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("Nenhum amigo foi adicionado.");
        return;
    }
    if(amigos.length < 3) {
        alert("São necessários pelo menos 3 participantes!!");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}!`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
}

// Bloco de Chamadas.
