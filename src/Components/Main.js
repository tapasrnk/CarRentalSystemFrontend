import React from "react";
import Cards from "./Cards";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteState from "../context/notes/NoteState";
import { useEffect } from "react";
export default function Main() {
  const Context = useContext(NoteContext);
  
   
 const {state,notes,getCars,getNotes,setNotes}=useContext(NoteContext);
 
  //    const {getStatus,bookCar,registerUser,notes,setNotes} = context;
     useEffect(() => {
        fetch("http://localhost:8080/api/user/v1/cars").then((response)=>response.json()).then((data)=>{
            console.log(data);
            setNotes(data);
        })
       
     }, [])
     
  return (
    <>
      <NoteState>
      <div className="container my-3">
        <div className="row my-3">
          
            <h1 className="text-primary-emphasis text-center">Available Cars</h1>
          {notes.length===0 && 'No notes to display'}
          {notes.map((note) => {
            return (
            <div className="col-sm-4 col-md-4 my-3 ">
              <Cards key={note.carId} note={note} />
              </div>
            );
          })}               
            </div>
        
      </div>      
      </NoteState>
    </>
  );
}
