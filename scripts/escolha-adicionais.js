// Seleciona o botão de finalizar pedido
const finalizarButton = document.getElementById('finalizar-pedido');

// Ação do botão de finalizar pedido
finalizarButton.addEventListener('click', () => {
    const adicionaisSelecionados = Array.from(document.querySelectorAll('.adicional:checked'))
        .map(input => input.parentElement.textContent.trim());

    if (adicionaisSelecionados.length === 0) {
        alert('Você não selecionou nenhum adicional.');
    } else {
        alert(`Você selecionou os seguintes adicionais: ${adicionaisSelecionados.join(', ')}`);
        // Aqui você pode redirecionar para a próxima tela ou realizar outra ação
    }
});
