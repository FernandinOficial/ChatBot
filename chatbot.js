const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Respostas predefinidas do chatbot
const responses = {
  "oi": "Olá! Como posso te ajudar?",
  "qual é o seu nome?": "Eu sou um chatbot.",
  "adeus": "Tchau! Tenha um ótimo dia!",
  "default": "Desculpe, não entendi. Pode repetir?"
};

// Função para lidar com a entrada do usuário
function getResponse(userInput) {
  const input = userInput.toLowerCase();
  return responses[input] || responses["default"];
}

// Iniciar a conversa
console.log("Olá! Eu sou um chatbot. Como posso te ajudar?");

rl.on('line', (input) => {
  const response = getResponse(input);
  console.log(response);

  if (input.toLowerCase() === "adeus") {
    rl.close();
  }
});
