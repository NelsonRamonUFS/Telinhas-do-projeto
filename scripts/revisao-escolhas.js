// Exemplo de como você pode passar dados entre páginas usando localStorage
window.onload = function() {
    const filmeEscolhido = localStorage.getItem('filmeEscolhido') || 'Nenhum filme selecionado';
    const sessaoEscolhida = localStorage.getItem('sessaoEscolhida') || 'Nenhuma sessão selecionada';
    const assentoEscolhido = localStorage.getItem('assentoEscolhido') || 'Nenhum assento selecionado';
    const adicionaisEscolhidos = localStorage.getItem('adicionaisEscolhidos') || 'Nenhum adicional selecionado';

    document.getElementById('filme-escolhido').textContent = filmeEscolhido;
    document.getElementById('sessao-escolhida').textContent = sessaoEscolhida;
    document.getElementById('assento-escolhido').textContent = assentoEscolhido;
    document.getElementById('adicionais-escolhidos').textContent = adicionaisEscolhidos;
    
    document.getElementById('finalizar-pedido').addEventListener('click', function() {
        // Aqui você pode implementar a lógica para finalizar o pedido
        alert('Pedido finalizado com sucesso!');
    });
    
    document.getElementById('editar-escolhas').addEventListener('click', function() {
        // Redireciona para a página anterior ou para a tela de escolhas relevantes
        window.location.href = 'caminho-para-a-tela-de-escolha.html'; // Altere para o caminho correto
    });

    // Nova lógica para o botão de cancelar pedido
    document.getElementById('cancelar-pedido').addEventListener('click', function() {
        if (confirm("Tem certeza que deseja cancelar o pedido?")) {
            // Redireciona para a tela inicial ou a tela de escolha
            window.location.href = 'caminho-para-a-tela-inicial.html'; // Altere para o caminho correto
        }
    });
}
