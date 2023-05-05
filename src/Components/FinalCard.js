import React from 'react'

export default function FinalCard(props) {
  return (
    <>
<div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title text-success">{props.note.username}</h5>
    <h5 class="card-title">{props.note.rentalId}</h5>
    <h5 class="card-title">{props.note.status}</h5>   
   
  </div>
</div>
    </>
  )
}
