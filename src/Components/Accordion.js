import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useLocation } from 'react-router-dom'
export default function Accordion() {
  const myStyle = {
    color: "white",

  }
    const context=useContext(noteContext);
    const {bookCar,book}=context;
    const Location = useLocation();
    {console.log(Location.state,"locationstate")}
  return (
    
    <div>
<div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        CarId
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body bg-dark text-light ">
        <strong>{Location.state.carId}</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed  bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        number_avaible
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body bg-dark text-light">
        <strong>{Location.state.number_avilable}</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed  bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Company-model
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body  bg-dark text-light">
        <strong>{Location.state.make}-{Location.state.model}</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed  bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        location-Name
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
      <div className="accordion-body  bg-dark text-light">
        <strong>{Location.state.location["locationName"]}</strong> 
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
