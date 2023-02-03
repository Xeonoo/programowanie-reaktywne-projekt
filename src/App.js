import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Details from "./components/Details";
import { isExpired } from "react-jwt";
import React from "react";
import Add from "./components/Add";

function App() {
  const [search, setSearch] = React.useState("");
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home search={search} setSearch={setSearch} />}></Route>
    {isExpired(localStorage.getItem("token")) ? <Route path="/signin" element={<LogIn/>}/> : null}
    {isExpired(localStorage.getItem("token")) ? <Route path="/signup" element={<SignUp/>}/> : null}
    <Route exact path="/details/:id" element={<Details/>}/>
    <Route exact path="/add" element={<Add/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;