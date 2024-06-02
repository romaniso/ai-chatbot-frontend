// encapsulate inside a function to avoid shadowing and overwriting
const chatbotActivate = () => {
  console.log("CHAT ACTIVATED");
  const chatInput = document.querySelector(".chat-input textarea");
  const sendChatBtn = document.querySelector("#send-btn");
  const chatBox = document.querySelector(".chatbox");
  const chatToggle = document.querySelector(".chatbot-toggle");
  const chatbotCloseBtn = document.querySelector("#chatbot-close-btn");

  let userMessage;
  const API_KEY = "example-of-apikey-from-openai";
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

    //@TODO: replace with res await
    setTimeout(() => {
      const incomingChatLi = createChatLi("Loading...", "incoming");
      chatBox.appendChild(incomingChatLi);
      chatBox.scrollTo(0, chatBox.scrollHeight);
      generateResponse(incomingChatLi, userMessage);
    }, 600);
  };

  //@FIXME: should be handled by backend app
  const generateResponse = (li, message) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = li.querySelector("p");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    };

    // Send POST request to API
    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        messageElement.textContent = data.choices[0].message.content;
      })
      .catch((err) => {
        messageElement.classList.add("error");
        messageElement.textContent = "Something went wrong. Try again later.";
      })
      .finally(() => {
        chatBox.scrollTo(0, chatBox.scrollHeight);
      });
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
};

chatbotActivate();
