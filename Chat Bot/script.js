// script.js

document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            // Procesa el mensaje del usuario y muestra la respuesta del chatbot
            const chatbotResponse = processUserMessage(userMessage);
            displayMessage(chatbotResponse, "bot");

            // Limpia el campo de entrada
            userInput.value = "";
        }
    });

    function processUserMessage(message) {
        // Define reglas predefinidas para detectar palabras clave
        const greetings = ["hola", "buenos días", "¿qué tal?", "que tal", "que tal?"];
        const farewells = ["adiós", "hasta luego", "adios"];

        // Comprueba si el mensaje contiene una palabra clave
        if (containsAny(message, greetings)) {
            return "¡Hola! ¿En qué puedo ayudarte?";
        } else if (containsAny(message, farewells)) {
            return "Hasta luego. Si tienes más preguntas, no dudes en volver.";
        } else {
            return "No entiendo tu pregunta. ¿Puedes ser más específico?";
        }
    }

    function containsAny(message, keywords) {
        return keywords.some(keyword => message.toLowerCase().includes(keyword));
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Desplázate hacia abajo para mostrar el mensaje más reciente
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
