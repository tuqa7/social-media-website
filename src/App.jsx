import "./App.css";
import postdatajson from "./assets/data/post_data.json";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Header from "./componants/header/header.componant";
import Feed from "./pages/feed/feed.page";
import NotFound from "./pages/notFound/notFound.page";
import Chats from "./pages/chats/chats.page";
import ViewPost from "./pages/viewPost/viewPost.page";
import AddPost from "./pages/addPost/addPost.page";
import Login from "./pages/Login/Login.page";
import ContextProvider from "./providers/provider";

import { Fetchposts } from "./services/posts";
// export const UserContext = React.createContext(null);
function App() {
  // const [query, changequery] = useState("");
  // const [querylikesandcomments, changequerylikesandcomments] = useState("");
  const [postsfeed, changeposts] = useState([]);

  useEffect(() => {
    featchPosts();
  }, []);

  const featchPosts = () => {
    // Fetchposts()
    //   .then((reselt) => {
    //     changeposts(reselt);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const postsfromstorge = JSON.parse(localStorage.post_data || "[]");
    if (postsfromstorge.length === 0) {
      localStorage.post_data = JSON.stringify(postdatajson);
      changeposts(postdatajson);
      // alert("1");
    } else {
      changeposts(postsfromstorge);
      // alert("2");
    }
  };

  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Navigate to="/feed" />}></Route>
            <Route path="feed" element={<Feed posts={postsfeed} />}></Route>
            <Route path="chats" element={<Chats />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route
              path="feed/:id"
              element={<ViewPost posts={postsfeed} />}
            ></Route>
            <Route
              path="add"
              element={<AddPost onaddpost={featchPosts} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
