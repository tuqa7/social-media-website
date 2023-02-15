import React, { useContext, useEffect } from "react";
import "./chats.css";
import Chat from "../../assets/images/Chat.svg";
import { useNavigate,Link } from "react-router-dom";
import {UserContext}  from "../../providers/provider";

const Chats = (props) => {
  const {user} = useContext(UserContext);

  const navegate = useNavigate();

  const handleNav = () => {
    navegate({ pathname: "/feed" });
  };

  
  useEffect(() => {
    if ((user) === null) {
      navegate("/login");
    }
  }, [user]);

  return (
    <div>
      <Link to="/feed">go to feed</Link>
      <button onClick={handleNav}>go to feed</button>
      <div>
        <img src={Chat} height={500} width={800} />
      </div>
    </div>
  );
};

export default Chats;
