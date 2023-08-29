function toggleChatWindow() {
    const chatWindow = document.getElementById("chatbot");
    chatWindow.classList.toggle("hidden");
    
    const logo = document.getElementById("logo");
    logo.classList.toggle("logo-hidden");
}

function updateSendButtonState(event) {
    const userInput = document.getElementById("userInput");
    const sendButton = document.querySelector(".send-button");

    if (userInput.value.trim() !== "") {
        sendButton.classList.add("active");
        userInput.classList.add("expanded");
    } else {
        sendButton.classList.remove("active");
        userInput.classList.remove("expanded");
    }

    if (event) {
        // Check if Ctrl (or Shift) key is pressed along with Enter
        if ((event.ctrlKey || event.shiftKey) && event.key === "Enter") {
            userInput.classList.add("expanded");
        }
    }
}

// Attach the updated event listener to the textarea
const userInput = document.getElementById("userInput");
userInput.addEventListener("input", updateSendButtonState);
userInput.addEventListener("keydown", updateSendButtonState);

function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();

    if (userInput !== "") {
        const chatMessages = document.getElementById("chatMessages");

        // Add user message to chat messages
        const userMessageContainer = document.createElement("div");
        userMessageContainer.className = "message user-message";

        const userIcon = document.createElement("img");
        userIcon.src = "../images/person-black.svg"; // Replace with the path to your user icon
        userIcon.className = "icon";
        userMessageContainer.appendChild(userIcon);

        const userMessage = document.createElement("span");
        userMessage.className = "message-text";
        userMessage.textContent = userInput;
        userMessageContainer.appendChild(userMessage);

        chatMessages.appendChild(userMessageContainer);

        // Scroll to the bottom of the chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Make API call
        const apiUrl = "http://apps.apisec.ai:8000/chat";
        const requestBody = {
            question: userInput
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(data => {
            // Add bot response to chat messages
            const botResponseContainer = document.createElement("div");
            botResponseContainer.className = "message bot-response";

            const botIcon = document.createElement("img");
            botIcon.src = "../images/favicon-32x32.png"; // Replace with the path to your bot icon
            botIcon.className = "icon";
            botResponseContainer.appendChild(botIcon);

            const botResponse = document.createElement("span");
            botResponse.className = "message-text";
            botResponse.textContent = data.Response; // Make sure this is the correct key in the API response
            botResponseContainer.appendChild(botResponse);

            chatMessages.appendChild(botResponseContainer);

            // Scroll to the bottom of the chat messages
            chatMessages.scrollTop = chatMessages.scrollHeight;
        })
        .catch(error => {
            console.error("Error fetching response:", error);
        });

        // Clear user input
        document.getElementById("userInput").value = "";

        // Re-disable the send button
        const sendButton = document.querySelector(".send-button");
        sendButton.classList.remove("active");
    }
}

function closeChatbot() {
    const chatbotContainer = document.getElementById("chatbot");
    chatbotContainer.classList.add("hidden");

    // Clear chat messages
    const chatMessages = document.getElementById("chatMessages");
    chatMessages.innerHTML = '';

    // Show the logo
    const logo = document.getElementById("logo");
    logo.classList.remove("logo-hidden");
}




function minimizeChatbot() {
    const chatbotContainer = document.getElementById("chatbot");
    chatbotContainer.classList.add("hidden");
    // Show the logo
    const logo = document.getElementById("logo");
    logo.classList.remove("logo-hidden");
}
