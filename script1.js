document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const numeroPedido = document.getElementById('numeroPedido').value;
    
    // Simulação de consulta
    if (numeroPedido === "12345") {
        document.getElementById('statusOutput').innerHTML = `
            <p>Status: Em conserto</p>
            <p>Previsão de Retirada: 25/08/2024</p>
        `;
    } else {
        document.getElementById('statusOutput').innerHTML = `
            <p>Número do pedido não encontrado</p>
        `;
    }
});
