import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar.jsx";


function App() {
  const [msg, setMsg] = useState("");
  const handleClick = async () => {
    const data = await fetch("/react");
    const json = await data.json();
    const msg = json.msg;
    setMsg(msg);
  };
  return (
    <>
      <Navbar />
      <button className="btn btn-primary ml-3 mt-3" onClick={handleClick}>salutttt</button>
      <p>{msg}</p>
    </>
  );
}

export default App;
