import "./header.css";
import React from "react";
import { useContext } from "react";
import { Bell, ChatCircle, PlusCircle } from "phosphor-react";
import { Link, useSearchParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Userimg from "../../assets/images/user.png";

import { UserContext } from "../../providers/provider";

const Header = (props) => {
  const [params, changeparams] = useSearchParams();
  const {user,changeUser} = useContext(UserContext);

  const handleparmas = (e) => {
    const new_par = new URLSearchParams(params);
    if (e.currentTarget.value) {
      new_par.set("query", e.currentTarget.value);
    } else {
      new_par.delete("query");
    }

    changeparams(new_par);
  };

  const handelLogOut = () => {
    localStorage.removeItem("vsnUSER");
    changeUser(null);
  };

  return (
    <div className="header">
      <Link to="/feed">
        <img src={logo} alt="logo" height="50px" width={150} />
      </Link>
      <div className="actionheaderbar">
        <input
          // value={props.query}
          value={params.get("query") || ""}
          onChange={handleparmas}
          // onChange={(e) => {
          //   props.changequery(e.currentTarget.value);
          // }}
          className="rounded"
          placeholder="Search the post"
          type="search"
          name="search"
        />
        <i>
          <Bell size={28} color=" rgb(43, 42, 42)" weight="duotone" />
        </i>
        <Link to="/chats">
          <ChatCircle size={28} color=" rgb(43, 42, 42)" weight="duotone" />
        </Link>
        <Link to="add" title="add a post">
          <PlusCircle size={28} color=" rgb(43, 42, 42)" weight="duotone" />
        </Link>
      </div>
      {user !== null ? (
        <div className="avatar">
          <img
            className="userimg"
            src={user.imageURL}
            width={50}
            height={50}
          />
          <span>{user.fullname}</span>
        </div>
      ) : (
        <div></div>
      )}

      {user && <button onClick={handelLogOut}>Log Out</button>}
    </div>
  );
};

export default Header;
