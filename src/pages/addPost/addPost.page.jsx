import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewPost from "../../componants/newPost/newPost.componant";
import "./addPost.css";
import {UserContext} from "../../providers/provider";


const AddPost = (props) => {
  const {user} = useContext(UserContext);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const postbody = event.target.body.value;
    const postimg = event.target.ImgUrl.value;

    const newPost = {
      id: `${Date.now()}`,
      isliked: false,
      issaved: false,
      commants_num: 0,
      likes_num: 0,
      post_img: postimg,
      post_text: postbody,
      time: new Date().toDateString() + " - " + new Date().toLocaleTimeString(),
      user_img:
        `${user.imageURL}`,
      user_name: user.fullname,
    };

    const postsfromstorge = JSON.parse(
      localStorage.getItem("post_data") || "[]"
    );
    const newposts = [newPost, ...postsfromstorge];
    localStorage.setItem("post_data", JSON.stringify(newposts));
    props.onaddpost();
    // alert("your post was add!");
    navigate("/feed");
  };

  useEffect(() => {
    if (user=== null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="addpost">
      <h2>What is In Your Mind ?</h2>
      {props.activeuser !== null ? (
        <NewPost handleSubmit={handleSubmit} user={user} />
      ) : null}
    </div>
  );
};

export default AddPost;
