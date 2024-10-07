// Seleciona todos os botões "Escolher Sessão"
const escolherSessaoBotoes = document.querySelectorAll(".btn-escolher-sessao");

// Adiciona um evento de clique a cada botão
escolherSessaoBotoes.forEach(botao => {
    botao.addEventListener("click", () => {
        console.log("Sessão escolhida! Redirecionando para a tela de escolha de poltrona...");
        // Redirecionar para a página de escolha de poltrona (exemplo)
        window.location.href = "escolha-poltrona.html"; // Atualize o caminho conforme necessário
    });
});
