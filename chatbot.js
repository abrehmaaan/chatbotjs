// CSS code wrapped in JavaScript template literals
const css = `
<style>
/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.info{
  text-align: center;
  list-style: none;
}
.chatbot-toggler {
  position: fixed;
  bottom: 30px;
  right: 35px;
  outline: none;
  border: none;
  height: 60px;
  width: 60px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #532634;
  transition: all 0.2s ease;
}
body.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}
.chatbot-toggler span {
  color: #fff;
  position: absolute;
}
.chatbot-toggler span:last-child,
body.show-chatbot .chatbot-toggler span:first-child  {
  opacity: 0;
}
body.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}
.chatbot {
  position: fixed;
  right: 35px;
  bottom: 90px;
  width: 350px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0,0,0,0.1),
              0 32px 64px -48px rgba(0,0,0,0.5);
  transition: all 0.1s ease;
}
body.show-chatbot .chatbot {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.chatbot header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: #532634;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.chatbot header span {
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
}
header h2 {
  font-size: 1.4rem;
}
.chatbot .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}
.chatbox .chat {
  display: flex;
  list-style: none;
}
.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}
.chatbox .incoming span {
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: default;
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  background: #532634;
  border-radius: 4px;
  margin: 0 10px 7px 0;
}
.chatbox .chat p {
  white-space: pre-wrap;
  padding: 12px 16px;
  border-radius: 10px 10px 0 10px;
  max-width: 75%;
  color: #fff;
  font-size: 0.95rem;
  background: #532634;
}
.chatbox .incoming p {
  border-radius: 10px 10px 10px 0;
}
.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}
.chatbox .incoming p {
  color: #000;
  background: #f2f2f2;
}
.chatbot .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
}
.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 15px 0;
  font-size: 0.95rem;
}
.chat-input span {
  align-self: flex-end;
  color: #532634;
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;
}
.chat-input textarea:valid ~ span {
  visibility: visible;
}

@media (max-width: 490px) {
  .chatbot-toggler {
    right: 20px;
    bottom: 20px;
  }
  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }
  .chatbot .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }
  .chatbot .chat-input {
    padding: 5px 15px;
  }
  .chatbot header span {
    display: block;
  }
}

.quick_reply{
  width: 100%;
  border-color: #532634;
  padding: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  font-style: italic;
}

.quick_reply:hover{
  background-color: #532634;
  color: white;
}
#icon-image{
  border-radius: 40px;
}
</style>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
    `;

// HTML code stored as a string
const html = `
    <button class="chatbot-toggler">
      <span class="material-symbols-rounded">chat</span>
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot">
      <header>
        <h3>Safe Harbor's Support Assistant</h3>
        <span class="close-btn material-symbols-outlined">close</span>
      </header>
      <ul class="chatbox">
        <li class="info">
          <img id="icon-image" src="https://www.alphastarshipping.com/wp-content/uploads/2019/02/customer-service.png" alt="Image" width="80" height="80">
        </li>
        <li class="info">
          <h4>Safe Harbor's Support Assistant</h4>
        </li>
        <li class="info">
          <p>I can help with info on our company and services!</p>
          <br>
        </li>
      </ul>
      <div class="chat-input">
        <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
        <span id="send-btn" class="material-symbols-rounded">send</span>
      </div>
    </div>
`;

// Append styles to head
// const style = document.createElement('style');
// style.textContent = css;
// document.head.appendChild(style);

// Append HTML to body
document.head.innerHTML = css + document.head.innerHTML;
document.body.innerHTML = document.body.innerHTML + html;


const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null;
let chatTranscript = null;
const inputInitHeight = chatInput.scrollHeight;
let threadId = null;
const MY_API_URL = "https://abrehmaaan.pythonanywhere.com";

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").innerHTML = message;
    return chatLi;
}

const generateResponse = (chatElement) => {
    const messageElement = chatElement.querySelector("p");
    const requestOptions = {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'mode': 'cors'
        },
        body: JSON.stringify({ thread_id: threadId, message: userMessage })
    }
    fetch(`${MY_API_URL}/chat`, requestOptions).then(res => res.json()).then(data => {
        messageElement.innerHTML = data.response;
        chatTranscript = chatTranscript +  `Lisa: ${data.response}\n\n`;

        const quickReplyButtons = document.querySelectorAll('.quick_reply');

        quickReplyButtons.forEach(button => {
            button.addEventListener('click', function() {
                userMessage = button.textContent;
                chatTranscript = chatTranscript +  `User: ${userMessage}\n\n`;

                chatbox.appendChild(createChatLi(userMessage, "outgoing"));
                chatbox.scrollTo(0, chatbox.scrollHeight);
                
                setTimeout(() => {
                    const incomingChatLi = createChatLi("Generating response...", "incoming");
                    chatbox.appendChild(incomingChatLi);
                    chatbox.scrollTo(0, chatbox.scrollHeight);
                    generateResponse(incomingChatLi);
                }, 600);
            });
        });

    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatTranscript = chatTranscript +  `User: ${userMessage}\n\n`;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        const incomingChatLi = createChatLi("Generating response...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("show-chatbot")) {
        body.classList.remove("show-chatbot");
        // document.querySelector('ul.chatbox').innerHTML = `<li class="info"><img src="image.png" alt="Image" width="80" height="80"></li><li class="info"><h3>Safe Harbor's Support Assistant</h3></li><li class="info"><p>I can help with info on our company and services!</p></li>`;
        // threadId = null;

    } else {
        body.classList.add("show-chatbot");
        if(threadId == null){
            fetch(`${MY_API_URL}/start`,{mode:'cors'})
                .then(response => response.json())
                .then(data => {
                    threadId = data.thread_id;
                    userMessage = "Hello";
                    // chatTranscript = chatTranscript +  `User: ${userMessage}\n\n`;
                    // chatbox.appendChild(createChatLi(userMessage, "outgoing"));
                    // chatbox.scrollTo(0, chatbox.scrollHeight);
                    
                    setTimeout(() => {
                        const incomingChatLi = createChatLi("Starting conversation...", "incoming");
                        chatbox.appendChild(incomingChatLi);
                        chatbox.scrollTo(0, chatbox.scrollHeight);
                        generateResponse(incomingChatLi);
                    }, 600);
                })
                .catch(error => console.error('Error:', error));
            }
    }
});
chatbotToggler.addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("show-chatbot")) {
        body.classList.remove("show-chatbot");
        // document.querySelector('ul.chatbox').innerHTML = `<li class="info"><img src="image.png" alt="Image" width="80" height="80"></li><li class="info"><h3>Safe Harbor's Support Assistant</h3></li><li class="info"><p>I can help with info on our company and services!</p></li>`;
        // threadId = null;

    } else {
        body.classList.add("show-chatbot");
        if(threadId == null){
          const reqOptions = {
            mode: 'cors'
          }
            fetch(`${MY_API_URL}/start`, reqOptions)
                .then(response => response.json())
                .then(data => {
                    threadId = data.thread_id;
                    userMessage = "Hello";
                    // chatTranscript = chatTranscript +  `User: ${userMessage}\n\n`;
                    // chatbox.appendChild(createChatLi(userMessage, "outgoing"));
                    // chatbox.scrollTo(0, chatbox.scrollHeight);
                    
                    setTimeout(() => {
                        const incomingChatLi = createChatLi("Starting conversation...", "incoming");
                        chatbox.appendChild(incomingChatLi);
                        chatbox.scrollTo(0, chatbox.scrollHeight);
                        generateResponse(incomingChatLi);
                    }, 600);
                })
                .catch(error => console.error('Error:', error));
            }
    }
});