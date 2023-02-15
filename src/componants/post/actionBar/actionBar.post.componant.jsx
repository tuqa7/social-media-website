//rafce
import { Heart, ChatCircle, PaperPlaneTilt, BookmarkSimple } from "phosphor-react";
import "./actionBar.css";
import { useEffect, useState } from "react";
// import postdata from "../../data/post_data.json";

const ActionBar = (props) => {
  let data = props.post_data;

  useEffect(() => {
    localStorage.setItem("post_data", JSON.stringify(props.post_data));
  }, [props.post_data]);

  const [saved_posts, changesavedpost] = useState([]);

  const handlelike = () => {
    if (data[props.index].isliked === false) {
      props.changelikes(props.postlikes + 1);
      data[props.index].likes_num = parseInt(props.postlikes + 1);
      data[props.index].isliked = true;
    } else if (data[props.index].isliked === true) {
      props.changelikes(props.postlikes - 1);
      data[props.index].likes_num = parseInt(props.postlikes - 1);
      data[props.index].isliked = false;
    }

    console.log(data);
    props.changepostdate(data);
    localStorage.setItem("post_data", JSON.stringify(props.post_data));
  };

  return (
    <div className="ActionBar">
      <div className="ActionBar">
        <div className="Action">
          <button
            onClick={() => {
              handlelike();
            }}
          >
            <i className="grow">
              <Heart
                className="icon"
                size={28}
                color="#21a091"
                weight={data[props.index].isliked === true ? "fill" : "duotone"}
              />
            </i>
          </button>
          <span>{props.postlikes}</span>
        </div>
        <div className="Action">
          <i className="grow">
            <ChatCircle size={28} color="#21a091" weight="duotone" />
          </i>
          <span>{props.commantsnum}</span>
        </div>
        <div className="Action">
          <i className="grow">
            <PaperPlaneTilt size={28} color="#21a091" weight="duotone" />
          </i>
        </div>
      </div>
      <button
        onClick={() => {
          let post=props.post_data[props.index];
          if(data[props.index].issaved === false){
        
            data[props.index].issaved=true;
         
          
          }else if(data[props.index].issaved === true){
            data[props.index].issaved=false;
          }
          changesavedpost([...saved_posts,post]);
          localStorage.setItem("post_data", JSON.stringify(props.post_data));
        
        }}
      >
        {" "}
        <i className="grow">
          <BookmarkSimple size={28} color="#21a091" weight={data[props.index].issaved === true ? "fill" : "duotone"} />
        </i>
      </button>
    </div>
  );
};

export default ActionBar;
