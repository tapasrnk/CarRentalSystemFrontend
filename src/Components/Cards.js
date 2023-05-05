import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import NoteState from '../context/notes/NoteState';
export default function Cards(props) {
  const location = useLocation();
    const context=useContext(noteContext);
    const {bookCar,setBookCar}=context;
    let navigate=useNavigate();
    const handleClick=()=>{
        // arr.push(props.note)
        // console.log(arr,"arr was pushed");
        setBookCar((prevBookCar) => {
            const newBookCar = [...prevBookCar, props.note];
            console.log(newBookCar,"newBookCar");
            return newBookCar;
        })
        
        navigate("/bookcar",{ state: props.note });
    }
  return (
    <>
    <NoteState>
    
    <div className="card" style={{width: "18rem"}}>
  <img src={props.note.car_url} className="card-img-top" alt="why"/>
  <div className="card-body">
    <h5 className="card-title">{props.note.model}</h5>
    <p className="card-text">{props.note.make}</p>
    <button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover" onClick={handleClick}>
  Book car
</button>


  </div>
</div>
</NoteState>
    </>
  )
}
