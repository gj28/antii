import React, { useState, useEffect, useRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "./container.css";
import Image from "next/image";

function ChatbotToggler({ onClick, showChatbot }) {
  const [showPopup, setShowPopup] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setShowPopup(true);

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="chatbot-toggler-container">
      <Tippy
        content="Ask Ai ? 🤖"
        visible={showPopup} // controlled mode
        reference={buttonRef}
        placement="top"
        animation="scale"
        duration={[300, 200]}
      >
        <button
          ref={buttonRef}
          className="chatbot-toggler"
          onClick={onClick}
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <Image
            src="/static/icons8-chat-bot.gif"
            alt="Chatbot Icon"
            width={50}
            height={50}
            className={`chatbot-icon ${showChatbot ? "closeIcon" : "chatIcon"}`}
          />
        </button>
      </Tippy>
    </div>
  );
}

export default ChatbotToggler;