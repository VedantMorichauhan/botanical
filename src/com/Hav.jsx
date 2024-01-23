import '../css/Hav.css'
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/Action";
import BannerImage from "../img/logo.png"
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap';


const Hav = () => {
//   let dispatch = useDispatch();
//   let data = useSelector((store) => store.user);
//   // console.log(data);

//   let all=useSelector((store)=>store)
  // console.log(all);

  return (
    <>
    <div id="nav">
    
      <Link to="/" className="link padding-1"><h4>Home</h4></Link>
      <Link to="/About" className="link padding-1"><h4>About</h4></Link>
      <Link to="/Store" className="link padding-1"><h4>Store</h4></Link>
      <Link to="/Blog" className="link padding-1"><h4>Blog</h4></Link>
       <img src={BannerImage} alt="" />
      
      <Link to="/Cart" className="link padding-1"><h4>Cart</h4></Link>
      <Link to="/Contect" className="link padding-1"><h4>Contect</h4></Link>
      <Link to="/Login" className="link padding-1"><h4>Login</h4></Link>
      <Link to="/Signup" className="link padding-1"><h4>Signup</h4></Link>
      
    </div>
    </>
  );
};

export default Hav;
