document.getElementById('forgot-password-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    if(!email) {
        alert('Por favor, insira seu e-mail cadastrado.');
        return
    }

    const data = { email };

    try {
        const response = await fetch('https://api-login-z19r.onrender.com/forgot-password', {
            method: 'POST',
            headerd: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById('response-message').innerText = result.msg || 'Verifique seu email para obter o link de recuperação.';
    } catch(error) {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar o link de recuperação.');
    }
});