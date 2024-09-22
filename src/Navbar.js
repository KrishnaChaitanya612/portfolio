import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {useState} from 'react';
import {Navlists} from './Data';
const Navbar = () => {

 const [toggle,setToggle] = useState(false);
 
    return (
        <>
     <nav className="myNavBar">
        <span className="myNavToggle"  onClick = {()=>{setToggle(!toggle)}}>
            {toggle ? <CloseIcon /> : <MenuIcon/> }
        </span>
        <a href="#hero" className="logo">Krishna Chaitanya</a>
        <ul className={toggle ? 'myMainNav active' : 'myMainNav'} >
            {
                Navlists.map((Navlist) => {
                    const {id,name,link} = Navlist;
                    return (
                        
                    <li key = {id}>
                       <a href = {link} className = "myNavLinks" onClick = {()=>{setToggle(!toggle)}}>{name}</a>
                    </li>
                    )
                })
            }
           
        </ul>
    </nav>
        </>
    )
}

export default Navbar
