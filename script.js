/* A partir de um documento HTML básico com a sua estrutura correspondente. É-lhe pedido:
 1.
 2.
 3.
 Criar um programa que peça letras continuamente até que se prima o botão "cancelar".
 O programa deve exibir todas as letras concatenadas no final.
 Se for introduzido um caracter que não seja uma letra, o programa emitirá um alert() indicando que apenas letras podem ser 
introduzidas e continuará a ser executado. */

var letters = [];
while (true) {
  let str = prompt("Por favor, insira uma informação:");
  if (str === null) {
    //Verifica primeiramente se o prompt teve valor null ou foi cancelado
    document.getElementById("message").textContent = letters.join(", "); //Utilizei o document.getElementbyId() com o .textContent e o método .join() para informar ao javascript que quero mudar o valor do elemento "IDexemplo" que será um conteudo de texto e inserir os dados do array em uma string e para deixar o valor mais legível, utilizei ", " (vírgula e espaço)
    break; // Sai do loop se o usuário cancelar o prompt
  }
  if (/^[a-zA-Z0-9\s]+$/.test(str)) {
    //como não foi cancelado, ele começa a verificar os caracteres inseridos e se condizer com a verificação
    letters.push(str); // Ele passa a ler essa linha de código e faz um "push" nos valores inseridos para a variavel "str" e armazena
  } else if (/^\d+$/.test(str)) {
    //aqui ele verifica se o valor do prompt foi inserido algo diferente de letras, como "números"
    alert("Isto não é uma letra!"); //caso tenha sido inserido números, ele cria um alerta com a frase indicada
  }
}
