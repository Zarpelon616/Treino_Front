const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeColorBtn = document.getElementById('changeColorBtn');

addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    if (taskText) {
        addTask(taskText);
        newTaskInput.value = ''; // Limpar o campo após adicionar a tarefa
    } else {
        alert("Digite uma tarefa!");
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');

    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Adicionar funcionalidade de marcar como feito ao clicar
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('done');
    });

    // Botão de Editar
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.addEventListener('click', () => {
        const newText = prompt("Edite a tarefa:", taskSpan.textContent);
        if (newText) {
            taskSpan.textContent = newText;
        }
    });

    // Botão de Remover
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        updateTaskNumbers(); // Atualizar numeração após remoção
    });

    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    
    updateTaskNumbers(); // Atualiza a numeração ao adicionar uma nova tarefa
}

function updateTaskNumbers() {
    const tasks = taskList.children;
    for (let i = 0; i < tasks.length; i++) {
        const taskSpan = tasks[i].querySelector('span');
        taskSpan.textContent = `${i + 1}. ${taskSpan.textContent.replace(/^\d+\.\s*/, '')}`;
    }
}

// Função para alterar a cor do fundo
changeColorBtn.addEventListener('click', () => {
    // Verifica se a cor de fundo é azul
    if (document.body.style.backgroundColor === 'rgb(0, 0, 255)') {
        // Se for azul, muda para a cor original (ou nenhuma cor)
        document.body.style.backgroundColor = '';
    } else {
        // Se não for azul, gera uma nova cor aleatória
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        while (randomColor.length < 6) {
            randomColor = "0" + randomColor; // Preenche com zeros à esquerda, se necessário
        }
        randomColor = `#${randomColor}`;
        document.body.style.backgroundColor = randomColor;
    }
    console.log(`Cor atual: ${document.body.style.backgroundColor}`); // Verifique no console a cor gerada
});
