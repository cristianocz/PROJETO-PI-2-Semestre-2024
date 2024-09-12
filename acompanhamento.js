// Simulação de atualização do status do conserto
function atualizarStatus() {
    // Exemplo de consulta ao backend para obter o status
    const statusConserto = document.getElementById('statusConserto');
    const prazoEntrega = document.getElementById('prazoEntrega');

    // Simulando uma resposta do backend
    const novoStatus = "Conserto finalizado"; // Exemplo de status atualizado
    const novaDataEntrega = "2024-09-20"; // Exemplo de data no formato yyyy-mm-dd

    // Formatar a data para o formato dd/mm/yyyy
    const dataObj = new Date(novaDataEntrega);
    const dia = String(dataObj.getDate()).padStart(2, '0'); // Pega o dia e formata com dois dígitos
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // O mês é 0-indexado, então somamos 1
    const ano = dataObj.getFullYear();

    // Atualiza os campos da página
    statusConserto.textContent = novoStatus;
    prazoEntrega.textContent = `${dia}/${mes}/${ano}`; // Exibe a data no formato dd/mm/yyyy

    // Exibe mensagem de atualização
    const statusAtualizacao = document.getElementById('statusAtualizacao');
    statusAtualizacao.textContent = "Status atualizado com sucesso!";
}
