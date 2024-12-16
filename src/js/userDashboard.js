async function fetchUsers() {
    try {
        const response = await fetch('https://api-login-z19r.onrender.com/auth/users');
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }
        const users = await response.json();
        const tableBody = document.querySelector('#users-table tbody');
        tableBody.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            idCell.textContent = user._id; 
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = user.name; 
            row.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email; 
            row.appendChild(emailCell);
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
}

window.onload = fetchUsers;
