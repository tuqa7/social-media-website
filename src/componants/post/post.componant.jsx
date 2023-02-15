import Author_Post_Componant from "./author/author.post.componant";
import "./post.css";
import coral from "../../assets/images/coral.jpg";
import ActionBar from "./actionBar/actionBar.post.componant";
import { useState } from "react";

const Post = (props) => {
  // console.log("start post after view post pafe", props);

  const post = props?.dataPost;
  const likes = post?.likes_num;
  const [postlikes, changelikes] = useState(likes);

  return (
    <div className="post-box">
      {post && (
        <Author_Post_Componant
          authorimg={post.user_img}
          authorname={post.user_name}
          authortime={post.time}
          id={post.id}
          index={props.index}
        />
      )}

      {post && (
        <div>
          <div className="post_text">{post.post_text}</div>
          {post.post_img && (
            <img src={post.post_img} alt="post_img" height={200} width="90%" />
          )}{" "}
        </div>
      )}

      {/* {console.log("lola"+props.index)} */}
      {post && (
        <ActionBar
          likesnum={post.likes_num}
          commantsnum={post.commants_num}
          changelikes={changelikes}
          postlikes={postlikes}
          changepostdate={props.changepostdate}
          post_data={props.post_data}
          id={post.id}
          index={props.index}
        />
      )}
    </div>
  );
};

export default Post;
