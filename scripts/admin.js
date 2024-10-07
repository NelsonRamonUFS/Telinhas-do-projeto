document.getElementById('add-movie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value;

    console.log('Novo Filme Adicionado:', { title, description, duration, genre });

    // Aqui você pode adicionar a lógica para enviar esses dados ao backend
    // Por exemplo, utilizando fetch para uma API
});

const movies = [
    { id: 1, title: 'Filme 1' },
    { id: 2, title: 'Filme 2' },
    { id: 3, title: 'Filme 3' },
];

const movieSelect = document.getElementById('movie-select');

// Preencher o select com os filmes
movies.forEach(movie => {
    const option = document.createElement('option');
    option.value = movie.id;
    option.textContent = movie.title;
    movieSelect.appendChild(option);
});

document.getElementById('remove-movie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const movieId = movieSelect.value;

    // Aqui você pode adicionar a lógica para remover o filme do backend
    console.log('Filme Removido:', movieId);

    // Resetar o select após a remoção
    movieSelect.value = "";
});
