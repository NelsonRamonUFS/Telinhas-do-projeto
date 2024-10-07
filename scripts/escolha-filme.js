// Seleciona todos os botões "Escolher Filme"
const escolherBotoes = document.querySelectorAll(".btn-escolher");

// Adiciona um evento de clique a cada botão
escolherBotoes.forEach(botao => {
    botao.addEventListener("click", () => {
        console.log("Filme escolhido! Redirecionando para a tela de escolha de sessão...");
        // Redirecionar para a página de escolha de sessão (exemplo)
        window.location.href = "escolha-sessao.html"; // Atualize o caminho conforme necessário
    });
});
