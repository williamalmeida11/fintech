function adicionarCliente() {
    let nome = prompt("Digite o nome do cliente: ");
    if (nome) {
        fila.push(nome);
    }
}
function atenderCliente() {
    if (fila.length > 0) {
        let nome = fila.shift();
        alert("Cliente: " + nome  +" atendido!");
    }
    else {
        alert("Fila vazia");
    }
}