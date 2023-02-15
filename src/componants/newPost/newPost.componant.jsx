import React from "react";
import "../../pages/addPost/addPost.css";

const NewPost = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="col">
          <label>Your Post : </label>

          <textarea name="body" cols={50} rows={10} required></textarea>
        </div>
        <div className="col">
          <label>Image Url : </label>
          <input type={"url"} name="ImgUrl" />
        </div>
        <span className="addpostbutton">
          <button type={"submit"} disabled={props.user.role==="guest"}>Post</button>
        </span>
        <span className="addpostbutton">
          <button type={"reset"}>Clear</button>
        </span>
      </form>
    </div>
  );
};

export default NewPost;
