import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Main from "./Components/Main";
import RegisterUser from "./Components/RegisterUser";
import { noteContext } from "./context/notes/noteContext";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookcar from "./Components/Bookcar";

import Accordion from "./Components/Accordion";
import Final from "./Components/Final";

function App() {
  return (
    
    <>
    <NoteState>
      
      <BrowserRouter>
        <Navbar />
        
        <span>&nbsp; </span>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Slider /> <span>&nbsp; </span> <Main />{" "}
                </>
              }
            ></Route>

            <Route path="/register" element={<RegisterUser />}></Route>
            <Route path="/bookcar" element={<><Bookcar/></>}></Route>
            <Route path="/check" element={<Final/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
