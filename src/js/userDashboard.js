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
            const response = await fetch('https://api-login-z19r.onrender.com/auth/users');
            
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
        }
    };

    window.onload = fetchUsers;