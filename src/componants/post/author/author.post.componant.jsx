import "./author.css";
import user from "../../../assets/images/user.png";
import { Link } from "react-router-dom";

const Author_Post_Componant = (props) => {
  return (
    <div className="authorbody">
      <img src={props.authorimg} height="55px" width="55px" alt="user image" />

      <div className="info">
        <div className="author_name">{props.authorname}</div>

       <Link to={`/feed/${props.id}`}> <div className="clock">{props.authortime}</div></Link>
      </div>
    </div>
  );
};

export default Author_Post_Componant;
