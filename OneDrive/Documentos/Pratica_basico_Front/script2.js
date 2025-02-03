const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    if (taskText) {
        addTask(taskText);
        newTaskInput.value = ''; // Limpar o campo após adicionar a tarefa
    } else {
        alert("Digite uma tarefa!");
    }
});

addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    if (taskText) {
        // Contar quantos itens já existem na lista
        const taskCount = taskList.children.length + 1;

        // Criar um novo item da lista
        const li = document.createElement('li');
        li.textContent = `${taskCount}. ${taskText}`;

        //Adiciona a opção de marcar como feito
        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        //Adicionar o item à lista
        taskList.appendChild(li);

        //Limpar o campo de entrada
        newTaskInput.value = '';
    }   else {
        alert("Digite uma tarefa!");
    }
});

//Essa função diferente da pagina Pratica, tem um acrecimo que enumera os itens