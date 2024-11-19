import React, { useState } from "react";
import "./container.css";
import ChatbotToggler from "./ChatbotToggler";
import Chatbot from "./Chatbot";

function Container() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className={`App ${showChatbot ? "show-chatbot" : ""}`}>
      <ChatbotToggler onClick={toggleChatbot} showChatbot={showChatbot} />
      <Chatbot
        showChatbot={showChatbot}
        onClose={() => setShowChatbot(false)}
      />
    </div>
  );
}

export default Container;
