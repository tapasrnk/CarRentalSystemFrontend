import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom';
export default function RegisterUser() {
    const [note, setNote] = useState({email:"",name:"",password:"",phone:""})
    let navigate=useNavigate();
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})  
      }
      const hello=()=>{
        navigate("/");
      }
      const handleClick=async(e)=>{
       e.preventDefault();
        console.log(note);
        const response = await fetch(
            `http://localhost:8080/api/user/v1/register`,
            {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({ email:note.email, name:note.name, password:note.password, phone:note.phone }), // body data type must match "Content-Type" header
            }
          );
          console.log(note);
          hello();
      }
  return (
    
    <>
    <form>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={note.email} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">name</label>
    <input type="text" className="form-control" id="name" name="name" value={note.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={note.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="phone" name="phone" value={note.phone} onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Register</button>
</form>
    </>
  )
}
