// encapsulate inside a function to avoid shadowing and overwriting
const main = () => {
  //gather function
  chatbotDOM();
  importGoogleFonts();
  chatbotStyles();
  chatbotJS();
  console.log("CHATBOT ACTIVATED");
};
const chatbotDOM = () => {
  // Create show-chatbot div
  const showChatbotDiv = document.createElement("div");
  showChatbotDiv.classList.add("show-chatbot");
  showChatbotDiv.id = "chatBot";

  // Create chatbot-toggle button
  const chatbotToggleBtn = document.createElement("button");
  chatbotToggleBtn.classList.add("chatbot-toggle", "glass-bg");

  // Create mode_comment span
  const modeCommentSpan = document.createElement("span");
  modeCommentSpan.classList.add("material-symbols-outlined");
  modeCommentSpan.textContent = "mode_comment";
  chatbotToggleBtn.appendChild(modeCommentSpan);

  // Create close span
  const closeSpan = document.createElement("span");
  closeSpan.classList.add("material-symbols-outlined");
  closeSpan.textContent = "close";
  chatbotToggleBtn.appendChild(closeSpan);

  // Create chatbot div
  const chatbotDiv = document.createElement("div");
  chatbotDiv.classList.add("chatbot", "glass-bg");

  // Create header
  const header = document.createElement("header");

  // Create avatar div
  const avatarDiv = document.createElement("div");
  avatarDiv.classList.add("avatar");

  // Create img
  const img = document.createElement("img");
  img.src = "https://avatar.iran.liara.run/public/23";
  img.alt = "chat avatar";
  avatarDiv.appendChild(img);

  // Create header-body div
  const headerBodyDiv = document.createElement("div");
  headerBodyDiv.classList.add("header-body");

  // Create h2
  const h2 = document.createElement("h2");
  h2.textContent = "Chatbot";

  // Create p
  const p = document.createElement("p");
  p.textContent = "Online with AI";
  headerBodyDiv.appendChild(h2);
  headerBodyDiv.appendChild(p);

  // Create span for close button
  const closeButtonSpan = document.createElement("span");
  closeButtonSpan.id = "chatbot-close-btn";
  closeButtonSpan.classList.add("material-symbols-outlined");
  closeButtonSpan.textContent = "close";

  // Append elements to header
  header.appendChild(avatarDiv);
  header.appendChild(headerBodyDiv);
  header.appendChild(closeButtonSpan);

  // Create ul for chatbox
  const chatboxUl = document.createElement("ul");
  chatboxUl.classList.add("chatbox");

  // Create li for incoming chat
  const incomingLi = document.createElement("li");
  incomingLi.classList.add("chat", "incoming");
  const incomingP = document.createElement("p");
  incomingP.innerHTML = "Hi there! <br />How can I help you today?";
  incomingLi.appendChild(incomingP);
  chatboxUl.appendChild(incomingLi);

  // Create div for chat input
  const chatInputDiv = document.createElement("div");
  chatInputDiv.classList.add("chat-input");
  const textarea = document.createElement("textarea");
  textarea.placeholder = "Enter a message...";
  textarea.required = true;
  const sendBtnSpan = document.createElement("span");
  sendBtnSpan.id = "send-btn";
  sendBtnSpan.classList.add("material-symbols-outlined");
  sendBtnSpan.textContent = "send";
  chatInputDiv.appendChild(textarea);
  chatInputDiv.appendChild(sendBtnSpan);

  // Append elements to chatbot div
  chatbotDiv.appendChild(header);
  chatbotDiv.appendChild(chatboxUl);
  chatbotDiv.appendChild(chatInputDiv);

  // Append elements to show-chatbot div
  showChatbotDiv.appendChild(chatbotToggleBtn);
  showChatbotDiv.appendChild(chatbotDiv);

  // Append show-chatbot div to body
  document.body.appendChild(showChatbotDiv);
  console.log("CHATBOT DOM GENERATED");
};
const chatbotStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600&display=swap");
    body, * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    .glass-bg {
      /* Glass effect */
      background: rgba(228, 228, 228, 0.8);
      box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.669);
    }

    .chatbot-toggle {
      position: fixed;
      right: 40px;
      bottom: 35px;
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50% 50% 0 50%;
      cursor: pointer;
      transition: background 0.2s ease, transform 1s ease;
    }
    .chatbot-toggle:hover {
      background: rgba(192, 195, 239, 0.897);
    }
    .show-chatbot .chatbot-toggle {
      transform: rotate(450deg);
    }
    .chatbot-toggle span {
      position: absolute;
    }

    .show-chatbot .chatbot-toggle span:first-child,
    .chatbot-toggle span:last-child {
      opacity: 0;
    }
    .show-chatbot .chatbot-toggle span:last-child {
      opacity: 1;
    }

    .chatbot {
      position: fixed;
      right: 40px;
      bottom: 100px;
      width: 420px;
      transform: scale(0.5);
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
      border-radius: 15px;
      overflow: hidden;
      transform-origin: bottom right;
      transition: transform 0.1s ease, opacity 0.1s ease;
    }
    .show-chatbot .chatbot {
      transform: scale(1);
      opacity: 1;
      pointer-events: auto;
    }
    .chatbot header {
      margin: 14px 12px;
      border-radius: 20px;
      color: black;
      background: rgb(224, 224, 224);
      background: linear-gradient(
        90deg,
        rgba(248, 253, 254, 0.708) 0%,
        rgba(255, 255, 255, 0.916) 35%
      );
      border: 1px solid white;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.062);
      padding: 12px;
      display: flex;
      gap: 16px;
      position: relative;
    }
    .chatbot header .avatar {
      max-width: 50px;
    }
    .chatbot header img {
      width: 100%;
    }

    .chatbot header h2 {
      font-size: 1.2rem;
      margin: 0 0 -12px 0;
    }
    .chatbot header span {
      position: absolute;
      right: 12px;
      top: 50%;
      cursor: pointer;
      transform: translateY(-50%);
      display: none;
    }
    .chatbot .header-body p {
      font-size: 0.8rem;
      position: relative;
      margin: 0 0 -12px 0;
    }
    .chatbot .header-body p::before {
      content: "•";
      vertical-align: middle;
      font-size: 2rem;
      color: #16a34a;
      padding-right: 5px;
    }
    .chatbot .chatbox {
      height: 510px;
      overflow-y: auto;
      padding: 15px 20px 100px;
    }
    .chatbox .chat {
      display: flex;
    }

    .chatbox .chat-time {
      text-align: center;
      list-style: none;
      margin: 20px 0 0 0;
    }

    .chatbox .incoming span {
      height: 32px;
      width: 32px;
    }
    .chatbox .outgoing {
      margin: 10px 0;
      justify-content: flex-end;
    }
    .chatbox .chat p {
      color: black;
      max-width: 75%;
      white-space: pre-wrap;
      padding: 12px 16px;
      border-radius: 22px 22px 0 22px;
      background: rgb(224, 224, 224);
      background: linear-gradient(
        90deg,
        rgba(131, 131, 131, 0.129) 0%,
        rgba(219, 218, 218, 0.443) 35%
      );
      border: 1px solid white;
    }
    .chatbox .chat p.error {
      background: #ff000043;
    }

    .chatbox .incoming p {
      color: black;
      background: rgb(224, 224, 224);
      background: linear-gradient(
        90deg,
        rgba(248, 253, 254, 0.708) 0%,
        rgba(255, 255, 255, 0.916) 35%
      );
      border-radius: 22px 22px 22px 0;
    }
    .chatbot .chat-input {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 14px 12px;
      border-radius: 20px;
      color: black;
      background: rgb(224, 224, 224);
      background: linear-gradient(
        90deg,
        rgba(248, 253, 254, 0.708) 0%,
        rgba(255, 255, 255, 0.916) 35%
      );
      border: 1px solid white;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.062);
      padding: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: box-shadow 0.2s ease;
    }
    .chat-input:hover {
      box-shadow: 0 0 8px 0 rgba(132, 91, 255, 0.7);
    }

    .chat-input textarea {
      border: none;
      outline: none;
            resize: none;
      max-height: 300px;
      font-size: 1rem;
      height: 30px;
      width: 100%;
    }

    .chat-input span {
      font-size: 1.8rem;
      height: 30px;
      cursor: pointer;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .chat-input textarea:valid ~ span {
      visibility: visible;
      opacity: 1;
    }

    @media (max-width: 490px) {
      .chatbot {
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
      .chatbot-toggle {
        visibility: visible;
      }
      .show-chatbot .chatbot-toggle {
        visibility: hidden;
      }
      .chatbot .chatbox {
        height: 90%;
      }
      .chatbot header span {
        display: block;
      }
    }
  `;
  document.head.appendChild(style);
  console.log("CHATBOT CSS GENERATED");
};

const chatbotJS = () => {
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

    //@TODO: replace with res await
    setTimeout(() => {
      const incomingChatLi = createChatLi("Loading...", "incoming");
      chatBox.appendChild(incomingChatLi);
      chatBox.scrollTo(0, chatBox.scrollHeight);
      generateResponse(incomingChatLi, userMessage);
    }, 600);
  };

  const generateResponse = (li, message) => {
    const API_URL = "https://ai-chatbot-tyxf.onrender.com" + "/api/chat";
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
  console.log("CHATBOT JS GENERATED");
};

const importGoogleFonts = () => {
  const linkElement = document.createElement("link");

  // Set the rel attribute to "stylesheet"
  linkElement.rel = "stylesheet";

  // Set the href attribute to the Google Fonts URL
  linkElement.href =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";

  // Append the link element to the head of the document
  document.head.appendChild(linkElement);
};

document.addEventListener("DOMContentLoaded", function () {
  main();
});
