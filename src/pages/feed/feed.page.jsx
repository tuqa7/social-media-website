import Post from "../../componants/post/post.componant";
import "./feed.css";
import postdata from "../../assets/data/post_data.json";
import { useContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/provider";
import RangeComponant from "../../componants/likeAndcommantsRange/Range.componant";
import usePosts from "../../hooks/posts.hook";

const Feed = (props) => {
  const {user} = useContext(UserContext);

  // const [post_data, changepostdate] = useState(
  //    JSON.parse(localStorage.getItem("post_data"))
  //  // postdata
  // );
  const Filterdposts=usePosts(props.posts);
  const [filterdposts, changefilterdposts] = useState(props.posts);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {

    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  const queryfromurl = params.get("query") || "";
  const queryfromurlLikes = params.get("likes") || "";
  const queryfromurlcommants = params.get("commants") || "";

  // const Filterdposts = useMemo(() =>
  //   props.posts.filter(
  //     (post) => {
  //       const searchquery = queryfromurl.toLowerCase();

  //       let ismatching = false;
  //       // console.log(post);
  //       ismatching =
  //         (post.post_text.toLowerCase().includes(searchquery) ||
  //           post.user_name.toLowerCase().includes(searchquery)) &&
  //         post.likes_num > queryfromurlLikes &&
  //         post.commants_num > queryfromurlcommants;
  //       return ismatching;
  //     }
  //     ,
  //     [queryfromurl, props.posts, queryfromurlLikes, queryfromurlcommants]
  //   )
  // );

  

  useEffect(() => {
    // const searchquery = "tempus";
    // const searchquery=props.query.toLowerCase();
    // const searchquery=params.get('query') || "";

    const searchquery = queryfromurl.toLowerCase();
    console.log(searchquery.toString);
    console.log(searchquery);
    console.log(searchquery);
    console.log(queryfromurlLikes);
    console.log(queryfromurlcommants);
    // console.log(props.posts);
    const filterdposts = props.posts.filter((post) => {
      let ismatching = false;
      // console.log(post);
      ismatching =
        (post.post_text.toLowerCase().includes(searchquery) ||
          post.user_name.toLowerCase().includes(searchquery)) &&
        (post.likes_num > queryfromurlLikes) &&
        (post.commants_num > queryfromurlcommants);
      return ismatching;
    });

    changefilterdposts(filterdposts);
  }, [queryfromurl, props.posts, queryfromurlLikes, queryfromurlcommants]);

  return (
    <div className="body">
      {/* <RangeComponant /> */}
      {filterdposts.map((post, index) => (
        <Post
          key={post.id}
          dataPost={post}
          changepostdate={changefilterdposts}
          post_data={filterdposts}
          index={index}
        />
      ))}
    </div>
  );
};

export default Feed;
