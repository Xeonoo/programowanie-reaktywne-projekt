import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Details from "./components/Details";

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/signin" element={<LogIn />}></Route>
    <Route exact path="/signup" element={<SignUp />}></Route>
    <Route exact path="/details" element={<Details />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
