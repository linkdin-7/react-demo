import React from "react";
import "../Styles/ChatList.css";
import ChatCard from "./Children/ChatCard";

import { Search, ArrowDownward } from "@material-ui/icons";

function ChatList() {
  return (
    <div className="chatList">
      <div className="chatList__header">
        <div className="chatList__header__left">
          <h1>Chats</h1>
          <p>Recent Chats</p>
        </div>
        <div className="chatList__header__right">
          <button className="newChatButton">+ Create New Chat</button>
        </div>
      </div>

      <div className="chatList__search">
        <Search fontSize="small" />
        <input placeholder="Search" type="text" />
        <div className="chatList__dropdown">
          Messages <ArrowDownward />
        </div>

        {/* <div class="dropdown">
          <select name="slct" id="slct">
            <option value="1">Messages</option>
            <option value="2">Groups</option>
          </select>
        </div> */}
      </div>

      <div className="chatList__cards">
        <ChatCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&usqp=CAU"
  
          }
          name={"Luy Robins"}
          status={"writes"}
          lastMessage={
            "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes)."
          }
          time={1}
        />

        <ChatCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
          }
          name={"Jared Sunn"}
          status={"records voice message"}
          lastMessage={"Voice Message (2:05)"}
          time={1}
        />
          
        <ChatCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_N7HzuZusBhSusb6aSdbNSZVAEP5oEK0bYg&usqp=CAU"
          }
          name={"Nika Jerrardo"}
          status={"last online 1 hours ago"}
          lastMessage={
            "Cicero famously orated against his political opponent Lucius Sergius Catilina."
          }
          time={3}
        />

        <ChatCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhVoqZVRdPWcuTCEHaphmign8QVLxGeyCXQ&usqp=CAU"
          }
          name={"David Amrosa"}
          status={"last online  hours ago"}
          lastMessage={
            "Cicero famously orated against his political opponent Lucius Sergius Catilina."
          }
          time={4}
        />
      </div>
    </div>
  );
}

export default ChatList;
