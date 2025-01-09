 // Função para criar uma tarefa
 function criaTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto === '') return; // Não adiciona tarefa vazia

    const listaTarefas = document.getElementById('quadro_resultado');
    const tarefaElemento = document.createElement('li');
    tarefaElemento.classList.add('separate-elementos');
    
    // Adiciona o texto da tarefa
    tarefaElemento.innerHTML = `
        <p>${tarefaTexto}</p>
        <div class="div-editar-deletar">
            <button onclick="editarTarefa(this)">
                <img src="../imgs/editar.png" class="img-editar" title="Editar" alt="Editar">
            </button>
            <button onclick="deletarTarefa(this)">
                <img src="../imgs/excluir.png" class="img-excluir" title="Apagar" alt="Excluir">
            </button>
        </div>
    `;

    listaTarefas.appendChild(tarefaElemento);
    tarefaInput.value = ''; // Limpa o campo de entrada
}

// Função para editar uma tarefa
function editarTarefa(button) {
    const tarefaElemento = button.closest('li');
    const tarefaTexto = tarefaElemento.querySelector('p');

    const novoTexto = prompt('Editar Tarefa:', tarefaTexto.textContent);
    if (novoTexto !== null && novoTexto.trim() !== '') {
        tarefaTexto.textContent = novoTexto;
    }
}

// Função para deletar uma tarefa
function deletarTarefa(button) {
    const tarefaElemento = button.closest('li');
    tarefaElemento.remove();
}