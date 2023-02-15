import React, { useState } from "react";
export const UserContext = React.createContext({});

const getLoggedInUser = () => {
  const localstorgeUser = localStorage.getItem("vsnUSER");
  return localstorgeUser || null;
  // if (localstorgeUser) {
  //   changeUser(JSON.parse(localstorgeUser));
  // } else {
  //   changeUser(null);
  // }
};

const ContextProvider = (props) => {
  const [user, changeUser] = useState(getLoggedInUser());

  const handleUserLogin = (loggedinUser) => {
    console.log("user", loggedinUser);
    changeUser(loggedinUser);
    localStorage.setItem("vsnUSER", JSON.stringify(loggedinUser));
  };

  return (
    <UserContext.Provider value={{ user, changeUser, handleUserLogin }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
