
import { Link } from "react-router-dom";


export default function Navbar() {
   return (
<nav className="navbar navbar-expand-lg  text-white" style= {{ backgroundColor:' #3d71bb'}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Navbar scroll</a>
    
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse " id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >     
        <li  className="nav-item "> 
          <Link  to='/' className="nav-link text-white "> <span>HomePage</span></Link>
        </li>
        <li className="nav-item ">
          <Link  to='login' className="nav-link text-white"><span>login</span></Link>
        </li>
        <li  className="nav-item " aria-expanded='false'>
          <Link  to='signup'className="nav-link text-white" ><span>signup</span></Link>
        </li> 
        <li  className="nav-item show">
          <Link  to='dashboard'className="nav-link text-white"><span>Dashboard </span></Link>
        </li>     
       
      </ul>
      </div>
        
  </div>
 
</nav>
//  <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

    )

}
