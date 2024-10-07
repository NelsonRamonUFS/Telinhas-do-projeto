// Simulação de pedidos armazenados no localStorage
const pedidos = JSON.parse(localStorage.getItem('historicoPedidos')) || [];

window.onload = function() {
    const pedidosLista = document.getElementById('pedidos-lista');

    // Adiciona cada pedido à tabela
    pedidos.forEach((pedido, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${pedido.filme}</td>
            <td>${pedido.sessao}</td>
            <td>${pedido.assentos.join(', ')}</td>
            <td>${pedido.adicionais.join(', ')}</td>
        `;
        pedidosLista.appendChild(row);
    });

    document.getElementById('voltar').addEventListener('click', function() {
        window.location.href = 'caminho-para-a-tela-anterior.html'; // Altere para o caminho correto
    });
}
