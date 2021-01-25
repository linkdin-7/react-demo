import { MenuBook } from "@material-ui/icons";
import React from "react";
import "../../Styles/Message.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";

function Message({ user, image, data }) {
  return (
    <>
      {user ? (
        <div className="message user">
          <IconButton>
            <MoreHorizIcon fontSize="small" />
          </IconButton>
          <div className="message__data message_right">
            {data} <span className="date">4 days ago</span>
          </div>

          <img src={image} alt="" />
        </div>
      ) : (
        <div className="message">
          <img src={image} alt="" />
          <div className="message__data">
            {data} <span className="user_date">4 days ago</span>
          </div>
          <IconButton>
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </div>
      )}
    </>
  );
}

export default Message;
