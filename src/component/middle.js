import React, { useState }  from "react";
import "../css/middle.css";
import { useForm } from "react-hook-form";

function Middle() {
  const [text, setText] = useState([]);

  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const newValue = data.message;
    setText(text => [...text,newValue]);
    reset();
   
   
  };


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
  {text?.map((message)=> (
    <div className="user_conversation">
      <div className="user_conversation_message_container">
      
      <div className="user_conversation_message">
      {message}
      </div>
      </div>
      <div className="user_conversation_timestamp">
        30 mins ago
      </div>
    </div>
    ))}
  </div>
  </div>
<div className="message">
  <div className="message_input">
    <form onSubmit={handleSubmit(onSubmit)} className="message_input">
     <input 
     {...register("message", { required: true })} 
     placeholder="Message Team Turon" type="text" />
  
  <input type="submit"  hidden/>
   </form> 
  </div>
  </div>
    </div>
  );
}

export default Middle;
