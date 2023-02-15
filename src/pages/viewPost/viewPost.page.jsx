import { useState, useEffect, useContext } from "react";
import Post from "../../componants/post/post.componant";
import "./viewPost.css";
import postdata from "../../assets/data/post_data.json";
import { useNavigate, useParams } from "react-router-dom";
import {UserContext}  from "../../providers/provider";

const ViewPost = (props) => {
  const {user} = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    const localstorgeUser = localStorage.getItem("vsnUSER");
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  const [post, setPost] = useState(null);
  const [post_data, changepostdate] = useState(
    props.posts
    //  JSON.parse(localStorage.getItem("post_data"))
    // postdata
  );
  const par = useParams();

  useEffect(() => {
    // console.log("starrtr user effect", post_data);
    // const currentPost = post_data.filter((p) => p.id === par.id)[0] || null;
    const currentPost = post_data.find((p) => p.id === par.id)|| null;
    setPost(currentPost);
    // console.log("current post", currentPost);
  }, [par.id,props.posts]);


  return (
    <div>
     
      <Post
        dataPost={post}
        changepostdate={changepostdate}
        post_data={post_data}
        index={ 1}
      />
    </div>
  );
};

export default ViewPost;
