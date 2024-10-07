// Alterna entre o formulário de login e o de registro
document.getElementById('show-register').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').parentElement.classList.add('hidden');
    document.getElementById('register-container').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-container').classList.add('hidden');
    document.getElementById('login-form').parentElement.classList.remove('hidden');
});
