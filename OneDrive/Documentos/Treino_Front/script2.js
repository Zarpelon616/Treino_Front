//Selecionando os Elementos
const textElement = document.getElementById('text');
const inputElement = document.getElementById('inputText');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeColorBtn = document.getElementById('changeColorBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

//Função para alterar o texto
changeTextBtn.addEventListener('click', () => {
    const userInput = inputElement.value;
    if (userInput) {
        textElement.textContent = userInput;
        inputElement.value = '';
    } else {
        alert("Por favor, digite algo para alterar o texto!");
    }
});

// Função para alterar a cor do fundo
changeColorBtn.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 6) {
      randomColor = "0" + randomColor; // Preenche com zeros à esquerda, se necessário
    }
    randomColor = `#${randomColor}`;
    document.body.style.backgroundColor = randomColor;
    console.log(`Cor gerada: ${randomColor}`); // Verifique no console a cor gerada
});

addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    if (taskText) {
        //Criar um novo item da Lista
        const li = document.createElement('li');
        li.textContent = taskText;

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