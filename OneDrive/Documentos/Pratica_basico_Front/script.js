//Selecionando os Elementos
const textElement = document.getElementById('text');
const inputElement = document.getElementById('inputText');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeColorBtn = document.getElementById('changeColorBtn');


// Função para alternar o texto
changeTextBtn.addEventListener('click', () => {
    const userInput = inputElement.value;
    // Verifica se o conteúdo de textElement é igual ao valor digitado
    if (userInput) {
        // Se tiver algo digitado, muda para o que foi digitado
        textElement.textContent = userInput;
    } else {
        // Se não tiver muda para "Texto Inicial"
        textElement.textContent = "Texto Inicial";
    }
});

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
