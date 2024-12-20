const loadingOverlay = document.getElementById('loading');

function showLoading() {
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    loadingOverlay.style.display = 'none';
}

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('É necessário preencher email e senha!');
        return;
    }

    const loginData = {
        email: email,
        password: password
    };

    showLoading();

    fetch('https://api-login-z19r.onrender.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
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
        if (data.token) {
            localStorage.setItem('token', data.token);
            console.log('Token salvo:', data.token);
        } else {
            throw new Error('Token não retornado pela API');
        }

        window.location.href = 'user-dashboard.html';
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro: ' + error.message); 
    })
    .finally(() => {
        hideLoading();
    });
});
