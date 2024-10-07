// Seleciona o container de poltronas e o botão de confirmar
const seatsContainer = document.querySelector('.seats-container');
const confirmButton = document.getElementById('confirmar-poltrona');

let selectedSeat = null; // Para armazenar a poltrona escolhida

// Gera 100 poltronas
for (let i = 1; i <= 96; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = i;

    // Adiciona evento de clique
    seat.addEventListener('click', () => {
        // Se a poltrona já estiver ocupada, não faz nada
        if (seat.classList.contains('taken')) {
            return;
        }

        // Remove seleção da poltrona anterior
        if (selectedSeat) {
            selectedSeat.classList.remove('selected');
        }

        // Seleciona a nova poltrona
        selectedSeat = seat;
        selectedSeat.classList.add('selected');
        confirmButton.disabled = false; // Habilita o botão de confirmação
    });

    seatsContainer.appendChild(seat);
}

// Exemplo: marcar poltronas como ocupadas (pode ser carregado do banco de dados)
const takenSeats = [2, 5, 7, 15, 30, 35, 55, 70, 85, 90]; // Exemplos de poltronas ocupadas
takenSeats.forEach(index => {
    const seatToMark = seatsContainer.children[index - 1]; // -1 porque o índice é zero
    seatToMark.classList.add('taken');
    seatToMark.textContent = 'O'; // Para indicar que a poltrona está ocupada
});

// Ação do botão de confirmar poltrona
confirmButton.addEventListener('click', () => {
    const selectedSeatNumber = selectedSeat ? selectedSeat.textContent : '';
    alert(`Poltrona ${selectedSeatNumber} selecionada!`);
    // Aqui você pode redirecionar para a próxima tela ou realizar outra ação
});
