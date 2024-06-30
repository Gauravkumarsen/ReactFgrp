import React, {useState} from "react";
import './navbar.css'
import { MdOutlineModeOfTravel } from "react-icons/md";
import { AiFillCloseSquare } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar =()=>{
const [active, setActive] = useState('navBar')

const showNav=()=>{
    setActive('navBar activeNavbar')
}

const removeNavbar=()=>{
    setActive('navBar')
}

    return(
    <section className = 'navBarSection'>
    <header className="header flex">
        <div className="logoDiv">
            <a href = "#" className="logo flex">
                <h1><MdOutlineModeOfTravel className= "icon"/>
               <span> Travel</span>..`IN`..<span>Dia</span></h1>
            </a>
        </div>

        <div className={active}>
            <ul className="navLists flex">
                <li className="navItem">
                    <a href="#" className="navLink"> Home</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink"> Key Features</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Bookings</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Contact</a>
                </li>

                <button className="btn">
                    <a href="#">Login</a>
                </button>
            </ul>

        <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseSquare className="icon"/>
        </div>
        </div>
 
      <div onClick={showNav}
      className="toggleNavbar">
        <TbGridDots className="icon"/>
      </div>
    </header>
    </section>
    )
}

export default Navbar

