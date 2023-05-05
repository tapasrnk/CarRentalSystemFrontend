import React from 'react'
import { BrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg  navbar-dark bg-dark container-fluid">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-wash-car-logo-illustration-png-image_6667084.jpg" alt="" style={{height:"60px",backgroundcolor: "#fff"}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link class="btn btn-light" to="/" role="button">Home</Link>
        </li>
     </ul>
     
     <Link class="btn btn-primary" to="/register" role="button">Register</Link>

 

    </div>
  </div>
</nav> 
    
    </>
  )
}
