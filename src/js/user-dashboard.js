// Função para pegar a lista de usuários e exibir na tabela
async function fetchUsers() {
    try {
        // Enviar requisição GET para a API
        const response = await fetch('https://api-login-z19r.onrender.com/auth/users');

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }

        // Converter a resposta em formato JSON
        const users = await response.json();

        // Obter a referência da tabela no HTML
        const tableBody = document.querySelector('#users-table tbody');

        // Limpar qualquer dado anterior
        tableBody.innerHTML = '';

        // Iterar sobre a lista de usuários e adicionar na tabela
        users.forEach(user => {
            const row = document.createElement('tr');

            // Criar células com dados do usuário
            const idCell = document.createElement('td');
            idCell.textContent = user._id; // Supondo que o campo id é '_id'
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = user.name; // Supondo que o campo de nome é 'name'
            row.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email; // Supondo que o campo de email é 'email'
            row.appendChild(emailCell);

            // Adicionar a linha à tabela
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
}

// Chamar a função para carregar os usuários quando a página carregar
window.onload = fetchUsers;
