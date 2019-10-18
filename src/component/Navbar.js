import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/badge-header.svg'
import './styles/Navbar.css'

class Navbar extends Component {

    render(){

        return(
           <div className="Navbar">
               <div className="container-fluid">
                <Link className="Navbar__brand" to="/Badges">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </Link>

               </div>
           </div>
        )
    }
}

export default Navbar