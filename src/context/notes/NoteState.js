import react from "react";
import axios from "axios";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const state="ehllo"
  const [notes, setNotes] = useState([]);
  const [bookCar,setBookCar]=useState([]);
  const [bookkeep,setBookkeep]=useState([]);
  let arr=[];
  //ge all notes
 
  const getNotes=()=>{
    console.log("hello")
  }
  const getCars = async () => {
   const response=await fetch(
      `http://localhost:8080/api/user/v1/cars`,
      {
        mode: "no-cors",
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    const json=await response.json();
    console.log(json)
    setNotes(json) 
    
   
    // setNotes(json);
  };

  const getStatus = async () => {
    const response = await fetch(
      `https://carrentalsystem.onrender.com/api/user/v1/check`,
      {
        mode: "no-cors",
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //Add a note
 
  //
  const registerUser = async (email, name, password, phone) => {
    const response = await fetch(
      `https://carrentalsystem.onrender.com/api/user/v1/register`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ email, name, password, phone }), // body data type must match "Content-Type" header
      }
    );
    const json = await response.json();
    console.log("adding a new note");
    const note = json;
    setNotes(notes.concat(note));
  };
  return (
    <NoteContext.Provider
      value={{state,getCars, getStatus, registerUser, notes, setNotes, getNotes, bookCar, setBookCar, bookkeep, setBookkeep, arr}}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
