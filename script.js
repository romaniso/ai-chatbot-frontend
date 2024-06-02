// encapsulate inside a function to avoid shadowing and overwriting
const chatbotActivate = () => {
  //console.log("CHAT ACTIVATED");
  const chatInput = document.querySelector(".chat-input textarea");
  const sendChatBtn = document.querySelector("#send-btn");
  const chatBox = document.querySelector(".chatbox");

  let userMessage;

  const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
  };

  //Handlers
  const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if (!userMessage) return;

    chatBox.appendChild(createChatLi(userMessage, "outgoing"));

    //@TODO: replace with res await
    setTimeout(() => {
      chatBox.appendChild(createChatLi("Loading...", "incoming"));
    }, 600);
  };

  //Listeners
  sendChatBtn.addEventListener("click", handleChat);
};

chatbotActivate();
