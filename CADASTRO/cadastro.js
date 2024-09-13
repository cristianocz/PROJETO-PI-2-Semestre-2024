document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cliente = {
        nomeCliente: document.getElementById('nomeCliente').value,
        endereco: document.getElementById('endereco').value,
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        defeito: document.getElementById('defeito').value,
        valor: document.getElementById('valor').value,
        prazo: document.getElementById('prazo').value,
    };

    fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => response.json())
    .then(data => {
        if (data.numeroPedido) {
            document.getElementById('cadastroStatus').innerHTML = `
                <p>Cadastro realizado com sucesso!</p>
                <p>Número do Pedido: ${data.numeroPedido}</p>
            `;
        } else {
            document.getElementById('cadastroStatus').innerHTML = `
                <p>Erro ao realizar o cadastro.</p>
            `;
        }
    })
    .catch(error => {
        document.getElementById('cadastroStatus').innerHTML = `
            <p>Ocorreu um erro ao cadastrar o cliente. Tente novamente mais tarde.</p>
        `;
        console.error('Erro:', error);
    });
});
