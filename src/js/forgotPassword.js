document.getElementById('forgot-password-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    if(!email) {
        alert('Por favor, insira seu e-mail cadastrado.');
        return
    }

    const data = { email };

    try {
        const response = await fetch('https://api-login-z19r.onrender.com/auth/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        const responseMessage = document.getElementById('response-message');
        if(response.ok) {
            responseMessage.innerText = result.msg || 'Senha alterada com sucesso.';
            responseMessage.style.color = 'green';
        } else {
            responseMessage.innerText = result.msg || 'Erro ao alterar a senha.';
            response.style.color = 'red';
        }
    } catch(error) {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar o link de recuperação.');
    }
});