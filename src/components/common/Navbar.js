import React, { useEffect, useState } from "react";
import '../../Css/Navbar.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [user, setUser] = useState({});
  const host = "http://localhost:3300";
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setUser({});
    navigate('/auth/login')

  }
  const fetchUser = async () => {

  }
  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <>
      <div className="wrapper">
        <div className="multi_color_border"></div>
        <div className="top_nav">
          <div className="left">
            <div className="logo"><p><span>Sili</span>Kart</p></div>

            <div className="tagline"><i><b>Your College Buddy</b></i></div>

          </div>
          <div className="right">
          {/* <div className="right"> */}
            <ul>
              <li><Link to="/"><b>HOME</b></Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              {user._id ? <li><Link to="/auth/login" onClick={handleLogout} >Logout</Link></li> : <li><Link to="/auth/signup">SignUp</Link></li>}
            </ul>
            <div className="burger">
              <GiHamburgerMenu size="32px" />
            </div>
          </div>
        </div>
        <div className="bottom_nav">
          <ul>
            <li><Link to="#"></Link></li>
            <li><Link to="/products/electronics"><b>Electronics</b></Link></li>
            <li><Link to="/products/books">Books</Link></li>
            <li><Link to="/products/lab"><b>Lab Equipments</b></Link></li>
            <li><Link to="/products/fashion">Fashion</Link></li>
            <li><Link to="/products/hostel"><b>Hostel Essentials</b></Link></li>
            <li><Link to="/products/others">Others</Link></li>
            <li><Link to="#"></Link></li>
          </ul>

        </div>
      </div>
    </>);
};

export default Navbar;
