import React  from "react";
import "../css/middle.css";

function Middle() {
  return (
    <div className="Middle">
  <div className="middle_name">
    Team Turon
  </div>
  <div className="conversation">
   
   <div className="conversation_system">
    
    <div className="user_reply">
      <div className="user_reply_avatar">
        <img src="./assets/avatar4.png" />
      </div>
      <div className="user_reply_message_container">
        <div className="user_reply_message">
       What are the tasks for today?
        </div>
        <div className="user_reply_timestamp">
         @brooklyn, 11:43 pm
        </div>

      </div>
    </div>
    <div className="user_reply">
      <div className="user_reply_avatar">
        <img src="./assets/avatar1.png" />
      </div>
      <div className="user_reply_message_container">
        <div className="user_reply_message">
        We’re not having standups today. I have no internet since midnight 
        </div>
        <div className="user_reply_timestamp">
         @robert, 11:43 pm
        </div>

      </div>
    </div>
    <div className="user_reply">
      <div className="user_reply_avatar">
        <img src="./assets/avatar2.png" />
      </div>
      <div className="user_reply_message_container">
        <div className="user_reply_message">
        @sasha Can you send screenshots of the screens you’re working rn?
        </div>
        <div className="user_reply_timestamp">
         @pena, 11:43 pm
        </div>

      </div>
    </div>
    <div className="user_conversation">
      <div className="user_conversation_message_container">
      <div className="user_conversation_message">
        Okay! wait a sec
      </div>
      </div>
      <div className="user_conversation_timestamp">
        30 mins ago
      </div>
    </div>
  </div>
  </div>
<div className="message">
  <div className="message_input">
    <input placeholder="Message Team Turon" type="text" />
  </div>
  </div>
    </div>
  );
}

export default Middle;
