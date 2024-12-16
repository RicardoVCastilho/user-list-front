document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem! Por favor, verifique e tente novamente.');
        return;
    }

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    if (!email || !password || !name || !confirmPassword) {
        alert('É necessário preencher todos os campos!');
        return;
    }

    const registerData = {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmPassword 
    };

    fetch('https://api-login-z19r.onrender.com/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.msg);
            });
        }
        return response.json();
    })
    .then(data => {
        alert('Cadastro realizado com sucesso! Agora você pode fazer o login.');
        
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro: ' + error.message); 
    });
});
