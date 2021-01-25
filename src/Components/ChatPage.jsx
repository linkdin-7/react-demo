import { IconButton } from "@material-ui/core";
import {
  ArrowRight,
  AttachFile,
  InsertEmoticon,
  MenuBook,
} from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";

import React from "react";
import "../Styles/ChatPage.css";
import Message from "./Children/Message";

function ChatPage({ name, status }) {
  return (
    <div className="chatPage">
      <div className="chatPage__header">
        <div className="header__left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_N7HzuZusBhSusb6aSdbNSZVAEP5oEK0bYg&usqp=CAU"
            alt=""
          />
          <div className="header__info">
            <h3>{name}</h3>
            <p>{status}</p>
          </div>
        </div>

        <div className="header__right">
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
  
        </div>
      </div>
    

      <div className="chatPage__body">
        <Message
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_N7HzuZusBhSusb6aSdbNSZVAEP5oEK0bYg&usqp=CAU"
          data="Hello! I need your help in creating interactive animations for my web application."
        />
        <Message
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_N7HzuZusBhSusb6aSdbNSZVAEP5oEK0bYg&usqp=CAU"
          data="Can I send you files?"
        />
        <Message
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkKTkKnqZE23RyW0_npSDjVKIVg_uLRmZbw&usqp=CAU"
          data="Hey! Okay, send out. I will look into it. "
          user
        />
        <Message
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_N7HzuZusBhSusb6aSdbNSZVAEP5oEK0bYg&usqp=CAU"
          data="Style.zip"
        />

        <Message
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkKTkKnqZE23RyW0_npSDjVKIVg_uLRmZbw&usqp=CAU"
          data="Hello! I am sending the finished file."
          user
        />
      </div>

      <div className="chat__footer">
        <IconButton>
          <AddIcon />
        </IconButton>
        <form action="">
          <input placeholder="Type a message here" type="text" />
          <button disabled={true}>Send</button>
        </form>
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <IconButton className="send">
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatPage;
