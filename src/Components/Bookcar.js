import React from 'react'
import "./Bookcar.css"
import { useState } from 'react'
import Accordion from './Accordion'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteState from '../context/notes/NoteState'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Bookcar() {
  let navigate=useNavigate();
  const location = useLocation();
  {console.log(location.state,"locationstate")}
    const context = useContext(noteContext);
    const {bookCar,arr}=context;
    console.log(bookCar,"arr in bookcar");
    const [note, setNote] = useState({password:"",paymentId:"",rentalEnd:"",rentalStart:"",returnLocation:"",username:""})
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const handleClick=async(e)=>{
      e.preventDefault();
      console.log(note);
      const response = await fetch(
          `http://localhost:8080/api/user/v1/book`,
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ amount:location.state.rentalPrice, carId:location.state.carId,password:note.password, paymentId:note.paymentId, pickUpLocation:location.state.location["locationName"],rentalEnd:note.rentalEnd,rentalStart:note.rentalStart,returnLocation:note.returnLocation,username:note.username}), // body data type must match "Content-Type" header
          }
        );
        const json = await response.json();
        console.log("adding a new note");
        console.log(json);
       navigate("/check",{state:json})
       
    }

  return (
    <>
      <span>&nbsp; </span>  
      <Accordion/>
<form>
  <div className="mb-3">
    <label htmlFor="amount" className="form-label">Amount</label>
    <input type="number" className="form-control" id="amount" name="amount" value={location.state.rentalPrice} disabled/>
  </div>
  <div className="mb-3">
    <label htmlFor="carId" className="form-label">CarId</label>
    <input type="number" className="form-control" id="carId" name="carId" value={location.state.carId} disabled/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={note.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="paymentId" className="form-label">PaymentId</label>
    <input type="text" className="form-control" id="paymentId" name="paymentId" value={note.paymentId} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="pickUpLocation" className="form-label">Pick Up Location</label>
    <input type="text" className="form-control" id="pickUpLocation" name="pickUpLocation" value={location.state.location["locationName"]}  disabled/>
  </div> 
  <div className="mb-3">
    <label htmlFor="rentalEnd" className="form-label">RentalEnd</label>
    <input type="text" className="form-control" id="rentalEnd" name="rentalEnd" value={note.rentalEnd} onChange={onChange}/>
  </div>   
  <div className="mb-3">
    <label htmlFor="rentalStart" className="form-label">RentalStart</label>
    <input type="text" className="form-control" id="rentalStart" name="rentalStart" value={note.rentalStart} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="returnLocation" className="form-label">ReturnLocation</label>
    <input type="text" className="form-control" id="returnLocation" name="returnLocation" value={note.returnLocation} onChange={onChange}/>
  </div> 
  <div className="mb-3">
    <label htmlFor="username" className="form-label">UserName</label>
    <input type="text" className="form-control" id="username" name="username" value={note.username} onChange={onChange}/>
  </div>       
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </>
  )
}
