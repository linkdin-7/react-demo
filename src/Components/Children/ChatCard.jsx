import React from "react";
import "../../Styles/ChatCard.css";

function ChatCard({
  name,
  image,
  status,
  time,
  lastMessage,
  files,
  photos,
  videos,
  unread,
}) {
  return (
    <div className="chatCard">
      <div className="chatCard__header">
        <div className="header__left">
          <img src={image} alt="" />
          <div className="header__info">
            <p>{name}</p>
            <p>
              <small>{status}</small>
            </p>
          </div>
        </div>

        <div className="header__right">
          <small>{time} Minutes Ago</small>
        </div>
      </div>

      <div className="chatCard__message">
        <div className="message__left">
          <p>{lastMessage}</p>
          {files && <span className="message__attached file">Files</span>}
          {photos && <span className="message__attached photo">Photo</span>}
          {videos && <span className="message__attached video">Video</span>}
        </div>

        <div className="message__right">{unread && <span>{unread}</span>}</div>
      </div>
    </div>
  );
}

export default ChatCard;
