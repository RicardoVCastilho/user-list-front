    // Função do menu responsivo
    function showMenu() {
        const hamburgerMenu = document.querySelector('.hamburguer-menu');
        const icon = document.querySelector('.icon');

        // Alterna a classe 'open' e altera o ícone correspondente
        const isOpen = hamburgerMenu.classList.toggle('open');
        icon.src = isOpen 
            ? "./src/images/close_white_36dp.svg" 
            : "./src/images/menu_white_36dp.svg";
    }

// Função da consulta de usuários na API
const fetchUsers = async () => {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('Token não encontrado. Faça login novamente.');
        }

        const response = await fetch('https://api-login-z19r.onrender.com/auth/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Falha ao carregar os dados');
        }

        const users = await response.json();
        const userListBody = document.getElementById('user-list-body');
        userListBody.innerHTML = ''; 

        users.forEach((user, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${index + 1}</td> <!-- Exibe um número sequencial (1, 2, 3, ...) -->
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn-edit" title="Editar" data-id="${user._id}">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="btn-delete" title="Excluir" data-id="${user._id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
                <td>${user.role}</td>
            `;
            
            userListBody.appendChild(row);
        });

        const editButtons = document.querySelectorAll('.btn-edit');
        const deleteButtons = document.querySelectorAll('.btn-delete');

        editButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const userId = event.target.closest('button').getAttribute('data-id');
                console.log('Editar usuário com ID:', userId);
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const userId = event.target.closest('button').getAttribute('data-id');
                console.log('Excluir usuário com ID:', userId);
            });
        });

    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        alert('Erro ao carregar a lista de usuários. Verifique sua conexão ou faça login novamente.');
    }
};

window.onload = fetchUsers;


    const deleteUser = async (userId) => {
        const token = localStorage.getItem('token');
    
        if (!token) {
            alert('Você precisa estar logado para excluir um usuário.');
            return;
        }
    
        try {
            const response = await fetch(`https://api-login-z19r.onrender.com/auth/user/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            const responseText = await response.text();
            console.log('Resposta da API:', responseText);
    
            // Verifica se a resposta não é ok (status code diferente de 2xx)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Erro ao excluir o usuário.');
            }
    
            alert('Usuário excluído com sucesso!');
            fetchUsers(); // Atualiza a lista de usuários após a exclusão
        } catch (error) {
            console.error('Erro ao excluir o usuário:', error);
            alert('Erro ao excluir o usuário: ' + error.message);
        }
    };    

    const setupDeleteButtons = () => {
        const deleteButtons = document.querySelectorAll('.btn-delete');

        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const userId = event.target.closest('button').getAttribute('data-id');
                const confirmation = confirm('Tem certeza que deseja excluir este usuário?');

                if (confirmation) {
                    deleteUser(userId);
                }
            });
        });
    };