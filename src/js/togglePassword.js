// Lógica para o campo "password" no formulário de login
function toggleLoginPassword() {
    const loginPasswordInput = document.getElementById('login-password');
    const loginPasswordToggle = document.getElementById('toggle-login-password');

    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text'; // Mostra a senha
        loginPasswordToggle.classList.remove('fa-eye'); // Altera o ícone
        loginPasswordToggle.classList.add('fa-eye-slash');
    } else {
        loginPasswordInput.type = 'password'; // Oculta a senha
        loginPasswordToggle.classList.remove('fa-eye-slash'); // Altera o ícone
        loginPasswordToggle.classList.add('fa-eye');
    }
}

// Lógica para o campo "password" no formulário de registro
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Mostra a senha
        passwordToggle.classList.remove('fa-eye'); // Altera o ícone
        passwordToggle.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password'; // Oculta a senha
        passwordToggle.classList.remove('fa-eye-slash'); // Altera o ícone
        passwordToggle.classList.add('fa-eye');
    }
}

// Lógica para o campo "confirm-password" no formulário de registro
function toggleConfirmPassword() {
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordToggle = document.getElementById('toggle-confirm-password');

    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text'; // Mostra a senha
        confirmPasswordToggle.classList.remove('fa-eye'); // Altera o ícone
        confirmPasswordToggle.classList.add('fa-eye-slash');
    } else {
        confirmPasswordInput.type = 'password'; // Oculta a senha
        confirmPasswordToggle.classList.remove('fa-eye-slash'); // Altera o ícone
        confirmPasswordToggle.classList.add('fa-eye');
    }
}
