// encapsulate inside a function to avoid shadowing and overwriting
const chatbotActivate = () => {
  console.log("CHAT ACTIVATED");
  const chatInput = document.querySelector(".chat-input textarea");
  const sendChatBtn = document.querySelector("#send-btn");
  const chatBox = document.querySelector(".chatbox");
  const chatToggle = document.querySelector(".chatbot-toggle");
  const chatbotCloseBtn = document.querySelector("#chatbot-close-btn");

  let userMessage;
  const inputInitHeight = chatInput.scrollHeight;

  const createRequestTime = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0"); // Ensure day is two digits
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()]; // Get the abbreviated month name
    const hours = String(date.getHours()).padStart(2, "0"); // Ensure hours are two digits
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Ensure minutes are two digits

    const chatLi = document.createElement("li");
    chatLi.classList.add("chat-time");
    let chatContent = `<p>${day} ${month} ${hours}:${minutes}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
  };

  const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = `<p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
  };

  //Handlers
  const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatBox.appendChild(createRequestTime());
    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
    chatBox.scrollTo(0, chatBox.scrollHeight);

    const incomingChatLi = createChatLi("Loading...", "incoming");
    chatBox.appendChild(incomingChatLi);
    chatBox.scrollTo(0, chatBox.scrollHeight);
    generateResponse(incomingChatLi, userMessage);
  };

  //@FIXME: should be handled by backend app
  const generateResponse = (li, message) => {
    const API_URL = "https://ai-chatbot-tyxf.onrender.com" + "/api/chat"; //@TODO: replace with real one
    const messageElement = li.querySelector("p");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    };

    // Send POST request to API
    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        messageElement.textContent = data.message;
      })
      .catch((err) => {
        messageElement.classList.add("error");
        messageElement.textContent = "Something went wrong. Try again later.";
      })
      .finally(() => {
        chatBox.scrollTo(0, chatBox.scrollHeight);
      });
  };
  const handleClickOutside = (e) => {
    if (!document.querySelector(".show-chatbot")) return;
    if (!document.querySelector(".show-chatbot").contains(e.target)) {
      console.log("OUTSIDE");
      document.querySelector("#chatBot").classList.remove("show-chatbot");
    }
  };

  //Listeners
  chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
  });
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      {
        e.preventDefault();
        handleChat();
      }
    }
  });
  sendChatBtn.addEventListener("click", handleChat);
  chatToggle.addEventListener("click", () =>
    document.querySelector("#chatBot").classList.toggle("show-chatbot")
  );
  chatbotCloseBtn.addEventListener("click", () =>
    document.querySelector("#chatBot").classList.remove("show-chatbot")
  );
  document.addEventListener("click", (e) => handleClickOutside(e));
};

chatbotActivate();
