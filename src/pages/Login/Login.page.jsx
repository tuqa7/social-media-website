import React, { useContext } from "react";
import "./Login.css";
import { Temp_Users } from "../../assets/data/users";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {UserContext}  from "../../providers/provider";

const Login = (props) => {
  const {user,handleUserLogin} = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/feed");
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    const emailuser = e.currentTarget.email.value;
    const passworduser = e.target.password.value;
    // console.log("1  " + emailuser + "   2  " + passworduser);
    const loginuser = Temp_Users.find(
      (user) => user.email === emailuser && user.password === passworduser
    );
    // console.log("  user find  " , user);
    if (loginuser) {
      // alert("welcome");
      handleUserLogin(loginuser);
      navigate("/feed" ,{replace:true});
    } else {
      alert("You are not user !");
    }
  };
  return (
    <div className="login">
      <h2>Welcome Back ! {" :) "}</h2>
      <form onSubmit={handleLogin}>
        <div className="col">
          <label>Email : </label>

          <input name="email" type={"email"} required />
        </div>
        <div className="col">
          <label>Password : </label>
          <input type={"password"} name="password" />
        </div>
        <span className="addpostbutton">
          <button type={"submit"}>Login</button>
        </span>
      </form>
    </div>
  );
};

export default Login;
