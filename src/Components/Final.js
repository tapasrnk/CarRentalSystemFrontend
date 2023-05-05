import React from 'react'
import { useLocation } from 'react-router-dom'
import FinalCard from './FinalCard'
import { useState } from 'react'
export default function Final() {
    const location = useLocation();
   const [final, setfinal] = useState([]);

    const handleClick=async(e)=>{
        e.preventDefault();
      
        const response = await fetch(
            `http://localhost:8080/api/user/v1/check`,
            {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({username:location.state.username,rentalId:location.state.rentalId,status:location.state.status}), // body data type must match "Content-Type" header
            }
          );
          const json = await response.json();
          console.log("adding a new note");
          console.log(json);
          setfinal((prevvalue)=>{
            return [...prevvalue,json]
          })

    }
  return (
    <>
<div class="text-center">
  <button type="button" class="btn btn-primary" onClick={handleClick}>Check status</button>
</div>
{console.log(final,"final")}
  {final.map((note) => {
            return (
            <div className="col-sm-4 col-md-4 ">
              <FinalCard key={note.rentalId} note={note}/>
              </div>
            );
          })}    
    </>
  )
}
